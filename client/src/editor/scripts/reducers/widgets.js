import * as types from './../actions/_types';
import initialState from './../store/initialState';
import isTypeOfState from './../utils/isTypeOfState';

import { createSelector } from 'reselect';



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


/**
 * Check if is of state type
 * @return {Boolean}
 */
export const isWidget = isTypeOfState(['row', 'pos', 'type', 'size', 'units']);

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


// Selectors

// widgets

export const getWidgetsWithComputedProps = widgets => {
  return widgets.map(w => getWidgetWithComputedProps(w));
};

export const groupByKpiWidgets = computedWidgets => computedWidgets.filter(w => {
  return w._type === 'kpi';
});

export const groupByHeroWidget = computedWidgets => computedWidgets.find(w => {
  return w._type === 'hero';
});


// widget

export const selectWidgetType = widget => {
  switch (widget.type) {
    case 'full':
      return 'hero';
    case 'kpi-sparkline':
      return 'kpi';
    case 'fact':
      return 'simple';
    case 'line':
      return 'time-series';
    case 'pie':
    case 'sparkline':
    case 'bar':
      return 'cross-sectional';
    default:
      console.warn('Back up: that type of widget does not exist!', widget.type);
      return null;
  }
};

export const getWidgetWithComputedProps = createSelector(
  widget => widget,
  selectWidgetType,
  (widget, _type) => {
    return {...widget, _type}
  }
);

