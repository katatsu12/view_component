Rails.application.routes.draw do
  root 'site#index'

  resources :users, only: %i[new create]
end
