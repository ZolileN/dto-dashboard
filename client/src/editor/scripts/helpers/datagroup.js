import { createSelector } from 'reselect';
import moment from 'moment';
import { DATAGROUP_KEY_ROUTE_SEGMENT } from './../constants/dateFormats';


import {
  getDatasetById,
  getDatasetsByIds
} from './../reducers/datasets';

import {
  getDatapointsByIds,
  getHeadDatapoint,
  getDatapointOfKey
} from './../reducers/datapoints';


// types of data

// simple

// let datagroup = {
//   key,   //
//   type: 'simple',
//   datasets, []
//   datapoints: []
// }

// cross-sectional  // todo - most likely doesnt exist

// let datagroup = {
//   key,   // dataset_id
//   type: 'cross-sectional',
//   datasets, [1,2,3]
//   datapoints: [[2],[3],[4]]
// }

// time-series

// let datagroup = {
//   key,   // datehash like 2016-08
//   type: 'time-series',
//   datasets, [1,2,3]
//   datapoints: [[2,3,4],[3,6,7],[4,8,9]]
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

export const hasLatestDatagroup = (key) => {
  let currentMonth = new Date().getMonth() - 1;
  let latestSavedMonth = new Date(key).getMonth();
  return currentMonth === latestSavedMonth;
};

export const getDatagroup = (widget, datasets, datapoints, datagroup_key) => {
  let widgetDatasets,
    widgetDatapointsByDatasets,
    headGroup,
    group = [];

  let datagroup = {
    key: null,
    type: '',
    widget: widget,
    datasets: [],
    hasLatest: null,
    group: [],
    headGroup: []
  };

  if (widget.type === 'kpi-sparkline' || widget.type === 'full') {
    // if it's a kpi cluster, handle that separately
    // and exit
    return;
  }

  if (!widget.datasets.length) {
    // if no datasets assume type is simple
    // then exit
    datagroup.type = 'simple';
    return datagroup;
  }

  widgetDatasets = widget.datasets.map(d => {
    return getDatasetById(datasets, d);
  });
  datagroup.datasets = widgetDatasets;

  // need to get datasets so we can resolve headGroup
  widgetDatapointsByDatasets = widgetDatasets.map(wd => {
    return getDatapointsByIds(datapoints, wd.datapoints);
  });

  if (widgetDatapointsByDatasets[0].length <= 1) {  // todo - most likely deprecate because everything is time series
    datagroup.type = 'cross-sectional';
  }
  if (widgetDatapointsByDatasets[0].length > 1) {
    datagroup.type = 'time-series';
  }

  headGroup = widgetDatapointsByDatasets.map((d, idx) => {
    return getHeadDatapoint(widgetDatasets[idx].label, widgetDatasets[idx].updated_at, d);
  });

  datagroup.headGroup = headGroup;
  datagroup.key = headGroup[0].label || '';
  datagroup.hasLatest = hasLatestDatagroup(datagroup.key);

  if (datagroup_key) {
    widgetDatapointsByDatasets.forEach((wdd, idx) => {
      wdd.forEach(dp => {
        if (dp.label == datagroup_key) {  // double quality is important
          group.push({
            datasetName: widgetDatasets[idx].label,
            lastUpdated: dp.ts,
            ...dp
          })
        }
      })
    });
    datagroup.group = group;
  }
  // datagroup.group = group.length >= 1 ? group : headGroup;

  return datagroup;
};

export const getKpiDatagroup = (kpiWidgets, datasets, datapoints, datagroup_key) => {
  let widgetDatasets,
    widgetDatapointsByDatasets,
    group = [],
    headGroup;

  let datagroup = {
    key: null,
    type: 'kpi',
    kpiWidgets: [],
    heroWidget: null,
    datasets: [],
    group: [],
    headGroup: []
  };

  kpiWidgets.forEach(w => {
    if (w.type === 'full') {
      datagroup.heroWidget = w;
    } else {
      datagroup.kpiWidgets.push(w);
    }
  });

  datagroup.kpiWidgets.forEach((w,idx) => {
    if (!w.datasets.length) {
      // if no datasets assume no kpis stored like myGov
      // then exit
      return;
    } else {
      widgetDatasets = getDatasetsByIds(datasets, w.datasets);
      datagroup.datasets[idx] = widgetDatasets[0];

      // need to get datasets so we can resolve headGroup
      widgetDatapointsByDatasets = widgetDatasets.map(wd => {
        return getDatapointsByIds(datapoints, wd.datapoints);
      });

      headGroup = widgetDatapointsByDatasets.map((d, idx) => {
        return getHeadDatapoint(widgetDatasets[idx].label, widgetDatasets[idx].updated_at, d);
      });
      datagroup.headGroup[idx] = headGroup[0];

      if (datagroup_key) {
        widgetDatapointsByDatasets.forEach((wdd, idx) => {
          wdd.forEach(dp => {
            if (dp.label == datagroup_key) {  // double quality is important
              group.push({
                datasetName: widgetDatasets[idx].label,
                lastUpdated: dp.ts,
                ...dp
              })
            }
          })
        });
      }
      datagroup.group[idx] = group;
    }
  });

  datagroup.key = datagroup.headGroup[0].label || '';
  datagroup.hasLatest = hasLatestDatagroup(datagroup.key);

  return datagroup
};


















