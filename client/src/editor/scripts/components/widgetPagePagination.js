import React from 'react';
import { Link } from 'react-router';
import moment from 'moment';
import Icon from './../../../_shared/scripts/components/icon';

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
      <Link to={prevUrl} className="UIKIT-button btn btn-primary paginate-left"><Icon name="chevron-left" /><span>{getHumanisedMonth(prevKey)}</span></Link>
      <Link to={nextUrl}
            className="UIKIT-button btn btn-primary paginate-right"
            disabled={!nextUrl}
            onClick={e => {if (!nextUrl) return e.preventDefault()}}><span>{getHumanisedMonth(nextKey)}</span><Icon name="chevron-right" /></Link>
    </div>
  )
};

export default Pagination;
