Rails.application.routes.draw do
  root to: 'home#index'

  namespace :api, format: false do
    namespace :v1 do
      jsonapi_resources :households do
        jsonapi_resources :people do
          jsonapi_resources :vehicles
        end
      end
    end
  end

  get '/*path', to: 'home#index'
end
