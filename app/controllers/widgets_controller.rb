class WidgetsController < ApplicationController
  skip_before_filter :verify_authenticity_token, only: :embed
  after_action :allow_iframe, only: :badge

  layout 'badge', only: :badge

  before_action :find_widget

  def badge
  end

  def embed
  end

  private

  def find_widget
    dashboard = Dashboard.find params[:dashboard_id]
    @widget = dashboard.widgets.find_by! slug: params[:id]
  end

  def allow_iframe
    response.headers.except! 'X-Frame-Options'
  end
end
