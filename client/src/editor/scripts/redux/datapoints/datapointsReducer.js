
import isArray from 'lodash/isArray';
import initialState from './../initialState';
import isTypeOfState from './../../utils/isTypeOfState';


const datapointsReducer = (state = initialState.datapoints, {type, payload}) => {
  switch (type) {
    default:
      return state;
  }
};

export default datapointsReducer;


// Helpers

/**
 * Check if is of state type
 * @return {Boolean}
 */
export const isDatapoint = isTypeOfState(['label', 'ts', 'value']);


// Selectors

/**
 * @param state {Array} Datapoints
 * @param id {Number|String}
 * @return {Object|undefined} datapoint record
 */
export const getDatapointById = (state, id) => {
  if (isArray(state) === false) {
    throw new Error('state must be of type Array');
  }
  return state.find((d) => Number(id) === Number(d.id));
};


/**
 * @param state {Array} Datapoints
 * @param ids {Array<Number|String>} ids
 * @returns {Array} datapoints
 */
export const getDatapointsByIds = (state, ids) => {
  if (isArray(state) === false) {
    throw new Error('state must be of type Array');
  }
  if (isArray(ids) === false) {
    throw new Error('ids must be of type Array');
  }
  return state.filter((d) => ids.includes(Number(d.id)));
};


// export const getLastSavedDatapoints = datapoints => {
//   return datapoints.reduce((curr, next) => {
//     if (new Date(curr.label) > new Date(next.label)) {
//       return curr;
//     } else {
//       return next;
//     }
//   });
// };

// /**
//  * @param state
//  * @param dataset_id
//  * @returns {Array} - datapoints
//  */
// export const getDatapointsByDatasetId = (state, dataset_id) => {
//   return state.filter((w) => dataset_id == w.dataset_id);
// };

//
// export const getDatapointsByDatasets = (datapoints, datasets) => {
//   return datasets.reduce((curr, next) => {
//     return curr.concat(next.datapoints);
//   }, []).map(d => {
//     return getDatapointById(datapoints, d);
//   });
// };
