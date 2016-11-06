class User < ApplicationRecord
  devise :invitable, :two_factor_authenticatable, :database_authenticatable,
    :confirmable, :lockable, :recoverable, :rememberable, :timeoutable,
    :trackable, :validatable

  has_one_time_password(encrypted: true)

  has_many :tokens do
    def expire
      update(:expired_at => Time.zone.now)
    end
  end

  belongs_to :organisation

  has_and_belongs_to_many :dashboards

  has_and_belongs_to_many :datasets

  has_many :datapoints, :through => :datasets

  has_many :widgets, :through => :dashboards

  # TODO Rationalise / normalise & get rid of this hack
  has_many :widget_datasets, class_name: 'Dataset', source: :datasets, :through => :widgets
  has_many :widget_datapoints, class_name: 'Datapoint', source: :datapoints, :through => :widgets

  has_many :organisations, :through => :dashboards

  def self.by_email
    order(:email => 'ASC')
  end

  def self.authenticate!(token)
    Token.authenticate!(token).user
  end

  def expire_session_tokens
    tokens.session.expire
  end

  def generate_api_token!
    tokens.create!(:session => false)
  end

  def generate_session_token!
    expire_session_tokens
    tokens.create!(:session => true)
  end

  def token
    tokens.active.first
  end

  def api_token
    tokens.api.active.first
  end

  def session_token
    tokens.session.active.first
  end

  def to_s
    email
  end

  def need_two_factor_authentication?(_request)
    $flipper[:two_factor].enabled?
  end

  def send_two_factor_authentication_code(code)
    # Send code via SMS, etc.
  end
end
