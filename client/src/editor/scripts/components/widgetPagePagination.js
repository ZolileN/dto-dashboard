import React from 'react';
import { Link } from 'react-router';
import moment from 'moment';

import { getHumanisedMonth } from './../utils/humanisedDates';
import { getDashboardWidgetDatagroupTimeSeriesUrl } from './../utils/urlHelpers';


const Pagination = ({nextKey, prevKey, dashboardId, widgetId}) => {
  let nextUrl,
    prevUrl;

  if (nextKey) {
    nextUrl = getDashboardWidgetDatagroupTimeSeriesUrl(dashboardId, widgetId, nextKey);
  } else {
    // todo - get this as default from api instead
    nextKey = moment(prevKey).add('months', 2);
  }

  prevUrl = getDashboardWidgetDatagroupTimeSeriesUrl(dashboardId, widgetId, prevKey);

  return (
    <div>
      <Link to={prevUrl} className="UIKIT-button btn btn-primary"><i className="tmp-icon pr-1">{`<`}</i>{getHumanisedMonth(prevKey)}</Link>
      <Link to={nextUrl}
            className="UIKIT-button btn btn-primary"
            disabled={!nextUrl}
            onClick={e => {if (!nextUrl) return e.preventDefault()}}>{getHumanisedMonth(nextKey)}<i className="tmp-icon pl-1">{`>`}</i></Link>
    </div>
  )
};

export default Pagination;
