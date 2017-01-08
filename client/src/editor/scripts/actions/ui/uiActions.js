import * as types from './../types';


export const setDatagroupsetTransacted = ({widgetId, description, type}) => {
  return {
    type: types.UI_SET_DATAGROUPSET_TRANSACTED,
    payload: {
      widgetId,
      description,
      type
    }
  }
};

export const clearDatagroupsetTransacted = () => ({
  type: types.UI_CLEAR_DATAGROUPSET_TRANSACTED
});
