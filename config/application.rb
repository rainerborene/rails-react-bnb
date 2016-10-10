require_relative 'boot'

require 'rails'
require 'active_model/railtie'
require 'active_record/railtie'
require 'action_controller/railtie'
require 'action_view/railtie'
require 'sprockets/railtie'

Bundler.require(*Rails.groups)

module House
  class Application < Rails::Application
    config.generators do |g|
      g.javascripts false
      g.stylesheets false
      g.helper false
    end

    config.browserify_rails.commandline_options = '-t babelify'
  end
end
