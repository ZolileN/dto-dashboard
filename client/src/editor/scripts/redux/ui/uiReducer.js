
import {types} from './uiActions';
import initialState from './../initialState';


const ui = (state = initialState.ui, {type, payload}) => {

  let nextState;

  switch (type) {

    case types.UI_SET_LASTVIEWEDWIDGET:
      nextState = {...state};
      if (payload && payload.widgetId) {
        nextState.lastViewedWidget = payload.widgetId;
        return nextState;
      }
      nextState.lastViewedWidget = null;
      return nextState;


    case types.UI_SET_LASTDATAGROUPSETTRANSACTION:
      const allowedTypes = ['create','update','delete',null];
      nextState = {...state};
      if (payload && payload.widgetId) {
        const {widgetId,description,type} = payload;
        if (!allowedTypes.includes(type)) {
          console.error(`type provided to ${types.UI_SET_LASTDATAGROUPSETTRANSACTION} must be one of "${allowedTypes.join(', ')}", you provided: ${type}`);
        }
        nextState.lastDatagroupsetTransaction = {widgetId,description,type};
        return nextState;
      }
      nextState.lastDatagroupsetTransaction = {widgetId:null,description:null,type:null};
      return nextState;


    default:
      return state;
  }
};


export default ui;
