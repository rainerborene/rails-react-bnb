require 'rails_helper'

RSpec.describe Household, type: :model do
  it { is_expected.to validate_presence_of :address }
  it { is_expected.to validate_presence_of :zip }
  it { is_expected.to validate_presence_of :city }
  it { is_expected.to validate_presence_of :state }
  it { is_expected.to validate_presence_of :number_of_bedrooms }
  it { is_expected.to have_many :people }
  it { is_expected.to have_many(:vehicles).through(:people) }
end
