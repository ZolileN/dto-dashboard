Rails.application.routes.draw do

  unless Rails.env.production?
    devise_for :users,
      controllers: {
        sessions: "users/sessions",
        invitations: 'users/invitations'
      },
      :path => '',
      path_names: { sign_in: 'sign-in', sign_out: 'sign-out' }

    ActiveAdmin.routes(self)

    namespace :users do
      resources :shared_secrets, only: [:new, :create, :index] do
        collection do
          get :code
          get :done
        end
      end
      match 'shared_secret', to: 'shared_secrets#destroy', via: :delete
    end

    namespace :api, defaults: {format: 'json'} do
      namespace :v1 do
        resources :dashboards do
          resources :widgets
        end
        resources :datasets do
          resources :datapoints
        end
      end
    end

    get '/editor', :to => 'editor#index'
  end

  get root :to => 'dashboards#index'

  resources :dashboards, :only => [:index, :show] do
    member do
      get :export
    end
  end

  scope '/preview' do
    resources :dashboards, as: 'preview_dashboards', only: [:index, :show],
      defaults: { preview: true }
  end

  get 'feedback', :to => 'feedback#index'

  get '/index.html', :to => redirect('/')

  get '/copyright', :to => 'about#copyright'
  get '/api', :to => 'about#api'

end
