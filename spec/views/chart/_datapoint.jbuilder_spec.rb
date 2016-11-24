require 'rails_helper'

describe 'chart/_datapoint', type: :view do
  let(:datapoint) { FactoryGirl.create(:datapoint) }

  before do
    render 'chart/datapoint', datapoint: datapoint
  end

  subject { JSON.parse(rendered) }

  specify { expect(subject['id']).to eq datapoint.id }
  specify { expect(subject['value']).to eq datapoint.value.to_s }
  specify { expect(subject['label']).to eq datapoint.label }
end
