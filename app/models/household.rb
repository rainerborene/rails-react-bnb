class Household < ApplicationRecord
  validates :address, :zip, :city, :state, presence: true
  has_many :people
  has_many :vehicles, through: :people
end
