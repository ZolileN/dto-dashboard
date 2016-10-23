import moment from 'moment';

import * as types from './../actions/_types';
import initialState from './../store/initialState';
import isTypeOfState from './../utils/isTypeOfState';


const datapointsReducer = (state = initialState.datapoints, {type, payload}) => {

  switch (type) {
    case types.PUSH_DATAPOINT:
      return [
        ...state,
        payload
      ];
      break;

    case types.UPDATE_DATAPOINT:
      return state.map((d) => {
        if (d.id === payload.id) {
          return {...d, ...payload}
        }
        return d;
      });
      break;

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

// /**
//  * @param state
//  * @param dataset_id
//  * @returns {Array} - datapoints
//  */
// export const getDatapointsByDatasetId = (state, dataset_id) => {
//   return state.filter((w) => dataset_id == w.dataset_id);
// };

export const computeLabel = (datapoint) => {
  return moment(datapoint).format('YYYY-MM');
};
