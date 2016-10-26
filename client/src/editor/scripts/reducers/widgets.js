import * as types from './../actions/_types';
import initialState from './../store/initialState';
import isTypeOfState from './../utils/isTypeOfState';


const widgetsReducer = (state = initialState.widgets, {type, payload}) => {

  switch (type) {
    case types.UPDATE_WIDGET:
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

export default widgetsReducer;


//

/**
 * Check if is of state type
 * @return {Boolean}
 */
export const isWidget = isTypeOfState(['row', 'pos', 'type', 'size', 'units']);


// Selectors

/**
 * @param state
 * @param dashboard_id
 * @returns {Array} - widgets
 */
export const getWidgetsByDashboardId = (state, dashboard_id) => {
  return state.filter((w) => Number(dashboard_id) === w.dashboard_id);
};

/**
 * @param state
 * @param widget_id
 * @returns {Object} - widget
 */
export const getWidgetById = (state, widget_id) => {
  return state.find((w) => Number(widget_id) === w.id);
};

const WIDGET_TYPE_HERO = 'full';
const WIDGET_TYPE_KPI = 'kpi-sparkline';

export const filterKpiWidgets = state => {
  return state.filter(w => w.type === WIDGET_TYPE_KPI);
};

export const filterBelowTheLineWidgets = state => {
  return state.filter(w => {
    return !(w.type === WIDGET_TYPE_KPI || w.type === WIDGET_TYPE_HERO);
  });
};
