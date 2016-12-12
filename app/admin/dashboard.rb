ActiveAdmin.register Dashboard do
  permit_params :name, :url, :notes, :display_hero, :display_kpis,
    :published_at, :description, :target_users, :notes => []

  sidebar 'Details', only: [:show, :edit] do
    ul do
      li link_to 'Widgets', admin_dashboard_widgets_path(dashboard)
    end
  end

  index do
    selectable_column
    column :id
    column :name
    column :organisation
    actions
  end

  filter :name
  filter :organisation

  controller do
    def update(options={}, &block)
      if params.dig(:dashboard, :notes).present?
        begin
          resource.notes = JSON.parse params[:dashboard].delete(:notes)
        rescue JSON::ParserError => e
          redirect_to edit_admin_dashboard_path(resource),
            alert: "Invalid JSON structure. Details: #{e.message}"
          return
        end
      end

      super
    end
  end

  form do |f|
    f.inputs "Dashboard" do
      f.input :name, :as => :string
      f.input :url, :as => :string
      f.input :description, :label => 'What is the service?'
      f.input :target_users, :label => 'Who is the user group?'
      f.input :notes, :input_html => { value: resource.notes.to_json }
      f.input :display_hero
      f.input :display_kpis
      f.input :published_at
    end
    f.actions
  end

end
