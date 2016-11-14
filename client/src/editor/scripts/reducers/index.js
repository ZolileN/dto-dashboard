import { combineReducers } from 'redux';
import reduceReducers from 'reduce-reducers';
import { routerReducer } from 'react-router-redux'
import { uniq, isObject } from 'lodash';
import moment from 'moment';

import * as types from './../actions/_types';

import app from './app';
import config from './config';
// import requests from './requests';
import ui from './ui';
import currentUser from './currentUser';
import dashboards from './dashboards';
import widgets from './widgets';
import datasets from './datasets';
import datapoints from './datapoints';
import { reducer as formReducer } from 'redux-form';


const rootReducer = reduceReducers(
  combineReducers({
    routing: routerReducer,
    app,
    config,
    // requests,
    ui,
    form: formReducer,
    currentUser,
    dashboards,
    widgets,
    datasets,
    datapoints,
  }),
  // cross-cutting concerns because here `state` is the whole state tree
  (state, {type, payload}) => {
    switch (type) {
      case types.UPDATE_DATAGROUPSET:
        state.datapoints = [...state.datapoints, payload.datapoint];
        state.datasets = state.datasets.map(d => {
          if (d.id === payload.dataset.id) {
            return {...d,
              datapoints: d.datapoints.concat(payload.dataset.datapoint_id)
            };
          }
          return d;
        });
        return state;

      default:
        return state;
    }
  }
);

export default rootReducer;





// Selectors




import { getDatasetById } from './../reducers/datasets';
import { getDatapointsByIds } from './../reducers/datapoints';

import {
  computeLabel,
  getHeadKey,
  getPrevKey,
  getNextKey
} from './../helpers/datapoint';


const headKey = getHeadKey();


/*
 dataset = {
 type: null,
 widget: null,
 hasHead: null,
 headKey: latestDatagroupKey,  // tip most possible key
 currentKey: null,             // active key
 currentLastUpdated: null,
 hasRecent: null,
 recentKey: null,              // most recent saved key
 groups: [
  {
   key: null,
   dataset: null,
   datapoints: null,
   recentDatapointIdx: null
  },
  {
   // ...
  },
  // ...
 ]
 };
 */

export const getDatagroupset = (state, {widget}) => {

  let groupState = { // reminder: don't use by direct assignment
    dataset: null,
    datapoints: null
  };

  // initialise the groupset
  //
  let datagroupset = {
    type: null,
    widget: widget,
    groups: [],

    // maximum tip of possible data to save
    hasHead: null,
    headKey: headKey,        // the url segment identifier of the set

    // the last saved data in time
    _recentDatpointIdxArr: [],
    hasRecent: null,
    recentKey: null          // the url segment identifier of the set
  };

  if (!widget.datasets.length) {

    // simple type
    //

    // no datasets, assume this means type is simple
    // *then exit*
    datagroupset.type = 'simple';

  } else {

    // time-series type
    //
    datagroupset.type = 'time-series';

    datagroupset.groups = widget.datasets.map(datasetId => {
      let group = {...groupState};

      group.dataset = getDatasetById(state.datasets, datasetId);
      group.datapoints = getDatapointsByIds(state.datapoints, group.dataset.datapoints);

      group.datapoints.forEach((dp, idx) => {
        if (!datagroupset.hasHead && computeLabel(dp.ts) === headKey) {
          datagroupset.hasHead = true;
        }
      });

      if (group.datapoints && group.datapoints.length) {
        let recentIdx = group.datapoints.reduce((iMax, el, i, arr) => {
          return moment(el.ts) > moment(arr[iMax].ts) ? i : iMax;
        }, 0);
        datagroupset._recentDatpointIdxArr.push(recentIdx);
      }

      return group;
    });


    // validate and meta
    //

    // has datapoints and all datapoints are valid objects
    let hasValidRecent = datagroupset._recentDatpointIdxArr.length && datagroupset.groups.every((g, idx) => {
      let index = datagroupset._recentDatpointIdxArr[idx];
      return isObject(g.datapoints[index]);
    });
    // keys are out of sync - if they have the same data length should be 1
    let hasOutOfSyncKeys = uniq(datagroupset._recentDatpointIdxArr).length > 1;

    if (hasValidRecent === false) {
      console.warn(`has no recent data for datagroupset: `, datagroupset);
    }
    if (hasOutOfSyncKeys) {
      console.warn(`recent data is out of sync for datagroupset: `, datagroupset);
    }

    if (hasValidRecent) {
      let item = datagroupset.groups[0].datapoints[datagroupset._recentDatpointIdxArr[0]];
      datagroupset.hasRecent = true;
      datagroupset.recentKey = computeLabel(item.ts);
    }

    // end curate

  }

  return datagroupset;

};


