export const getDashboardUrl = (dashboardId) => {
  return `/dashboards/${dashboardId}`;
};

export const getDashboardWidgetsUrl = (dashboardId) => {
  return `/dashboards/${dashboardId}/widgets`;
};

export const getDashboardWidgetDataUpdateUrl = (dashboardId, widgetId, dateHash) => {
  return `/dashboards/${dashboardId}/widgets/${widgetId}/data/${dateHash}`;
};

export const getDashboardWidgetDataCreateUrl = (dashboardId, widgetId) => {
  return `/dashboards/${dashboardId}/widgets/${widgetId}/data-new`;
};

export const getDashboardWidgetDescriptionsUrl = (dashboardId, widgetId) => {
  return `/dashboards/${dashboardId}/widgets/${widgetId}/data/descriptions`;
};
