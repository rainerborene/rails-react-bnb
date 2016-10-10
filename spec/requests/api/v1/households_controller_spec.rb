require 'rails_helper'

RSpec.describe API::V1::HouseholdsController, type: :request do
  describe 'GET /api/v1/households' do
    it 'fetches records' do
      Fabricate :household

      get api_v1_households_path, headers: api_headers

      expect(response).to have_http_status :success
      expect(response.content_type).to eq Mime[:api_json]
    end
  end

  describe 'POST /api/v1/households' do
    it 'creates a new entry' do
      household = Fabricate.build :household

      expect do
        post api_v1_households_path,
             headers: api_headers, params: serialize_to_json(household)
      end.to change { Household.count }.by(1)

      expect(response).to have_http_status :created
      expect(response.content_type).to eq Mime[:api_json]
    end
  end

  describe 'PATCH /api/v1/households/:id' do
    it 'updates entry' do
      household = Fabricate :household
      household.address = 'Rua Tomé de Souza'

      patch api_v1_household_path(household),
            headers: api_headers, params: serialize_to_json(household)

      expect(response).to have_http_status :success
      expect(response.content_type).to eq Mime[:api_json]
      expect(json_response.dig('data', 'attributes', 'address'))
        .to eq(household.address)
    end
  end

  describe 'DELETE /api/v1/households/:id' do
    it 'deletes entry' do
      household = Fabricate :household

      delete api_v1_household_path(household),
             headers: api_headers, params: serialize_to_json(household)

      expect(response).to have_http_status :no_content
      expect(response.content_type).to eq(nil)
      expect(Household).to_not exist(household.id)
    end
  end
end
