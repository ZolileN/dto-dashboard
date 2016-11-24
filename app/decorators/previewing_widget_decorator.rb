class PreviewingWidgetDecorator < Draper::Decorator
  delegate_all

  decorates_association :datasets, with: PreviewingDatasetDecorator
end
