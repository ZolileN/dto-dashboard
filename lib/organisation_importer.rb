require 'json-schema'

class OrganisationImporter
  def initialize(organisation, data_json, definition_json)
    @organisation = organisation
    @data_json = data_json
    @definition_json = definition_json
  end

  def import!
    JSON::Validator.validate! data_schema, data
    JSON::Validator.validate! definition_schema, definition

    display_hero = definition['displayHero'].nil?
    display_kpis = definition['displayKPIs'].nil?

    if dashboard = @organisation.dashboards.find_by(name: definition['name'])
      dashboard.widgets.each do |widget|
        widget.datasets.delete_all
        widget.delete
      end
      dashboard.delete
    end

    dashboard = Dashboard.new(
      :name => definition['name'],
      :description => definition['description'] || '',
      :target_users => definition['target_users'] || '',
      :notes => definition['notes'],
      :url => definition['url'],
      :display_hero => display_hero,
      :display_kpis => display_kpis,
      :organisation => @organisation
    )
    dashboard.published_at = Time.now
    dashboard.save!(:validate => false)

    datasets = {}

    data['datasets'].each do |dataset|
      units = dataset["units"] || 'n'
      dataset_model = Dataset.create!(
        :name => dataset['name'],
        :label => dataset['label'] || dataset['name'],
        :notes => dataset['note'],
        :units => units)

      datasets[dataset['id']] = dataset_model

      if dataset['data']
        dataset['data'].each do |dp|
          ts = DateTime.strptime(dp['label'], '%Y-%m')
          dataset_model.datapoints.create!(:ts => ts, :value => dp['value'])
        end
      end
    end

    definition['widgets'].each do |widget|
      res = definition['layout'].collect.with_index { |a, row|
        [row, a.index(widget['id'])] if a.index(widget['id'])
      }.compact.flatten

      # this widget does not to be specified in the layout section (will not render it).
      # if we let it go further, it will break the database validation
      next if res.empty?

      # puts widget['id']
      description = widget['definition'].present? ? widget['definition'] : widget['description']
      is_hero = widget['is_hero'].present? ? widget['is_hero'] : false

      options = {}
      options['displayRoundedData'] = widget['displayRoundedData'] unless widget['displayRoundedData'].nil?
      options['stacking'] = widget['stacking'] if widget['stacking'].present?

      widget_model = Widget.create!(
        :dashboard => dashboard,
        :name => widget['name'],
        :description => description,
        :type => widget['type'],
        :size => widget['size'],
        :units => widget['units'],
        :last_updated_at => widget['updated_at'],
        :is_hero => is_hero,
        :options => options,
        :row => res.first,
        :pos => res.last
      )

      if widget['datasets']
        widget['datasets'].each do |dataset_id|
          widget_model.datasets << datasets[dataset_id]
        end
        widget_model.save!
      end
    end
  end

  private

  def data
    @data ||= JSON.parse @data_json
  end

  def data_schema
    @data_schema ||= JSON.parse File.read 'lib/schema/data.schema.json'
  end

  def definition
    @definition ||= JSON.parse @definition_json
  end

  def definition_schema
    @definition_schema ||= JSON.parse File.read 'lib/schema/definition.schema.json'
  end
end
