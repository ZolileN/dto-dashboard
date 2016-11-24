class PreviewController < ApplicationController
  skip_before_action :verify_authenticity_token

  layout 'preview'

  def widget
    dps = JSON.parse(params.permit(:datapoints)[:datapoints])
    context = { preview_datapoints: dps }

    @widget = PreviewingWidgetDecorator.decorate(WidgetDecorator.decorate(
      Widget.find(params[:widget_id])), context: context)
  end
end
