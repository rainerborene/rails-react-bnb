# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20161008140808) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "households", force: :cascade do |t|
    t.string   "address",                        null: false
    t.string   "zip",                            null: false
    t.string   "city",                           null: false
    t.string   "state",                          null: false
    t.integer  "number_of_bedrooms", default: 0, null: false
    t.datetime "created_at",                     null: false
    t.datetime "updated_at",                     null: false
  end

  create_table "people", force: :cascade do |t|
    t.string   "first_name",    null: false
    t.string   "last_name"
    t.string   "email"
    t.date     "date_of_birth"
    t.integer  "gender",        null: false
    t.integer  "household_id",  null: false
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
    t.index ["household_id"], name: "index_people_on_household_id", using: :btree
  end

  create_table "vehicles", force: :cascade do |t|
    t.string   "make",          null: false
    t.string   "model",         null: false
    t.integer  "year",          null: false
    t.string   "license_plate", null: false
    t.integer  "person_id",     null: false
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
    t.index ["person_id"], name: "index_vehicles_on_person_id", using: :btree
  end

  add_foreign_key "people", "households"
  add_foreign_key "vehicles", "people"
end
