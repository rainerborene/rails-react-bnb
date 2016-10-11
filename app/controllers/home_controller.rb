class HomeController < ApplicationController
  def index
    @households = Household.all
  end
end
