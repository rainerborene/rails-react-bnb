Rails.application.routes.draw do
  root to: 'home#index'

  namespace :api, format: false do
    namespace :v1 do
      jsonapi_resources :vehicles
      jsonapi_resources :households
      jsonapi_resources :people
    end
  end

  get '/*path', to: 'home#index'
end
