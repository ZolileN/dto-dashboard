import * as types from './_types';


export const setDatagroupTransacted = ({widgetId, description, type}) => ({
  type: types.UI_APP_SET_DATAGROUP_TRANSACTED,
  payload: {
    widgetId,
    description,
    type
  }
});

export const clearDatagroupTransacted = () => ({
  type: types.UI_APP_CLEAR_DATAGROUP_TRANSACTED
});
