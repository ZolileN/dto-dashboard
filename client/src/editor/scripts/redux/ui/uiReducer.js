
import {types} from './uiActions';
import initialState from './../initialState';


const ui = (state = initialState.ui, {type, payload}) => {

  let nextState;

  switch (type) {
    case types.UI_SET_DATAGROUPSET_TRANSACTED:
      nextState = {...state};
      nextState.didTransactDatagroupset = {
        widgetId: payload.widgetId,
        description: payload.description,
        type: payload.type
      };
      return nextState;

    case types.UI_CLEAR_DATAGROUPSET_TRANSACTED:
      nextState = {...state};
      nextState.didTransactDatagroupset = {};
      return nextState;

    default:
      return state;
  }
};


export default ui;
