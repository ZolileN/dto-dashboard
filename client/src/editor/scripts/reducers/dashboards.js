import { merge } from 'lodash';
import * as types from './../actions/_types';
import initialState from './../store/initialState';
import isTypeOfState from './../utils/isTypeOfState';


const dashboardsReducer = (state = initialState.dashboards, {type, payload}) => {

  switch (type) {
    case types.UPDATE_DASHBOARD:
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

export default dashboardsReducer;


//

/**
 * Check if is of state type
 * @return {Boolean}
 */
export const isDashboard = isTypeOfState(['name', 'target_users', 'url']);


// Selectors

/**
 * @param state {Array} - Dashboards
 * @param id
 * @return {*}
 */
export const getDashboardById = (state, id) => {
  return state.find((d) => Number(id) === d.id);
};
