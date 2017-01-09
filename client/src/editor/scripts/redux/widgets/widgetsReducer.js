
import {isArray} from 'lodash';
import initialState from './../initialState';
import isTypeOfState from './../../utils/isTypeOfState';


const widgetsReducer = (state = initialState.widgets, {type, payload}) => {
  switch (type) {
    default:
      return state;
  }
};

export default widgetsReducer;


// Helpers

/**
 * Check if is of state type
 * @return {Boolean}
 */
export const isWidget = isTypeOfState(['row', 'pos', 'type', 'size', 'units']);


// Selectors

/**
 * @param state {Array} widgets
 * @param widget_id {Number|String}
 * @return {Object|undefined} widget record
 */
export const getWidgetById = (state, widget_id) => {
  if (isArray(state) === false) {
    throw new Error('state must be of type Array');
  }
  return state.find((w) => Number(widget_id) === w.id);
};

/**
 * @param state {Array} widgets
 * @param dashboard_id {Number|String}
 * @returns {Array} widgets
 */
export const getWidgetsByDashboardId = (state, dashboard_id) => {
  return state.filter((w) => Number(dashboard_id) === w.dashboard_id);
};
