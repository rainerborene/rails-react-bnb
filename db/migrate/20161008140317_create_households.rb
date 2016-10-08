class CreateHouseholds < ActiveRecord::Migration[5.0]
  def change
    create_table :households do |t|
      t.string :address, null: false
      t.string :zip, null: false
      t.string :city, null: false
      t.string :state, null: false
      t.integer :number_of_bedrooms, null: false, default: 0
      t.timestamps
    end
  end
end
