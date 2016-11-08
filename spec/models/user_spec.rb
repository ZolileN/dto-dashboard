require 'rails_helper'

RSpec.describe User, type: :model do

  it { is_expected.to have_many :tokens }
  it { is_expected.to have_and_belong_to_many :dashboards }
  it { is_expected.to have_and_belong_to_many :datasets }

  describe '#generate_session_token!' do
    subject(:user) { FactoryGirl.create(:user) }

    context do
      let!(:token) { user.generate_session_token! }
      it { is_expected.to have(1).tokens }
      its(:session_token) {is_expected.to eq token }

      it { expect(token).to be_session }
    end

    context 'with existing session token' do
      let!(:expired_token) { user.generate_session_token! }
      let!(:token) {  user.generate_session_token! }

      it { is_expected.to have(2).tokens }
      it { expect(expired_token.reload).to be_expired }
      it { expect(token.reload).to be_active }

      its(:session_token) {is_expected.to eq token }
    end

    context 'with an api token' do
      let!(:api_token) { Token.create! }
      let!(:expired_token) { user.generate_session_token! }
      let!(:token) {  user.generate_session_token! }

      subject(:user) { FactoryGirl.create(:user, :tokens => [api_token]) }

      it { is_expected.to have(3).tokens }

      it { expect(expired_token.reload).to be_expired }
      it { expect(token.reload).to be_active }
      it { expect(api_token.reload).to be_active }

      its(:session_token) {is_expected.to eq token }
    end
  end

  describe 'tokens' do
    let(:active)   { Token.create! }
    let(:expired)  { FactoryGirl.create(:token_expired) }

    subject(:user) { FactoryGirl.create(:user, :tokens => [expired, active]) }

    describe 'expiration' do
      its(:token) { should eq active }
      its(:token) { should_not eq expired }
    end

    describe '#authenticate!' do
      context 'active token' do
        let(:authenticated) { User.authenticate!(active) }
        it { expect(user).to eq authenticated }
      end

      context 'expired token' do
        it { expect{ User.authenticate!(expired) }.to raise_error(ActiveRecord::RecordNotFound) }
      end

      context 'invalid token' do
        it { expect{ User.authenticate!('blahvtha') }.to raise_error(ActiveRecord::RecordNotFound) }
      end
    end
  end

  describe 'assigning dashboards and datasets' do
    let(:dashboard) { FactoryGirl.create(:dashboard_with_widgets) }
    let(:datasets)  { dashboard.datasets }

    subject(:user)  { FactoryGirl.create(:user) }

    it { expect(user.datasets).to be_empty }

    context 'adding a dashboard' do
      before { user.dashboards << dashboard }
      it { expect(user.datasets).to eq(datasets) }
    end

    context 'adding and removing a dashboard' do
      before {
        user.dashboards << dashboard
        user.dashboards.delete(dashboard)
      }
      it { expect(user.datasets).to be_empty }
      it { expect(dashboard.datasets).to_not be_empty }
    end

  end
end
