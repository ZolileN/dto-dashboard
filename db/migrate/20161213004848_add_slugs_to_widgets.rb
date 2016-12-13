class AddSlugsToWidgets < ActiveRecord::Migration[5.0]

  class Widget < ActiveRecord::Base
    self.inheritance_column = :_type_disabled
    validates :name, :slug, uniqueness: { scope: :dashboard_id }
  end

  def up
    add_column :widgets, :slug, :string, null: false, default: ''

    Widget.all.each do |widget|
      widget.update_attribute :slug, widget.name.parameterize
    end
  end

  def down
    remove_column :widgets, :slug
  end
end
