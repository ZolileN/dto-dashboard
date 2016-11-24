json.definition widget.description
json.(widget, :id, :name, :type, :size, :units,
  :description, :updated_at, :data_updated_at, :prefix, :suffix)

%w(displayRoundedData stacking).each do |opt|
  if widget.options&.key? opt
    json.set! opt.to_sym, widget.options[opt]
  end
end

json.latest do
  if widget.dataset&.latest.present?
    json.partial! 'chart/datapoint', datapoint: widget.dataset.latest
  end
end

json.datasets do
  json.array! widget.datasets, partial: 'chart/dataset', as: :dataset
end
