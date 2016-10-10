module Helpers
  def api_headers
    { 'Content-Type' => Mime[:api_json].to_s, 'Accept' => Mime[:api_json].to_s }
  end

  def serialize_to_hash(model)
    resource_klass = "API::V1::#{model.class}Resource".constantize
    resource = resource_klass.new(model, nil)
    JSONAPI::ResourceSerializer.new(resource_klass).serialize_to_hash(resource)
  end

  def serialize_to_json(model)
    attributes = serialize_to_hash(model)
    attributes[:data].delete('links')
    attributes.to_json
  end

  def json_response
    @json_response ||= JSON.parse(response.body)
  end
end

RSpec.configure do |config|
  config.include Helpers
end
