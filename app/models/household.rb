class Household < ApplicationRecord
  validates :address, :zip, :city, :state, presence: true
  has_many :people, dependent: :delete_all
  has_many :vehicles, through: :people
end
