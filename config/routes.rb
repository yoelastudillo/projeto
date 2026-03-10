Rails.application.routes.draw do
  root "products#index"
  resources :products
end

# get '/articles', to: 'articles#index'
# post '/articles', to: 'articles#create'
# patch '/articles/:id', to: 'articles#update'
# delete '/articles/:id', to: 'articles#destroy'
#
