import React from 'react';
import { Link } from 'react-router';

import { getDashboardWidgetDatagroupTimeSeriesUrl } from './../utils/urlHelpers';


const Pagination = ({nextKey, prevKey, dashboardId, widgetId}) => {
  let nextUrl,
    prevUrl;

  if (nextKey) {
    nextUrl = getDashboardWidgetDatagroupTimeSeriesUrl(dashboardId, widgetId, nextKey);
  }
  prevUrl = getDashboardWidgetDatagroupTimeSeriesUrl(dashboardId, widgetId, prevKey);

  return (
    <div>
      <Link to={prevUrl}>Left</Link>
      <Link to={nextUrl}
            disabled={Boolean(nextKey)}
            onClick={e => {if (!Boolean(nextKey)) return e.preventDefault()}}>Right</Link>
    </div>
  )
};

export default Pagination;
