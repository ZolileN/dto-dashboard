
import {isArray} from 'lodash';
import initialState from './../../store/initialState';
import isTypeOfState from './../../utils/isTypeOfState';


const datasetsReducer = (state = initialState.datasets, {type, payload}) => {
  switch (type) {
    default:
      return state;
  }
};

export default datasetsReducer;


// Helpers

/**
 * Check if is of state type
 * @return {Boolean}
 */
export const isDataset = isTypeOfState(['datapoints', 'units', 'label']);


// Selectors

/**
 * @param state {Array} Datasets
 * @param id {Number|String}
 * @return {Object|undefined} dataset record
 */
export const getDatasetById = (state, id) => {
  if (isArray(state) === false) {
    throw new Error('state must be of type Array');
  }
  return state.find((d) => Number(id) === d.id);
};

/**
 * @param state {Array} Datasets
 * @param ids {Array<Number|String>} ids
 * @returns {Array} datasets
 */
export const getDatasetsByIds = (state, ids) => {
  if (isArray(state) === false) {
    throw new Error('state must be of type Array');
  }
  if (isArray(ids) === false) {
    throw new Error('ids must be of type Array');
  }
  return state.filter(d => ids.includes(Number(d.id)));
};
