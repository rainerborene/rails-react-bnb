source 'https://rubygems.org'

gem 'rails', '~> 5.0.0', '>= 5.0.0.1'
gem 'email_validator', require: 'email_validator/strict'
gem 'pg', '~> 0.18'
gem 'puma', '~> 3.0'

# Assets
gem 'bootstrap-sass', '~> 3.3.6'
gem 'browserify-rails'
gem 'sass-rails', '~> 5.0'
gem 'uglifier', '>= 1.3.0'

group :development, :test do
  gem 'byebug', platform: :mri
end

group :development do
  gem 'guard-migrate'
  gem 'guard-rspec'
  gem 'listen', '~> 3.0.5'
  gem 'spring'
  gem 'spring-commands-rspec'
  gem 'spring-watcher-listen', '~> 2.0.0'
end

group :test do
  gem 'database_rewinder'
  gem 'rspec-rails'
  gem 'shoulda-matchers'
end
