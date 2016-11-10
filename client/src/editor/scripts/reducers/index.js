import { combineReducers } from 'redux';
import reduceReducers from 'reduce-reducers';
import { routerReducer } from 'react-router-redux'

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

import { computeLabel, getMaxEditableLabel } from './../helpers/datapoint';


const maxLabel = getMaxEditableLabel();


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
 recentLastUpdated: null,
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

export const getDatagroupsets = (state, {widgets}) => {
  return widgets.map(widget => {
    return getDatagroupset(state, {widget});
  })
};

export const getDatagroupset = (state, {widget}) => {

  let groupState = { // reminder: don't use by direct assignment
    dataset: null,
    datapoints: null,
    headDatapointIdx: null,
    recentDatapointIdx: null
  };

  // initialise the groupset
  //
  let datagroupset = {
    type: null,
    widget: widget,
    groups: [],

    // maximum tip of possible data to save
    hasHead: null,            // i have the max tip saved
    headKey: maxLabel,        // the url segment identifier of the set

    // i am looking a single slice of data in time
    currentKey: null,
    currentLastUpdated: null, // the url segment identifier of the set

    // the last saved data in time
    hasRecent: null,          // recent data exists
    recentKey: null,          // the url segment identifier of the set
    recentLastUpdated: null,  //
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

      group.datapoints.some((dp, idx) => {
        if (computeLabel(dp.ts) === maxLabel) {
          if (datagroupset.hasHead === null) {
            datagroupset.hasHead = true;
          }
          group.headDatapointIdx = idx;
          //Exit from the loop
          return true;
        }
      });


      if (group.datapoints && group.datapoints.length) {
        group.recentDatapointIdx = group.datapoints.reduce((acc, el, idx, arr) => {
          let nextEl = arr[idx + 1];
            if (nextEl && nextEl.ts) {
              if (el.ts > new Date(nextEl.ts)) {
                return idx; // update the stored index
              }
              return idx+1; // update the stored index
            }
            return acc; // return recentDatapointIdx
        }, 0);  // let recentDatapointIdx start at 0
        console.log(group.dataset.name, group.recentDatapointIdx, group.datapoints, group.datapoints[group.recentDatapointIdx]);
      }
      return group;

    });


    // meta

    datagroupset.hasRecent = datagroupset.groups[0].recentDatapointIdx !== null && datagroupset.groups[0].recentDatapointIdx >= 0;
    if (datagroupset.hasRecent) {
      let item = datagroupset.groups[0].datapoints[datagroupset.groups[0].recentDatapointIdx];
      if (item) {
        datagroupset.recentKey = computeLabel(item.ts);
        datagroupset.lastUpdated = item.last_updated_at;
      }
    }

    console.log(datagroupset);

    // end curate

  }


  return datagroupset;

};

// filter by recent
export const getRecentDatagroupsetSlice = (datagroupsetState) => {
  let lastUpdated;




  let state = {
    ...datagroupsetState,
    groups: datagroupsetState.groups.map(((group, idx) => {

      // console.log(group.dataset.name, group.recentDatapointIdx, group.datapoints);

      if (!lastUpdated && group.datapoints.length) {
        lastUpdated = group.datapoints[idx].ts;
      }
      if (group.datapoints.length) {


        const item = group.datapoints[group.recentDatapointIdx];

        return {
          dataset: group.dataset,
          datapoint: item,
          isHead: computeLabel(item.ts) === maxLabel
        }
      } else {
        console.warn('no recent datapoints', datagroupsetState);
      }
    }))
  };
  if (lastUpdated) {
    state.recentLastUpdated = lastUpdated;
  }
  return state;
};

// filter by current
export const getCurrentDatagroupsetSlice = (datagroupsetState, datagroupKey) => {
  let indexOfCurrent = null,
    lastUpdated;

  datagroupsetState.groups.forEach((g, idx) => {
    if (indexOfCurrent === null) {
      g.datapoints.forEach((dp, idx2) => {
        if (computeLabel(dp.ts) === datagroupKey) {
          indexOfCurrent = idx2;
        }
      })
    }
  });
  if (indexOfCurrent === null){
    console.log('no current data for datagroupset', datagroupsetState);
  }

  let state = {
    ...datagroupsetState,
    currentKey: datagroupKey,
    groups: datagroupsetState.groups.map((group => {

      if (indexOfCurrent === null) {
        return {
          dataset: group.dataset,
          datapoint: null,
          isHead: false
        }
      }

      const item = group.datapoints[indexOfCurrent];
      if (!item) {
        return {
          dataset: group.dataset,
          datapoint: null,
          isHead: false
        }
      } else {

        if (!lastUpdated) {
          lastUpdated = item.ts;
        }
        return {
          dataset: group.dataset,
          datapoint: item,
          isHead: item.ts === maxLabel
        }
      }

    }))
  };
  if (lastUpdated) {
    state.currentLastUpdated = lastUpdated;
  }
  return state;
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
