require 'rails_helper'
require 'organisation_importer'

describe OrganisationImporter do

  let(:organisation) { FactoryGirl.create :organisation }

  subject { OrganisationImporter.new organisation, data_json, definition_json }

  context 'Good data' do
    let(:data_json) { File.read("spec/fixtures/valid-data.json") }
    let(:definition_json) { File.read("spec/fixtures/valid-definition.json") }

    it { is_expected.to be_valid }

    describe 'post-import' do
      let(:dashboard) { organisation.dashboards.first }
      let(:widget) { dashboard.widgets.find_by name: 'User satisfaction' }
      let(:dataset) { widget.datasets.find_by name: 'User satisfaction' }

      before do
        subject.import!
        organisation.reload
      end

      specify { expect(dashboard.name).to eq(
        'Australian Citizenship Appointment Booking Service') }

      specify { expect(dashboard.widgets.count).to eq 9 }

      specify { expect(dataset.datapoints.first.value).to eq 99 }

      specify { expect(dataset.widgets.count).to eq 2 }
    end
  end
end
