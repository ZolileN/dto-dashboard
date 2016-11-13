import * as types from './../actions/_types';
import initialState from './../store/initialState';
import { combineReducers } from 'redux';


let pageDashboardWidgetDatagroupTimeseries = (state = initialState.ui.pageDashboardWidgetDatagroupTimeseries, {type, payload}) => {

  switch (type) {

    default:
      return state;
  }
};


const toastsReducer = (state = {}, {type, payload}) => {

  switch (type) {
    // case types.SET_TOAST:
    //   return payload;
    //   break;
    //
    // case types.CLEAR_TOAST:
    //   return null;
    //   break;

    default:
      return state;
  }
};


const uiReducer = combineReducers({
  pageDashboardWidgetDatagroupTimeseries,
  // toast: toastsReducer
});


export default uiReducer;


// Selectors
