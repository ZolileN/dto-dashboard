class MakeDatapointsIndexed < ActiveRecord::Migration[5.0]
  def change
    change_table :datasets do |t|
      t.datetime :start_ts, null: false
      t.string :period, null: false, default: 'month'
    end

    change_table :datapoints do |t|
      t.integer :idx, null: false
      t.index :idx, unique: true

      t.remove :ts, :datetime, null: false
      t.remove_index :ts
    end
  end
end
