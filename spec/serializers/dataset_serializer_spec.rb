require 'rails_helper'

RSpec.describe DatasetSerializer, type: :serializer do

  let(:dataset) { FactoryGirl.create(:dataset_with_datapoints) }

  subject(:data) { DatasetSerializer.new(dataset).to_hash }

  it { should include(:id) }
  it { should include(:name) }
  it { should include(:units) }
  it { should include(:data) }
  # it { should include('latest') }
  # it { should include('suffix') }
  # it { should include('datasets') }
  # it { should include('summary') }

  it {
    puts data.inspect
  }

  {
    "id": "user-satisfaction",
    "data": [{
      "label": "2016-03",
      "value": 99
    }, {
      "label": "2016-04",
      "value": 95
    }, {
      "label": "2016-05",
      "value": 90
    }, {
      "label": "2016-06",
      "value": 97
    }],
    "name": "User satisfaction",
    "note": "",
    "color": "#f0f0f0",
    "units": "",
    "recorded_at": "2016-06-30T01:01:01.111Z"
  }

  {
    "suffix": "%",
    "latest": {
      "label": "2016-06",
      "value": 97
    },
    "change": 7,
    "summary": "Up by undefined7.0% since 2016-05",
    "id": "user-satisfaction",
    "name": "User Satisfaction",
    "size": "extra-small",
    "type": "kpi-sparkline",
    "units": "%",
    "datasets": [{
      "id": "user-satisfaction",
      "data": [{
        "label": "2016-03",
        "value": 99
      }, {
        "label": "2016-04",
        "value": 95
      }, {
        "label": "2016-05",
        "value": 90
      }, {
        "label": "2016-06",
        "value": 97
      }],
      "name": "User satisfaction",
      "note": "",
      "color": "#f0f0f0",
      "units": "",
      "recorded_at": "2016-06-30T01:01:01.111Z"
    }],
    "updated_at": "2016-06-30T01:01:01.111Z",
    "description": "Overall satisfaction score includes all ratings weighted from 100% for very satisfied to 0% for very dissatisfied"
  }



end
