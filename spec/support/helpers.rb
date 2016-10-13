require 'jsonapi/helpers'

module Helpers
  def api_headers
    { 'Content-Type' => Mime[:api_json].to_s, 'Accept' => Mime[:api_json].to_s }
  end

  def json_response
    @json_response ||= JSON.parse(response.body)
  end
end

RSpec.configure do |config|
  config.include JSONAPI::Helpers
  config.include Helpers
end
