module API
  module V1
    class PersonResource < JSONAPI::Resource
      attributes :first_name, :last_name, :email, :date_of_birth, :gender
    end
  end
end
