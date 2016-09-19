import * as types from './../actions/_types';
import initialState from './../store/initialState';


const widgetsReducer = (state = initialState.widgets, action) => {
  switch (action.type) {

    case types.SET_WIDGETS:
      return state.map((d) => {
        if (d.id === action.payload.id) {
          return {...d, ...action.payload}
        }
        return d;
      });
      break;

    case types.UPDATE_WIDGETS_FAIL:
    default:
      return state;
  }
};

export default widgetsReducer;


// Helpers

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
