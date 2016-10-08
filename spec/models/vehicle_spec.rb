require 'rails_helper'

RSpec.describe Vehicle, type: :model do
  it { is_expected.to validate_presence_of :make }
  it { is_expected.to validate_presence_of :model }
  it { is_expected.to validate_presence_of :year }
  it { is_expected.to validate_presence_of :license_plate }
  it { is_expected.to belong_to :person }
end
