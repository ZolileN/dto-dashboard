import moment from 'moment';
import { DATAGROUP_KEY_ROUTE_SEGMENT } from './../constants/dateFormats';


export const getLatestDatagroupKey = () => {
  let currentMonth = moment(new Date()).subtract(1, 'months');
  return currentMonth.format(DATAGROUP_KEY_ROUTE_SEGMENT)
};

export const getSubmitDateBasedOnTs = (ts) => {
  let nextMonth = moment(new Date(ts)).add(1, 'months');
  return nextMonth.toJSON();
};


//
// export const getDatagroupset = (widget, datasets, datapoints) => {
//
//   // shape of datagroupgroupsets
//   //
//
//   let state = {};
//
//   let groupsetState = { // reminder: don't use by direct assignment
//     type: null,
//     widget: null,
//     groups: [],
//     hasHead: null,
//     headKey: latestDatagroupKey,
//     currentKey: null,
//     currentLastUpdated: null,
//     hasRecent: null,
//     recentKey: null,
//     recentLastUpdated: null,
//   };
//
//   let groupState = { // reminder: don't use by direct assignment
//     key: null,
//     dataset: null,
//     datapoints: null,
//     headDatapointIdx: null,
//     recentDatapointIdx: null
//   };
//
//   // initialise the groupset
//   //
//   state = {...groupsetState};
//
//
//   // curate groupset
//   // curate groups
//   //
//
//   state.widget = widget;
//
//
//   // simple type
//   //
//
//   if (!widget.datasets.length) {
//     // no datasets, assume this means type is simple
//     // *then exit*
//     state.type = 'simple';
//
//   } else {
//
//     // time-series type
//     //
//     state.type = 'time-series';
//
//     state.groups = widget.datasets.map(datasetId => {
//
//       let group = {...groupState};
//
//       group.dataset = getDatasetById(datasets, datasetId);
//       group.datapoints = getDatapointsByIds(datapoints, group.dataset.datapoints);
//       if (group.datapoints.length) {
//         group.key = group.datapoints[0].label;
//       }
//       group.headDatapointIdx = group.datapoints.find((dp, idx) => {
//         if (dp.label === latestDatagroupKey) {
//           return idx;
//         }
//       });
//
//       group.recentDatapointIdx = group.datapoints.reduce((curr, next, idx, arr) => {
//         if (arr[idx+1]) {
//           if (new Date(next.label) > new Date(arr[idx+1])) {
//             return idx;
//           }
//           return curr;
//         }
//         return curr;
//       }, 0); // curr is idx
//
//       return group;
//
//     });
//
//
//     // meta
//
//     state.hasHead = state.groups[0].headDatapointIdx >= 0;
//     state.hasRecent = state.groups[0].recentDatapointIdx >= 0;
//     if (state.hasRecent) {
//       let item = state.groups[0].datapoints[state.groups[0].recentDatapointIdx];
//       if (item) {
//         state.recentKey = item.label;
//         state.lastUpdated = state.groups[0].dataset.updated_at; {/* todo - improve */}
//       }
//     }
//
//     // end curate
//
//   }
//
//   // return groupset
//
//   // console.log('hydrating datagroupset', state);
//
//   return state;
// };
//
//
// export const getRecentDatagroupsetSlice = datagroupset => {
//   let lastUpdated;
//   let state = {
//     ...datagroupset,
//     groups: datagroupset.groups.map((group => {
//       if (!lastUpdated && group.datapoints.length) {
//         lastUpdated = group.datapoints[0].ts;
//       }
//       if (group.datapoints.length) {
//         return {
//           key: group.key,
//           dataset: group.dataset,
//           datapoint: group.datapoints[group.recentDatapointIdx],
//           isHead: group.key === latestDatagroupKey
//         }
//       } else {
//         console.warn('no recent datapoints');
//       }
//     }))
//   };
//   if (lastUpdated) {
//     state.recentLastUpdated = lastUpdated;
//   }
//   return state;
// };
//
//
// export const getCurrentDatagroupsetSlice = (datagroupset, datagroupKey) => {
//   let indexOfCurrent,
//     lastUpdated;
//
//   debugger
//   datagroupset.groups.forEach((g, idx) => {
//     if (g.datapoints[0].label === datagroupKey) {
//       indexOfCurrent = idx;
//     }
//   });
//   if (!indexOfCurrent){
//     console.log('no current data for datagroupset', datagroupset);
//   }
//
//   let state = {
//     ...datagroupset,
//     currentKey: datagroupKey,
//     groups: datagroupset.groups.map((group => {
//       if (!lastUpdated && group.datapoints.length) {
//         lastUpdated = group.datapoints[0].ts;
//       }
//       if (!indexOfCurrent) {
//         return {
//           key: datagroupKey,
//           dataset: group.dataset,
//           datapoint: null,
//           isHead: false
//         }
//       } else {
//         return {
//           key: indexOfCurrent,
//           dataset: group.dataset,
//           datapoint: group.datapoints[indexOfCurrent],
//           isHead: group.key === latestDatagroupKey
//         }
//       }
//     }))
//   };
//   if (lastUpdated) {
//     state.currentLastUpdated = lastUpdated;
//   }
//   return state;
// };

