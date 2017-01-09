
// Action Types

export const types = {
  UI_SET_LASTVIEWEDWIDGET: 'ui/setLastViewedWidget',
  UI_SET_LASTDATAGROUPSETTRANSACTION: 'ui/setLastDatagroupsetTransaction',
};


// Actions

/**
 * .@param {Object} payload
 * @returns {Object} action creator
 */
export const setLastViewedWidget = ({widgetId}) => ({
  type: types.UI_SET_LASTVIEWEDWIDGET,
  payload: {
    widgetId
  }
});

/**
 * .@param {Object} payload
 * @returns {Object} action creator
 */
export const setLastDatagroupsetTransaction = ({widgetId, description, type}) => {
  return {
    type: types.UI_SET_LASTDATAGROUPSETTRANSACTION,
    payload: {widgetId, description, type}
  }
};
