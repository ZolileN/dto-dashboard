require 'rails_helper'

describe 'chart/_widget', type: :view do
  let(:options) { {} }
  let(:widget) { FactoryGirl.create(:widget_with_datasets, options: options) }

  before do
    render 'chart/widget', widget: widget
  end

  subject { JSON.parse(rendered) }

  specify { expect(subject['definition']).to eq subject['description'] }
  specify { expect(subject['latest']).to include 'label' }
  it { is_expected.not_to include 'displayRoundedData' }

  %w(id name size type units latest description definition updated_at datasets
      prefix suffix).each do |attr|
    it { is_expected.to include attr }
  end

  context 'with displayRoundedData option' do
    let(:options) { { 'displayRoundedData' => true } }
    it { is_expected.to include 'displayRoundedData' }
  end
end
