class Person < ApplicationRecord
  validates :first_name, presence: true
  validates :email, email: true
  has_many :vehicles
  enum gender: [:undefined, :male, :female]
end
