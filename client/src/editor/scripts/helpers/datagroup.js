import { createSelector } from 'reselect';
import moment from 'moment';
import { DATAGROUP_KEY_ROUTE_SEGMENT } from './../constants/dateFormats';


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


export const getDatagroupForCrossSectional = (widget, datasets, datapoints) => {
  const widgetDataset = getDatasetById(datasets, widget.datasets[0]);
  const widgetDatapoints = getDatapointsByIds(datapoints, widgetDataset.datapoints);
  return {
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

export const getLatestDatagroupKey = () => {
  let saidMonth = moment(new Date()).subtract(1, 'months');
  return saidMonth.format(DATAGROUP_KEY_ROUTE_SEGMENT)
};

