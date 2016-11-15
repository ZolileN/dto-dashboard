require 'rails_helper'

RSpec.describe Datapoint, type: :model do

  def get_time(str)
    DateTime.strptime(str, '%Y-%m-%d %H:%M')
  end

  it { is_expected.to belong_to :dataset }

  describe 'label' do
    subject(:datapoint) { FactoryGirl.create(:datapoint,
      ts: get_time('2016-01-01 12:00')) }
    its(:label) { is_expected.to eq '2016-01' }
  end

  describe 'validations' do
    it { is_expected.to validate_presence_of :ts }
    it { is_expected.to validate_numericality_of :value }

    describe 'frequency' do
      let(:dataset) { FactoryGirl.create :dataset, period: period }
      let!(:other) { FactoryGirl.create :datapoint, dataset: dataset,
        ts: other_ts }
      subject { FactoryGirl.build :datapoint, dataset: dataset,
        ts: get_time('2016-11-14 14:23') }

      context 'no period specified' do
        let(:other_ts) { get_time('2016-11-14 14:22') }
        let(:period) { 'free' }
        it { should be_valid }
      end

      context 'month' do
        let(:period) { 'month' }

        context 'too frequent' do
          let(:other_ts) { get_time('2016-11-01 14:22') }

          it { should_not be_valid }
        end

        context 'correct frequency' do
          let(:other_ts) { get_time('2016-10-28 14:22') }
          it { should be_valid }
        end
      end
    end
  end
end
