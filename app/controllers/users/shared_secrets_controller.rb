class Users::SharedSecretsController < ApplicationController

  layout 'devise'

  before_action :ensure_secret_exists, only: [:new, :code]

  def create
    unless secret.present?
      redirect_to new_users_shared_secret_path
    end

    if authenticate_code secret, params[:code]
      current_user.update_attribute :otp_secret_key, secret
      session.delete :setup_totp
      redirect_to done_users_shared_secrets_path
    else
      current_user.increment! :second_factor_attempts_count
      @form_error = 'Your code didn\'t work. Please try again.'
      render :new
    end
  end

  def code
    uri = "otpauth://totp/#{current_user.email}?secret=#{secret}&issuer=#{issuer}"

    respond_to do |format|
      format.html
      format.png { render qrcode: uri, unit: 6 }
    end
  end

  def destroy
    session.delete :setup_totp
    redirect_to new_users_shared_secret_path
  end

  def index
  end

  def new
  end

  def done
  end

  private

  def authenticate_code(key, code)
    code.present? && key.present? && ROTP::TOTP.new(key).now == code
  end

  def secret
    @secret ||= session[:setup_totp]
  end

  def secret=(value)
    session[:setup_totp] = value
  end

  def ensure_secret_exists
    self.secret = current_user.generate_totp_secret
  end

  def issuer
    if Rails.env.development?
      'localhost'
    else
      ENV['APP_DOMAIN']
    end
  end

  def devise_controller?
    true
  end

end