FactoryGirl.define do
  factory :dataset do
    sequence(:name)   { |n| "dataset-#{n}" }
    sequence(:label)  { |n| "d-#{n}" }
    units '$'
    period 'free'

    factory :dataset_with_datapoints do
      transient do
        datapoints_count 10
      end

      after(:create) do |dataset, evaluator|
        create_list(:datapoint, evaluator.datapoints_count, dataset: dataset)
      end
    end
  end
end
