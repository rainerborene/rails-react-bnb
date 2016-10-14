require 'jsonapi/helpers'

class HomeController < ApplicationController
  include JSONAPI::Helpers

  helper_method :serialize_collection

  def index
    @households = Household.all
    @people = Person.all
    @vehicles = Vehicle.all
  end
end
