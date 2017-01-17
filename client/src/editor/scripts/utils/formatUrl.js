
export const getDashboardUrl = dashboardId => {
  if (typeof dashboardId === 'undefined') {
    console.error('Parameters were not correctly provided', dashboardId);
    return null;
  }
  return `/dashboards/${dashboardId}`;
};

export const getDashboardWidgetsUrl = dashboardId => {
  if (typeof dashboardId === 'undefined') {
    console.error('Parameters were not correctly provided.', dashboardId);
    return null;
  }
  return `/dashboards/${dashboardId}/widgets`;
};

export const getDashboardWidgetDatagroupSimpleUrl = (dashboardId, widgetId) => {
  if (typeof dashboardId === 'undefined' || typeof widgetId === 'undefined') {
    console.error('Parameters were not correctly provided.', dashboardId, widgetId);
    return null;
  }
  return `/dashboards/${dashboardId}/widgets/${widgetId}/datagroup-simple`;
};

export const getDashboardWidgetDatagroupTimeSeriesUrl = (dashboardId, widgetId, datagroupKey) => {
  if (typeof dashboardId === 'undefined' || typeof widgetId === 'undefined' || typeof datagroupKey === 'undefined') {
    console.error('Parameters were not correctly provided.', dashboardId, widgetId, datagroupKey);
    return null;
  }
  return `/dashboards/${dashboardId}/widgets/${widgetId}/datagroup-timeseries/${datagroupKey}`;
};

export const getDashboardWidgetDescriptionsUrl = (dashboardId, widgetId) => {
  if (typeof dashboardId === 'undefined' || typeof widgetId === 'undefined') {
    console.error('Parameters were not correctly provided.', dashboardId, widgetId);
    return null;
  }
  return `/dashboards/${dashboardId}/widgets/${widgetId}/descriptions`;
};

export const getServiceDashboardUrl = (dashboardId, dashboardName) => {
  if (typeof dashboardId === 'undefined' || typeof dashboardName === 'undefined') {
    console.error('Parameters were not correctly provided.', dashboardId, dashboardName);
    return null;
  }
  let name = dashboardName.toLowerCase().replace(/\s/g, '-');
  return `/dashboards/${dashboardId}-${name}`;
};

export const getServiceDashboardUrlAnchor = (dashboardId, dashboardName, widgetName) => {
  if (typeof dashboardId === 'undefined' || typeof dashboardName === 'undefined' || typeof widgetName === 'undefined') {
    console.error('Parameters were not correctly provided.', dashboardId, dashboardName, widgetName);
    return null;
  }
  let name = dashboardName.toLowerCase().replace(/\s/g, '-');
  let anchor = widgetName.toLowerCase().replace(/\s/g, '-');
  return `/dashboards/${dashboardId}-${name}#${anchor}`;
};
