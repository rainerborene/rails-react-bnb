require 'rails_helper'

RSpec.describe Person, type: :model do
  it { is_expected.to validate_presence_of :first_name }
  it { is_expected.to have_many :vehicles }
  it do
    is_expected.to define_enum_for(:gender).with([:undefined, :male, :female])
  end
  it { is_expected.to allow_value('maria@google.com').for(:email) }
  it { is_expected.not_to allow_value('something').for(:email) }
end
