class CreatePeople < ActiveRecord::Migration[5.0]
  def change
    create_table :people, force: :cascade do |t|
      t.string :first_name, null: false
      t.string :last_name
      t.string :email
      t.date :date_of_birth
      t.integer :gender, null: false, default: 0
      t.belongs_to :household, null: false, foreign_key: { on_delete: :cascade }
      t.timestamps
    end
  end
end
