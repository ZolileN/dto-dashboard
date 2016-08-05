Rails.application.routes.draw do
  ActiveAdmin.routes(self)

  resources :dashboards, :only => [:index, :show]

  get root 'dashboards#index'
end
