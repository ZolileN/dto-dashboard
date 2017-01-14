
import {combineReducers} from 'redux';
import reduceReducers from 'reduce-reducers';
import {routerReducer} from 'react-router-redux'
import {uniq,isObject,without,isArray} from 'lodash';
import moment from 'moment';

import {types as datagroupsetActionTypes} from './../datagroupset/datagroupsetActions';

import ui from './../ui/uiReducer';
import currentUser from './../currentUser/currentUserReducer';
import dashboards from './../dashboards/dashboardsReducer';
import widgets from './../widgets/widgetsReducer';
import datasets from './../datasets/datasetsReducer';
import datapoints from './../datapoints/datapointsReducer';
import {reducer as formReducer} from 'redux-form';

import isTypeOfState from './../../utils/isTypeOfState';
import {getDatasetById} from './../datasets/datasetsReducer';
import {getDatapointsByIds} from './../datapoints/datapointsReducer';
import {
  computeLabel,
  getHeadKey,
  getPrevKey,
  getNextKey
} from './../datapoints/datapointsHelper';


const rootReducer = reduceReducers(
  combineReducers({
    routing: routerReducer,
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

      case datagroupsetActionTypes.UPDATE_DATAGROUPSET:

        const { datapoint, dataset } = payload;
        // let hasDataset = false;

        // adds the new datapoint
        state.datapoints = [...state.datapoints, datapoint];

        // update existing dataset with datapoint
        state.datasets = state.datasets.map(ds => {
          if (ds.id === dataset.id) {
            // hasDataset = true;
            return {...ds, ...{
              datapoints: [...ds.datapoints, dataset.datapoint_id]  // merge the new datapoint on to ref arr
            }}
          }
          return ds;
        });

        // todo - verify
        // if (hasDataset === false) {
        //   throw new Error('Dataset does not exist, unable to update.');
        // }

        return state;

      default:
        return state;
    }
  }
);

export default rootReducer;


// Helpers

/**
 * Check if is of state type
 * @return {Boolean}
 */
export const isDatagroupset = isTypeOfState(['type', 'widget', 'groups', 'hasHead', 'headKey', 'hasRecent', 'recentKey']);

export const isDatagroupsetSlice = isTypeOfState(['type', 'widget', 'groups', 'hasHead', 'headKey', 'hasRecent', 'recentKey', 'sliceKey', 'slicePrevKey', 'sliceNextKey', 'sliceLastUpdated'])


// Selectors

const headKey = getHeadKey();


/*

  datagroupset - type:simple
  --------------------------

   {
     type: 'simple',
     widget: <Widget>
     groups: null,
     hasHead: false,
     headKey: '2016-12',
     hasRecent: null,
     recentKey: null
   }


  datagroupset - type:time-series
  -------------------------------

   {
    type: 'time-series',
     widget: <Widget>,
     groups: [
       {dataset: <Dataset>, datapoints: [...<Datapoint>]}
     ],
     hasHead: false,
     headKey: '2016-12',
     hasRecent: null,
     recentKey: null
   }


   datagroupsetSlice
   -----------------

   {
     type: 'time-series',
     widget: <Widget>,
     groups: [
       {dataset: <Dataset>, datapoints: [...<Datapoint>]}
     ],
     hasHead: false,
     headKey: '2016-12',
     hasRecent: null,
     recentKey: null,
     sliceKey: '2016-11',         // key requested at slice time
     slicePrevKey: '2016-10',
     sliceNextKey: '2016-12',
     sliceLastUpdated: '2016-12'
   }

 */


/**
 * @param state {Object} complete state tree
 * @param widget {Object}
 * @returns {Object<{type: null, widget: *, groups: Array, hasHead: boolean, headKey, _recentDatpointIdxArr: Array, hasRecent: null, recentKey: null}>} the complete datagroupset **this will get really big with time**
 */
