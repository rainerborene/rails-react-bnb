class CreateVehicles < ActiveRecord::Migration[5.0]
  def change
    create_table :vehicles do |t|
      t.string :make, null: false
      t.string :model, null: false
      t.integer :year, null: false
      t.string :license_plate, null: false
      t.belongs_to :person, null: false, index: true, foreign_key: true
      t.timestamps
    end
  end
end
