import * as types from './../actions/_types';
import initialState from './../store/initialState';
import isTypeOfState from './../utils/isTypeOfState';


const datasetsReducer = (state = initialState.datasets, {type, payload}) => {

  switch (type) {
    case types.UPDATE_DATASET:
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

export default datasetsReducer;


//

/**
 * Check if is of state type
 * @return {Boolean}
 */
export const isDataset = isTypeOfState(['datapoints', 'units', 'label']);

// Selectors

export const getDatasetById = (state, id) => {
  return state.find((d) => Number(id) === d.id);
};

export const getDatasetsByIds = (state, ids) => {
  return state.filter((d) => ids.includes(Number(d.id)));
};
