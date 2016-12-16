class DashboardsController < ApplicationController
  caches_page :show, :index

  attr_reader :dashboards, :dashboard, :widgets
  helper_method :dashboards, :dashboard

  def index
    @dashboards = Dashboard.published.by_name.all.decorate

    render :index
  end

  def show
    @dashboard = Dashboard.find(params[:id]).decorate

    @title = @dashboard.name
    @description = @dashboard.name

    render :show
  end

  def export
    @dashboard = Dashboard.find(params[:id])
    @filename = "#{@dashboard.name} dashboard.csv"
  end
end
