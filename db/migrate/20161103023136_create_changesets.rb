class CreateChangesets < ActiveRecord::Migration[5.0]
  def change
    create_table :changesets do |t|
      t.references :organisation, foreign_key: true
      t.datetime :applied_at
      t.jsonb :data

      t.timestamps
    end
  end
end
