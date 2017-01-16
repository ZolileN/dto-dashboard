export const getDashboardUrl = (dashboardId) => {
  return `/dashboards/${dashboardId}`;
};

export const getDashboardWidgetsUrl = (dashboardId) => {
  return `/dashboards/${dashboardId}/widgets`;
};

export const getDashboardWidgetsDatagroupKpiUrl = (dashboardId, datagroup_key) => {
  return `/dashboards/${dashboardId}/widgets/datagroup-kpi/${datagroup_key}`;
};

export const getDashboardWidgetDatagroupSimpleUrl = (dashboardId, widgetId) => {
  return `/dashboards/${dashboardId}/widgets/${widgetId}/datagroup-simple`;
};

export const getDashboardWidgetDatagroupTimeSeriesUrl = (dashboardId, widgetId, datagroup_key) => {
  return `/dashboards/${dashboardId}/widgets/${widgetId}/datagroup-timeseries/${datagroup_key}`;
};

export const getDashboardWidgetDescriptionsUrl = (dashboardId, widgetId) => {
  return `/dashboards/${dashboardId}/widgets/${widgetId}/descriptions`;
};

export const getServiceDashboardUrl = (dashboardId, dashboardName) => {
  let name = dashboardName.toLowerCase().replace(/\s/g, '-');
  return `/dashboards/${dashboardId}-${name}`;
};

export const getServiceDashboardUrlAnchor = (dashboardId, dashboardName, widgetName) => {
  let name = dashboardName.toLowerCase().replace(/\s/g, '-');
  let anchor = widgetName.toLowerCase().replace(/\s/g, '-');
  return `/dashboards/${dashboardId}-${name}#${anchor}`;
};
