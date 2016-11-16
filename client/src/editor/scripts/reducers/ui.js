import * as types from './../actions/_types';
import initialState from './../store/initialState';
import { combineReducers } from 'redux';


const app = (state = initialState.ui.app, {type, payload}) => {
  switch (type) {
    case types.UI_APP_SET_DATAGROUP_TRANSACTED:
      debugger
      return {
        ...state,
        didTransactionDatagroup: {
          widgetId: payload.widgetId,
          description: payload.description,
          type: payload.type
        }
      };
    case types.UI_APP_CLEAR_DATAGROUP_TRANSACTED:
      return {
        ...state,
        didTransactionDatagroup: {}
      };

    default:
      return state;
  }
};


const toastsReducer = (state = initialState.ui.toast, {type, payload}) => {
  switch (type) {
    case types.UI_TOAST_SET_TOAST:
      return payload;
      break;

    case types.UI_TOAST_CLEAR_TOAST:
      return null;
      break;

    default:
      return state;
  }
};


const uiReducer = combineReducers({
  app,
  toast: toastsReducer
});


export default uiReducer;


// Selectors
