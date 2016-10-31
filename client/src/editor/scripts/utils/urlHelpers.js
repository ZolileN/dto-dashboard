export const getDashboardUrl = (dashboardId) => {
  return `/dashboards/${dashboardId}`;
};

export const getDashboardWidgetsUrl = (dashboardId) => {
  return `/dashboards/${dashboardId}/widgets`;
};

export const getDashboardWidgetDatagroupSimpleUrl = (dashboardId, widgetId) => {
  return `/dashboards/${dashboardId}/widgets/${widgetId}/datagroup-simple`;
};

export const getDashboardWidgetDatagroupTimeSeriesUrl = (dashboardId, widgetId, key = 'edit') => {
  return `/dashboards/${dashboardId}/widgets/${widgetId}/datagroup-time-series/${key}`;
};

export const getDashboardWidgetDatagroupCrossSectionalUrl = (dashboardId, widgetId) => {
  return `/dashboards/${dashboardId}/widgets/${widgetId}/datagroup-cross-sectional`;
};

export const getDashboardWidgetDescriptionsUrl = (dashboardId, widgetId) => {
  return `/dashboards/${dashboardId}/widgets/${widgetId}/descriptions`;
};
