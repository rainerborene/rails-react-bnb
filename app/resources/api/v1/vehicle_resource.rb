module API
  module V1
    class VehicleResource < JSONAPI::Resource
      attributes :make, :model, :year, :license_plate, :person_id

      def person_id
        _model.person_id.to_s
      end
    end
  end
end
