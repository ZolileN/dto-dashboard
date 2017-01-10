require 'rails_helper'
require 'organisation_importer'

describe OrganisationImporter do
  let(:organisation) { FactoryGirl.create :organisation }
  let(:definition_json) { File.read("spec/fixtures/valid-definition.json") }
  let(:dashboard_id) { 999999 }

  subject { OrganisationImporter.new organisation, data_json, definition_json,
    dashboard_id }

  context 'Valid data' do
    let(:data_json) { File.read("spec/fixtures/valid-data.json") }

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

      specify { expect(dashboard.notes.count).to eq 6 }
    end

    context 'with preexisting dashboard' do
      let!(:old_dashboard) { FactoryGirl.create :dashboard,
        id: dashboard_id, organisation: organisation }
      let!(:old_widget) { FactoryGirl.create :widget_with_datasets,
        dashboard: old_dashboard }

      before do
        subject.import!
      end

      specify { expect(Widget.find_by(id: old_widget.id)).to be_nil }
    end
  end

  context 'Non-conforming data' do
    let(:data_json) { File.read("spec/fixtures/invalid-data.json") }

    specify { expect{ subject.import! }.to raise_error JSON::Schema::ValidationError }
  end

  context 'Non-JSON data' do
    let(:data_json) { File.read("spec/fixtures/broken-data.json") }

    specify { expect{ subject.import! }.to raise_error JSON::ParserError }
  end
end
