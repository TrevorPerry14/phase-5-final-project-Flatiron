Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  resources :users, only: [:index, :show, :destroy, :create]
  resources :consoles, only: [:index, :show, :destroy]
  resources :games, only: [:index, :show, :destroy]
  resources :listings, only: [:index, :show, :destroy, :create]
  resources :wallets, only: [:index, :show, :destroy]

  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
end
