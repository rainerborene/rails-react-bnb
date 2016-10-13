require 'jsonapi/helpers'

class HomeController < ApplicationController
  include JSONAPI::Helpers

  helper_method :households_json, :people_json

  def index
    @households = Household.all
    @people = Person.all
  end

  private

  def households_json
    serialize_collection(@households, include: ['people']).to_json.html_safe
  end

  def people_json
    serialize_collection(@people).to_json.html_safe
  end
end
