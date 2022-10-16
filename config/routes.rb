Rails.application.routes.draw do
  resources :posts
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  # Get "sign_in", to: "session#new"
  # Post "sign_in", to: "session#create"
   get "sign_up", to: "registration#new"
   post "sign_up", to: "registration#create"
  #  post 'get_user', to: "registration#get_user"
  post 'login',    to: 'session#create'
  # get 'login',    to: 'session#create'
  post 'logout',   to: 'session#destroy'
  get 'logged_in', to: 'session#is_logged_in'
  get 'get_categerious', to: 'categerious#getCategerious'
  get 'get_course', to: 'course#get_course'
  post 'get_course', to: 'course#get_course'

  post "/posts", to: 'posts#create'
get "/posts", to: "posts#index"

get 'get_subject', to: "subject#get_subject"
post 'get_subject', to: "subject#get_subject"

patch '/change_email', to: 'user#change_email'
patch '/change_name', to: 'user#change_name'
patch '/change_mobile', to: 'user#change_mobile_no'
patch '/change_address', to: 'user#change_address'
patch '/change_password', to: 'user#change_password'
  

post '/get_user', to: 'user#get_user'
  get '/get_user', to: 'user#get_user'

  post '/create_course', to: 'course#new'

  get 'get_my_courses', to: 'course#get_my_courses'
  post 'get_my_courses', to: 'course#get_my_courses'

  post '/set_image', to: 'posts#create'
  post 'get_image', to: 'posts#index'
  
end
