require 'rails_helper'
require 'devise'

RSpec.describe WidgetsController, type: :controller do
  describe '#badge' do
    let(:widget) { FactoryGirl.create :widget }

    before { get :badge, params: { dashboard_id: widget.dashboard.to_param,
      id: widget.slug } }

    specify { expect(assigns(:widget)).to eq widget }
  end
end
