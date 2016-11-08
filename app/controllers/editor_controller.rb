class EditorController < ApplicationController

  before_action :authenticate_user!
  before_action :generate_session_token!
  helper_method :session_token

  protected

  def index
  end

  def session_token
    current_user.session_token
  end

  def generate_session_token!
    session[:session_token] ||= current_user.generate_session_token!
  end
end
