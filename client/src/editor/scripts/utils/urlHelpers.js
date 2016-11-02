export const getDashboardUrl = (dashboardId) => {
  return `/dashboards/${dashboardId}`;
};

export const getDashboardWidgetsUrl = (dashboardId) => {
  return `/dashboards/${dashboardId}/widgets`;
};

export const getDashboardWidgetsDatagroupKpiUrl = (dashboardId, datagroup_key) => {
  if (!datagroup_key) console.warn('no key provided');
  return `/dashboards/${dashboardId}/widgets/datagroup-kpi/${datagroup_key}`;
};

export const getDashboardWidgetDatagroupSimpleUrl = (dashboardId, widgetId) => {
  return `/dashboards/${dashboardId}/widgets/${widgetId}/datagroup-simple`;
};

export const getDashboardWidgetDatagroupCrossSectionalUrl = (dashboardId, widgetId) => {
  return `/dashboards/${dashboardId}/widgets/${widgetId}/datagroup-cross-sectional`;
};

export const getDashboardWidgetDatagroupTimeSeriesUrl = (dashboardId, widgetId, datagroup_key) => {
  if (!datagroup_key) console.warn('no key provided');
  return `/dashboards/${dashboardId}/widgets/${widgetId}/datagroup-time-series/${datagroup_key}`;
};

export const getDashboardWidgetDescriptionsUrl = (dashboardId, widgetId) => {
  return `/dashboards/${dashboardId}/widgets/${widgetId}/descriptions`;
};