export const getDatagroupsets = (state, {widgets}) => {
  return widgets.map(widget => {
    return getDatagroupset(state, {widget});
  })
};


/**
 * Get a datagroupset slice in time
 * @param datagroupset {Object}
 * @param key {string} (optional) - the key to slice at or none to fetch recent
 * @returns

  state = {
    ...datagroupset,
    sliceKey,
    slicePrevKey: getPrevKey(key),
    sliceNextKey: getNextKey(key),
    sliceLastUpdated: '',
    groups: [
      {
        dataset: {},
        datapoint: {}
      }
    ]
  };

 *
 */

export const getDatagroupsetSlice = (datagroupset, key = null) => {

  let state = {
    ...datagroupset,
    sliceKey: null,
    slicePrevKey: null,
    sliceNextKey: null,
    sliceLastUpdated: null,
    groups: []
  };

  let datapointItem = null;
  let sliceIndexArray = [];

  if (!key) {
    key = datagroupset.recentKey;
  }

  state.sliceKey = key;
  state.slicePrevKey = getPrevKey(key);
  state.sliceNextKey = getNextKey(datagroupset.headKey, key);


  if (datagroupset.groups.length) {

    // validate and meta
    //
    datagroupset.groups.forEach((g, idx) => {
      g.datapoints.forEach((dp, idx2) => {
        if (computeLabel(dp.ts) === key) {
          sliceIndexArray.push(idx2);
        }
      });
    });

    // has slice index and corresponds to a valid datapoint
    let hasValidSlice = datagroupset.groups.every((g,idx) => {
      return isObject(g.datapoints[sliceIndexArray[idx]]);
    });
    // keys are in sync - they all have the same date
    let hasOutOfSyncKeys = uniq(sliceIndexArray).length > 1;

    if (!hasValidSlice) {
      console.log(`No datapoint for this slice: `, datagroupset);
    }
    if (hasOutOfSyncKeys) {
      console.warn(`Data is out of sync for slice datagroupset: `, datagroupset);
    }

    if (!hasValidSlice) {
      state.groups = datagroupset.groups.map((g, idx) => {
        return {
          dataset: g.dataset,
          datapoint: null
        }
      });
    } else {
      state.groups = datagroupset.groups.map((g, idx) => {
        datapointItem = g.datapoints[sliceIndexArray[idx]];

        if (state.sliceLastUpdated === null) {
          state.sliceLastUpdated = datapointItem.updated_at;
        }

        return {
          dataset: g.dataset,
          datapoint: datapointItem
        }
      });
    }
  }

  // console.log(state);

  return state;
};


export const getDatagroupsetSlices = (datagroupsets) => {
  return datagroupsets.map(d => {
    return getDatagroupsetSlice(d);
  })
};


export const filterDatagroupsetByHeroWidget = datagroupsets => {
  return datagroupsets.find(d => {
    return d.widget.type === 'full';
  });
};

export const filterDatagroupsetsByBtlWidgets = datagroupsets => {
  return datagroupsets.filter(d => {
    return !(d.widget.type === 'full' || d.widget.type === 'kpi-sparkline');
  });
};
