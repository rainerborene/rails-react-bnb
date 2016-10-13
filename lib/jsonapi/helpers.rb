module JSONAPI
  module Helpers
    module_function

    def serialize_to_hash(model, options = {})
      resource_klass = "API::V1::#{model.class}Resource".constantize
      resource = resource_klass.new(model, nil)
      ResourceSerializer.new(resource_klass, options)
                        .serialize_to_hash(resource)
    end

    def serialize_collection(collection, options = {})
      collection.map { |resource| serialize_to_hash resource, options }
    end

    def serialize_to_json(model)
      attributes = serialize_to_hash(model)
      attributes[:data].delete('links')
      attributes[:data].delete('relationships')
      attributes.to_json
    end
  end
end
