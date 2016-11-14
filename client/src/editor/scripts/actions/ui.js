import * as types from './_types';


export const setAnchorToAtDashboardWidgets = anchorTo => ({
  type: types.UI_PAGE_DASHBOARDWIDGETS_SET_ANCHOR_TO,
  payload: {
    anchorTo
  }
});

export const clearAnchorToAtDashboardWidgets = () => ({
  type: types.UI_PAGE_DASHBOARDWIDGETS_CLEAR_ANCHOR_TO
});

