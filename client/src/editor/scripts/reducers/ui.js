import * as types from './../actions/_types';
import initialState from './../store/initialState';
import { combineReducers } from 'redux';


const app = (state = initialState.ui.app, {type, payload}) => {
  switch (type) {
    case types.UI_APP_SET_DATAGROUP_TRANSACTED:
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



const uiReducer = combineReducers({
  app
});


export default uiReducer;


// Selectors
