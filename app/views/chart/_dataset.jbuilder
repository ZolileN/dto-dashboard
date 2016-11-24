json.(dataset, :units, :notes, :data_updated_at)
json.id dataset.name.parameterize
json.name(dataset.label || dataset.name)
json.data do
  json.array! dataset.datapoints, partial: 'chart/datapoint', as: :datapoint
end