// export const getDatagroupForCrossSectional = (widget, datasets, datapoints) => {
//   const widgetDataset = getDatasetById(datasets, widget.datasets[0]);
//   const widgetDatapointsByDataset = getDatapointsByIds(datapoints, widgetDataset.datapoints);
//   const headDatapoint = getHeadDatapoint(widgetDatapointsByDataset);
//   return {
//     type: 'cross-sectional',
//     datasets: [widgetDataset],
//     // datapoints: widgetDatapointsByDataset,
//     headDatapoints: [headDatapoint]
//   }
// };
//
// export const getDatagroupForTimeSeries = (widget, datasets, datapoints) => {
//   const widgetDatasets = getDatasetsByIds(datasets, widget.datasets);
//
//   const widgetDatapointsByDataset = widgetDatasets.map(dataset => {
//     return getDatapointsByIds(datapoints, dataset.datapoints);
//   });
//   const headDatapoints = widgetDatapointsByDataset.map(datapoints => {
//     return getHeadDatapoint(datapoints);
//   });
//   return {
//     key: headDatapoints[0].label,
//     type: 'time-series',
//     datasets: widgetDatasets,
//     // datapointsByDataset: widgetDatapointsByDataset,
//     headDatapoints
//   }
// };
//
// export const getDatagroupForKpi = (kpiWidgets, datasets, datapoints) => {
//   const widgetDatasets = kpiWidgets.map(w => {
//     return w.datasets;
//   }).map(d => {
//     return getDatasetsByIds(datasets, d)[0];
//   });
//   const widgetDatapointsByDataset = widgetDatasets.map(dataset => {
//     return getDatapointsByIds(datapoints, dataset.datapoints);
//   });
//   const headDatapoints = widgetDatapointsByDataset.map(datapoints => {
//     return datapoints.length ? getHeadDatapoint(datapoints) : null;
//   });
//   return {
//     key: headDatapoints[0] ? headDatapoints[0].label : '',
//     type: 'kpis',
//     datasets: widgetDatasets,
//     // datapointsByDataset: widgetDatapointsByDataset,
//     headDatapoints
//   }
// };

export const getLatestDatagroupKey = () => {
  let currentMonth = moment(new Date()).subtract(1, 'months');
  return currentMonth.format(DATAGROUP_KEY_ROUTE_SEGMENT)
};

export const getNextDatagroupKey = (key) => {
  let nextMonth = moment(new Date(key)).add(1, 'months');
  return nextMonth.format(DATAGROUP_KEY_ROUTE_SEGMENT)
};

export const getPreviousDatagroupKey = (key) => {
  let previousMonth = moment(new Date(key)).subtract(1, 'months');
  return previousMonth.format(DATAGROUP_KEY_ROUTE_SEGMENT)
};




export const makePreviewItems = datagroup => {
  if (!datagroup.datasets.length) {
    return [];
  }
  if (!datagroup.headGroup.length) {
    return [];
  }
  return datagroup.datasets.map((d, idx) => {
    return {
      label: datagroup.headGroup[idx].datasetName,
      value: datagroup.headGroup[idx].value
    }
  });
};

export const makeKpiPreviewItems = datagroup => {
  if (!datagroup.datasets.length) {
    return [];
  }
  if (!datagroup.headGroup.length) {
    return [];
  }
  return datagroup.datasets.map((d, idx) => {
    return {
      label: datagroup.headGroup[idx].datasetName,
      value: datagroup.headGroup[idx].value
    }
  });
};
