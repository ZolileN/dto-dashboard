export const getDashboardUrl = (dashboardId) => {
  return `/dashboards/${dashboardId}`;
};

export const getDashboardWidgetsUrl = (dashboardId) => {
  return `/dashboards/${dashboardId}/widgets`;
};

export const getDashboardWidgetDatagroup = (dashboardId, widgetId, key) => {
  let url = `/dashboards/${dashboardId}/widgets/${widgetId}/data/${key}`;
};

export const getDashboardWidgetDescriptionsUrl = (dashboardId, widgetId) => {
  return `/dashboards/${dashboardId}/widgets/${widgetId}/data/descriptions`;
};
