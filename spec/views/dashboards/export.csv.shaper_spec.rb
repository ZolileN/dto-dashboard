require 'rails_helper'

describe 'dashboards/export.csv.shaper', type: :view do
  let(:dashboard) { FactoryGirl.create(:dashboard_with_widgets) }

  before do
    assign :dashboard, dashboard
    render
  end

  subject { CSV.parse(rendered, headers: false) }

  it { is_expected.not_to be_empty }
  specify { expect(subject[0].length).to eq 5 }

  specify { expect(subject.length).to eq dashboard.datasets.collect {|ds|
    ds.datapoints.count
  }.inject(:+) + 1 }

  describe 'headers' do
    let(:headers) { ['Dataset name', 'Units', 'Time stamp', 'Label', 'Value'] }
    specify { expect(subject.first).to eq headers }
  end

  describe 'row' do
    let(:row) { subject.second } # Ignore header row
    let(:dataset) { dashboard.datasets.first }
    let(:datapoint) { dataset.datapoints.first }

    specify { expect(row[0]).to eq dataset.name }
    specify { expect(row[1]).to eq dataset.units }
    specify { expect(row[2]).to eq datapoint.ts.strftime("%d/%m/%Y %H:%M") }
    specify { expect(row[3]).to eq datapoint.label }
    specify { expect(row[4]).to eq datapoint.value.to_s }
  end
end
