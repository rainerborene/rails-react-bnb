class Vehicle < ApplicationRecord
  validates :make, :model, :year, :license_plate, presence: true
  belongs_to :person
end
