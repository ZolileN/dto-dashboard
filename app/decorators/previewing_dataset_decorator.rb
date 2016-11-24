class PreviewingDatasetDecorator < Draper::Decorator
  delegate_all

  def datapoints
    points = object.datapoints.to_a

    if preview_data.present?
      points.concat preview_data
    end

    points
  end

  def preview_data
    @preview_data ||= generate_preview_data
  end

  private

  def generate_preview_data
    if context[:preview_datapoints]
      context[:preview_datapoints].select {|hash|
        hash['dataset_id'] == object.id
      }.collect {|hash|
        Datapoint.new hash
      }.select {|dp|
        dp.valid?
      }
    end
  end
end
