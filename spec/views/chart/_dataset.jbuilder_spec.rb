require 'rails_helper'

describe 'chart/_dataset', type: :view do
  let(:dataset) { FactoryGirl.create(:dataset_with_datapoints, label: 'bl*vh') }

  before do
    render 'chart/dataset', dataset: dataset
  end

  subject { JSON.parse(rendered) }

  specify { expect(subject['id']).to eq dataset.name.parameterize }
  specify { expect(subject['name']).to eq 'bl*vh' }
  specify { expect(subject['data'].first['value']).to eq(
    dataset.datapoints.first.value.to_s) }
end