export const getNextDatagroupKey = (key) => {
  let nextMonth = moment(new Date(key)).add(1, 'months');
  return nextMonth.format(DATAGROUP_KEY_ROUTE_SEGMENT)
};

export const getPreviousDatagroupKey = (key) => {
  let previousMonth = moment(new Date(key)).subtract(1, 'months');
  return previousMonth.format(DATAGROUP_KEY_ROUTE_SEGMENT)
};


























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

// export const hasLatestDatagroup = (key) => {
//   let currentMonth = new Date().getMonth() - 1;
//   let latestSavedMonth = new Date(key).getMonth();
//   return currentMonth === latestSavedMonth;
// };

//  export const getDatagroup = (widget, datasets, datapoints, datagroup_key) => {
//   let widgetDatasets,
//     widgetDatapointsByDatasets,
//     headGroup,
//     group = [];
//
//   let datagroup = {
//     key: null,
//     type: '',
//     widget: widget,
//     datasets: [],
//     hasLatest: null,
//     group: [],
//     headGroup: []
//   };
//
//   if (widget.type === 'kpi-sparkline' || widget.type === 'full') {
//     // if it's a kpi cluster, handle that separately
//     // and exit
//     return;
//   }
//
//   if (!widget.datasets.length) {
//     // if no datasets assume type is simple
//     // then exit
//     datagroup.type = 'simple';
//     return datagroup;
//   }
//
//   widgetDatasets = widget.datasets.map(d => {
//     return getDatasetById(datasets, d);
//   });
//   datagroup.datasets = widgetDatasets;
//
//   // need to get datasets so we can resolve headGroup
//   widgetDatapointsByDatasets = widgetDatasets.map(wd => {
//     return getDatapointsByIds(datapoints, wd.datapoints);
//   });
//
//   if (widgetDatapointsByDatasets[0].length <= 1) {  // todo - most likely deprecate because everything is time series
//     datagroup.type = 'cross-sectional';
//   }
//   if (widgetDatapointsByDatasets[0].length > 1) {
//     datagroup.type = 'time-series';
//   }
//
//   headGroup = widgetDatapointsByDatasets.map((d, idx) => {
//     return getHeadDatapoint(widgetDatasets[idx].label, widgetDatasets[idx].updated_at, d);
//   });
//
//   datagroup.headGroup = headGroup;
//   datagroup.key = datagroup_key ? datagroup_key : (headGroup[0].datapoint.label || '');
//   datagroup.hasLatest = hasLatestDatagroup(datagroup.key);
//
//   if (datagroup.key) {
//     widgetDatapointsByDatasets.forEach((wdd, idx) => {
//       wdd.forEach(dp => {
//         if (dp.label == datagroup.key) {  // double quality is important
//           group.push({
//             datasetName: widgetDatasets[idx].label,
//             lastUpdated: dp.ts,
//             datapoint: {...dp}
//           })
//         }
//       })
//     });
//   }
//   if (!group.length) {
//     group = headGroup;
//   }
//   datagroup.group = group;
//
//   return datagroup;
// };

// export const getKpiDatagroup = (kpiWidgets, datasets, datapoints, datagroup_key) => {
//   let widgetDatasets,
//     widgetDatapointsByDatasets,
//     group = [],
//     headGroup;
//
//   let datagroup = {
//     key: null,
//     type: 'kpi',
//     kpiWidgets: [],
//     heroWidget: null,
//     datasets: [],
//     group: [],
//     headGroup: []
//   };
//
//   kpiWidgets.forEach(w => {
//     if (w.type === 'full') {
//       datagroup.heroWidget = w;
//     } else {
//       datagroup.kpiWidgets.push(w);
//     }
//   });
//
//   datagroup.kpiWidgets.forEach((w,idx) => {
//     if (!w.datasets.length) {
//       // if no datasets assume no kpis stored like myGov
//       // then exit
//       return;
//     } else {
//       widgetDatasets = getDatasetsByIds(datasets, w.datasets);
//       datagroup.datasets[idx] = widgetDatasets[0];
//
//       // need to get datasets so we can resolve headGroup
//       widgetDatapointsByDatasets = widgetDatasets.map(wd => {
//         return getDatapointsByIds(datapoints, wd.datapoints);
//       });
//
//       headGroup = widgetDatapointsByDatasets.map((d, idx) => {
//         return getHeadDatapoint(widgetDatasets[idx].label, widgetDatasets[idx].updated_at, d);
//       });
//       datagroup.headGroup[idx] = headGroup[0];
//
//       // todo - fix issue with key
//
//
//       if (datagroup_key) {
//         widgetDatapointsByDatasets.forEach((wdd, idx) => {
//           wdd.forEach(dp => {
//             if (dp.label == datagroup_key) {  // double quality is important
//               group.push({
//                 datasetName: widgetDatasets[idx].label,
//                 lastUpdated: dp.ts,
//                 datapoint: {...dp}
//               })
//             }
//           })
//         });
//       }
//       if (!group.length) {
//         group = datagroup.headGroup[idx];
//       }
//       datagroup.group[idx] = group;
//     }
//   });
//
//   datagroup.key = datagroup.headGroup[0].label || '';
//   datagroup.hasLatest = hasLatestDatagroup(datagroup.key);
//
//   return datagroup
// };
//
//
//
//
//
