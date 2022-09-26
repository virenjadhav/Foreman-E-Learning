Rails.application.routes.draw do
  resources :posts
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  # Get "sign_in", to: "session#new"
  # Post "sign_in", to: "session#create"
   get "sign_up", to: "registration#new"
   post "sign_up", to: "registration#create"
   get 'get_user', to: "registration#getUser"
  post 'login',    to: 'session#create'
  # get 'login',    to: 'session#create'
  post 'logout',   to: 'session#destroy'
  get 'logged_in', to: 'session#is_logged_in'
  get 'get_categerious', to: 'categerious#getCategerious'
end
