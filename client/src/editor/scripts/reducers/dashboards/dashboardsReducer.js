
import {isArray} from 'lodash';
import initialState from './../../store/initialState';
import isTypeOfState from './../../utils/isTypeOfState';


const dashboardsReducer = (state = initialState.dashboards, {type, payload}) => {
  switch (type) {
    default:
      return state;
  }
};

export default dashboardsReducer;


// Helpers

/**
 * Check if is of state type
 * @return {Boolean}
 */
export const isDashboard = isTypeOfState(['name', 'target_users', 'url']);


// Selectors

/**
 * @param state {Array} - Dashboards
 * @param id {Number|String}
 * @return {Object|undefined} dashboard record
 */
export const getDashboardById = (state, id) => {
  if (isArray(state) === false) {
    throw new Error('state must be of type Array');
  }
  return state.find((d) => Number(id) === d.id);
};
