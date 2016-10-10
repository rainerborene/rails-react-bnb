module API
  module V1
    class HouseholdResource < JSONAPI::Resource
      attributes :address, :zip, :city, :state, :number_of_bedrooms
    end
  end
end
