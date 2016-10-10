Rails.application.routes.draw do
  root to: 'home#index'

  namespace :api, format: false do
    namespace :v1 do
      jsonapi_resources :households
    end
  end
end
