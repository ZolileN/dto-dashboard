import * as types from './../actions/_types';
import initialState from './../store/initialState';
import { combineReducers } from 'redux';



const pageDashboardWidgets = (state = initialState.ui.pageDashboardWidgets, {type, payload}) => {
  switch (type) {
    case types.UI_PAGE_DASHBOARDWIDGETS_SET_ANCHOR_TO:
      return {...state, anchorTo:payload.anchorTo};

    case types.UI_PAGE_DASHBOARDWIDGETS_CLEAR_ANCHOR_TO:
      return {...state, anchorTo:null};

    default:
      return state;
  }
};


const toastsReducer = (state = initialState.ui.toast, {type, payload}) => {
  switch (type) {
    case types.SET_TOAST:
      return payload;
      break;

    case types.CLEAR_TOAST:
      return null;
      break;

    default:
      return state;
  }
};


const uiReducer = combineReducers({
  pageDashboardWidgets,
  toast: toastsReducer
});


export default uiReducer;


// Selectors
