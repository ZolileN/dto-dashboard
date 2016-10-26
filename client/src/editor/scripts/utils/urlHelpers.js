export const getEditDashboardUrl = (dashboardId) => {
  return `/dashboards/${dashboardId}`;
};

export const getCreateDashboardWidgetDataUrl = (dashboardId, widgetId) => {
  return `/dashboards/${dashboardId}/widgets/${widgetId}/data-new`;
};

export const getEditDashboardWidgetDataUrl = (dashboardId, widgetId, dateHash) => {
  return `/dashboards/${dashboardId}/widgets/${widgetId}/data/${dateHash}`;
};

export const getEditDashboardWidgetDescriptionsUrl = (dashboardId, widgetId) => {
  return `/dashboards/${dashboardId}/widgets/${widgetId}/data/descriptions`;
};
