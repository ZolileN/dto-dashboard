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
      <Link to={prevUrl} className="btn primary"><i className="tmp-icon pr-1">{`<`}</i>Left</Link>
      <Link to={nextUrl}
            className="btn primary"
            disabled={!nextUrl}
            onClick={e => {if (!nextUrl) return e.preventDefault()}}>Right<i className="tmp-icon pl-1">{`>`}</i></Link>
    </div>
  )
};

export default Pagination;
