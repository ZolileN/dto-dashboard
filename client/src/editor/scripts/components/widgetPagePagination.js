import React from 'react';
import { Link } from 'react-router';

import {
  getDashboardWidgetsDatagroupKpiUrl,
  getDashboardWidgetDatagroupTimeSeriesUrl
} from './../utils/urlHelpers';
import {
  getNextDatagroupKey,
  getPreviousDatagroupKey
} from './../helpers/datagroup';


export const makeLinksKpiType = (datagroup_key, dashboardId) => {
  // let res = {
  //   latestKey: getLatestDatagroupKey(),
  //   prevKey: getPreviousDatagroupKey(datagroup_key),
  //   nextKey: getNextDatagroupKey(datagroup_key),
  //   prevUrl: null
  // };
  // res.nextUrl = getDashboardWidgetsDatagroupKpiUrl(dashboardId, res.nextKey);
  // res.prevUrl = getDashboardWidgetsDatagroupKpiUrl(dashboardId, res.prevKey);
  // return res;
};

export const makeLinksTimeSeriesType = (datagroupset, dashboardId, widgetId) => {
  let res = {
    latestKey: datagroupset.headKey,
    prevKey: getPreviousDatagroupKey(datagroupset.currentKey),
    nextKey: getNextDatagroupKey(datagroupset.currentKey),
    prevUrl: null
  };
  res.nextUrl = getDashboardWidgetDatagroupTimeSeriesUrl(dashboardId, widgetId, res.nextKey);
  res.prevUrl = getDashboardWidgetDatagroupTimeSeriesUrl(dashboardId, widgetId, res.prevKey);
  return res;
};

const Pagination = ({links}) => {

  let { nextKey, latestKey, prevUrl, nextUrl } = links;

  let nextDate = new Date(nextKey).getTime();
  let latestDate = new Date(latestKey).getTime();

  let disableNext = false;

  if (nextDate > latestDate) {
    disableNext = true;
  }

  return (
    <div>
      <Link to={prevUrl}>Left</Link>
      <Link to={nextUrl}
            disabled={disableNext}
            onClick={e => {if (disableNext) return e.preventDefault()}}>Right</Link>
    </div>
  )
};

export default Pagination;