export const getDatagroupset = (state, widget) => {

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
    hasHead: false,
    headKey: headKey,        // the url segment identifier of the set

    // the last saved data in time
    _recentDatpointIdxArr: [],
    hasRecent: null,
    recentKey: null          // the url segment identifier of the set
  };


  if (!widget.datasets || !widget.datasets.length) {

    // simple type
    //

    // no datasets, assume this means type is simple
    datagroupset.type = 'simple';

  } else {

    // time-series type
    //
    datagroupset.type = 'time-series';

    datagroupset.groups = widget.datasets.map(datasetId => {
      let group = {...groupState};

      group.dataset = getDatasetById(state.datasets, datasetId);

      if (group.dataset === void 0) {
        if (process.env.NODE_ENV !== 'test') {
          console.error(`invalid dataset on widget: ${widget.id}`, datasetId);
        }
        return null;
      }

      group.datapoints = getDatapointsByIds(state.datapoints, group.dataset.datapoints);

      group.datapoints.forEach((dp, idx) => {
        if (!datagroupset.hasHead && computeLabel(dp.ts) === headKey) {
          datagroupset.hasHead = true;
        }
      });

      // curate an array of recent data index
      let recentIdx = null;
      if (group.datapoints && group.datapoints.length) {
        recentIdx = group.datapoints.reduce((iMax, el, i, arr) => {
          return moment(el.ts) > moment(arr[iMax].ts) ? i : iMax;
        }, 0);
      }
      datagroupset._recentDatpointIdxArr.push(recentIdx);

      return group;
    });


    // validate and meta
    //

    // has datapoints and *some not all* datapoints are valid objects
    // some not all because KPIs CPT is usually no data.
    let hasValidRecent = datagroupset._recentDatpointIdxArr.length && datagroupset.groups.some((g, idx) => {
      let index = datagroupset._recentDatpointIdxArr[idx];
      return isObject(g.datapoints[index]);
    });

    // keys are out of sync - if they have the same data length should be 1. exclude nulls.
    let _recentDatpointIdxArrWithoutNull = without(datagroupset._recentDatpointIdxArr, null);
    let hasOutOfSyncKeys = uniq(_recentDatpointIdxArrWithoutNull).length > 1;

    if (hasValidRecent === false) {
      // console.warn(`has no recent data for datagroupset: `, datagroupset);
    }
    if (hasOutOfSyncKeys) {
      // console.warn(`recent data is out of sync for datagroupset: `, datagroupset);
    }

    if (hasValidRecent) {
      let item = datagroupset.groups[0].datapoints[_recentDatpointIdxArrWithoutNull[0]];
      if (!item && datagroupset.groups.length >= 1) {
        item = datagroupset.groups[1].datapoints[_recentDatpointIdxArrWithoutNull[0]];
      }
      datagroupset.hasRecent = true;
      datagroupset.recentKey = computeLabel(item.ts);
    }

    delete datagroupset._recentDatpointIdxArr;

    // end curate

  }

  return datagroupset;

};

/**
 *
 * @param state {Object} complete state tree
 * @param widgets {Array<Object>}
 * @returns {Array} **complete** datagroupsets
 * todo - @joshm @elisechant we need to optimise this so the computation and storage is not so HUGE
 */
export const getDatagroupsets = (state, widgets) => {
  if (!isArray(widgets)) {
    throw new Error('widgets must be of type Array');
  }
  return widgets.map(widget => {
    return getDatagroupset(state, widget);
  })
};


/**
 * Get a datagroupset slice in time
 * @param datagroupset {Object}
 * @param periodKey {String} (optional) - the key to slice at or none to fetch recent
 * @returns {Object}
 *
 */
export const getDatagroupsetSlice = (datagroupset, periodKey = null) => {

  let state = {
    ...datagroupset,
    sliceKey: null,
    slicePrevKey: null,
    sliceNextKey: null,
    sliceLastUpdated: null,
    groups: [],
    recentKey: datagroupset.recentKey
  };

  let datapointItem = null;
  let sliceIndexArray = [];

  if (!periodKey) {
    periodKey = datagroupset.recentKey;
  }

  state.sliceKey = periodKey;
  state.slicePrevKey = getPrevKey(periodKey);
  state.sliceNextKey = getNextKey(datagroupset.headKey, periodKey);


  if (datagroupset.groups.length) {

    // validate and meta
    //

    datagroupset.groups.forEach((g, idx) => {
      g.datapoints.forEach((dp, idx2) => {
        if (computeLabel(dp.ts) === periodKey) {
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
      // console.log(`No datapoint for this slice: `, datagroupset);
    }
    if (hasOutOfSyncKeys) {
      // console.warn(`Data is out of sync for slice datagroupset: `, datagroupset);
    }

    if (!hasValidSlice) {
      state.groups = datagroupset.groups.map((g, idx) => {
        if (state.sliceLastUpdated === null) {
          state.sliceLastUpdated = state.widget.data_updated_at;
        }
        return {
          dataset: g.dataset,
          datapoint: null
        }
      });
    } else {
      state.groups = datagroupset.groups.map((g, idx) => {
        if (state.sliceLastUpdated === null) {
          state.sliceLastUpdated = state.widget.data_updated_at;
        }
        datapointItem = g.datapoints[sliceIndexArray[idx]];
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

/**
 * Get all datagroupsetSlices per collection of widgets with **or without** common
 * periodKey. When without return the **current tip of ALL widgets datagroupsets**
 * that may have a range of period keys.
 * @param datagroupsets {Object}
 * @param datagroup_key {String}
 * @returns datagroupsets {Array<datagroupset>}
 */
export const getDatagroupsetSlices = (datagroupsets, periodKey = null) => {
  if (!isArray(datagroupsets)) {
    throw new Error('datagroupsets must be of type Object');
  }
  return datagroupsets.map(d => {
    return getDatagroupsetSlice(d, periodKey);
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
