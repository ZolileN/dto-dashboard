require 'flipper'
require 'flipper/adapters/active_record'

# Constraint class (for routing)

class CanAccessFlipperUI
  def self.matches?(request)
    current_user = request.env['warden'].user
    current_user.present? && current_user.respond_to?(:admin?) && current_user.admin?
  end
end

# Set up global flipper instance

adapter = Flipper::Adapters::ActiveRecord.new
$flipper = Flipper.new(adapter)

# If an admin foolishly switches it off (thus denying themself access to
# Flipper UI), the day can be saved by setting the FORCE_AUTH_FEATURE
# environment variable and restarting the server.

if ENV['FORCE_AUTH_FEATURE']
  $flipper[:auth].enable
end