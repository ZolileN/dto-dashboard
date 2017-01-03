import moment from 'moment';

import * as types from './../../actions/_types';
import initialState from './../../store/initialState';
import isTypeOfState from './../../utils/isTypeOfState';
import * as dateFormats from './../../constants/dateFormats';


const datapointsReducer = (state = initialState.datapoints, {type, payload}) => {

  switch (type) {

    case types.CREATE_DATAPOINT:
      return [...state, payload];

    // case types.PUSH_DATAPOINT:
    //   return [
    //     ...state,
    //     payload
    //   ];
    //   break;
    //
    // case types.UPDATE_DATAPOINT:
    //   return state.map((d) => {
    //     if (d.id === payload.id) {
    //       return {...d, ...payload}
    //     }
    //     return d;
    //   });
    //   break;

    default:
      return state;

  }
};

export default datapointsReducer;


//

/**
 * Check if is of state type
 * @return {Boolean}
 */
export const isDatapoint = isTypeOfState(['label', 'ts', 'value']);


// Selectors

/**
 * @param state
 * @param id
 * @returns {Object} - datapoint
 */
export const getDatapointById = (state, id) => {
  return state.find((d) => id == d.id);
};

export const getDatapointsByIds = (state, ids) => {
  return state.filter((d) => ids.includes(Number(d.id)));
};

/**
 * @param state
 * @param ids {Array}
 * @returns {Array} - datapoints
 */
export const getDatapointsById = (state, ids) => {
  return state.filter((d) => {
    return ids.includes(d.id);
  });
};

export const getLastSavedDatapoints = datapoints => {
  return datapoints.reduce((curr, next) => {
    if (new Date(curr.label) > new Date(next.label)) {
      return curr;
    } else {
      return next;
    }
  });
};

// /**
//  * @param state
//  * @param dataset_id
//  * @returns {Array} - datapoints
//  */
// export const getDatapointsByDatasetId = (state, dataset_id) => {
//   return state.filter((w) => dataset_id == w.dataset_id);
// };


export const getDatapointsByDatasets = (datapoints, datasets) => {
  return datasets.reduce((curr, next) => {
    return curr.concat(next.datapoints);
  }, []).map(d => {
    return getDatapointById(datapoints, d);
  });
};


