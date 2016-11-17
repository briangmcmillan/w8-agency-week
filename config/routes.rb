Rails.application.routes.draw do


  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  root 'items#static'


  scope '/api' do
    get '/filter' => 'category#filter'
    resources :items
    resources :category
    resources :charges 
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
