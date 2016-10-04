class Api::V1::ApiController < ActionController::API
  include ActionController::HttpAuthentication::Token::ControllerMethods
  include Sslify

  attr_reader :token, :current_user

  before_action :authenticate

  protected

  def with_invalid_record_handler(&block)
    begin
      block.call
    rescue ActiveRecord::RecordInvalid => e
      render :json => { :code => 'RecordInvalid', :message => e.message}, :status => :bad_request
    end
  end

  private

  def authenticate
    authenticate_token || render_unauthorized
  end

  def authenticate_token
    authenticate_with_http_token do |token, _options|
      begin
        @token = Token.authenticate!(token)
        @current_user = @token.user
      rescue ActiveRecord::RecordNotFound
        return false
      end
    end
  end

  def render_unauthorized
    self.headers['WWW-Authenticate'] = 'Token realm="Application"'
    render json: 'Bad credentials', status: :unauthorized
  end
end