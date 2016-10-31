import { createSelector } from 'reselect';

import {
  getDatasetById,
  getDatasetsByIds
} from './../reducers/datasets';

import {
  getDatapointsByIds,
  getHeadDatapoint
} from './../reducers/datapoints';


// types of data

// empty

// let datagroup = {
//   key,   //
//   datasets, []
//   datapoints: []
// }

// cross-sectional

// let datagroup = {
//   key,   // dataset_id
//   datasets, [1]
//   datapoints: [...]
// }

// time-series

// let datagroup = {
//   key,   // datehash like 2016-08
//   datasets, [1,2]
//   datapoints: [...]
// }


// shape of primitive data

// dataset = {
//   "id": 1,
//   "name": "User Satisfaction",
//   "label": "User Satisfaction",
//   "units": "n",
//   "notes": null,
//   "updated_at": "2016-10-25T03:40:35.919Z",
//   "datapoints": []
// };
//
// datapoints = {
//   "id": 6,
//   "value": null,
//   "label": "2016-06",
//   "ts": "2016-06-01 00:00:00.000"
// };

// datagroup = {
//   "key": "2016-06",
//   "datasets": [1],
//   "datapoints": [1,2,3]
// };


export const getDatagroup = (widget, datasets, datapoints) => {
  if (widget.datasets.length <= 1) {
    // no data exists or is simple
    return getDatagroupForSimple();
  }
  else if (widget.datasets.length === 1) {
    // cross-sectional data
    return getDatagroupForCrossSectional(widget, datasets, datapoints);
  }
  else {
    // time-series data
    return getDatagroupForTimeSeries(widget, datasets, datapoints);
  }
};


const getDatagroupForSimple = () => {
  return {
    key: 'edit',
    type: 'simple',
    datasets: [],
    datapoints: []
  }
};

export const getDatagroupForCrossSectional = (widget, datasets, datapoints) => {
  const widgetDataset = getDatasetById(widget.datasets[0]);
  const widgetDatapoints = getDatapointsByIds(datapoints, widgetDataset.datapoints);
  return {
    key: 'edit',
    type: 'cross-sectional',
    datasets: [widgetDataset],
    datapoints: widgetDatapoints
  }
};

export const getDatagroupForTimeSeries = (widget, datasets, datapoints) => {
  const widgetDatasets = getDatasetsByIds(datasets, widget.datasets);

  const widgetDatapointsByDataset = widgetDatasets.map(dataset => {
    return getDatapointsByIds(datapoints, dataset.datapoints);
  });
  const headDatapoints = widgetDatapointsByDataset.map(datapoints => {
    return getHeadDatapoint(datapoints)
  });
  return {
    key: headDatapoints[0].label,
    type: 'time-series',
    datasets: widgetDatasets,
    datapointsByDataset: widgetDatapointsByDataset,
    headDatapoints
  }
};
