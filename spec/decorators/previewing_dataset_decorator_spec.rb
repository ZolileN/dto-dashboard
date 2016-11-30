require 'rails_helper'

RSpec.describe PreviewingDatasetDecorator, type: :decorator do
  let(:dataset) { FactoryGirl.create(:dataset_with_datapoints) }
  subject { PreviewingDatasetDecorator.decorate(dataset, context: dec_context) }

  let(:dec_context) { { preview_datapoints: [
    { 'ts'          => 2.days.ago,
      'value'       => 40,
      'dataset_id'  => dataset_id } ] } }

  context 'with irrelevant datapoint' do
    let(:dataset_id) { 999999999 }

    specify { expect(subject.datapoints.count).to eq dataset.datapoints.count }
  end

  context 'with relevant datapoint' do
    let(:dataset_id) { dataset.id }

    specify { expect(subject.datapoints.count).to eq dataset.datapoints.count + 1 }
    specify { expect(subject.datapoints.first.value).to eq 40 }
  end
end
