module API
  module V1
    class PersonResource < JSONAPI::Resource
      attributes :first_name, :last_name, :email, :date_of_birth, :gender
      attribute :household_id

      def household_id
        _model.household_id.to_s
      end
    end
  end
end
