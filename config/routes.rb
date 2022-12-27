Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  resources :users, only: [:index, :show, :destroy, :create]
  resources :consoles, only: [:index, :show, :destroy]
  resources :games, only: [:index, :show, :destroy]
  resources :listings, only: [:index, :show, :destroy, :create, :update]
  resources :wallets, only: [:index, :show, :destroy, :update]
  resources :haves, only: [:index, :create, :destroy, :update]

  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  post "/charge", to: "charge#create"
end
