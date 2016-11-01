import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import { humanisedShortDate } from './../utils/humanisedDates';
import Preview from './datagroupPreview';


const makePreviewItems = datapoints => {
  return datapoints.map(d => {
    if (!d) return {};
    return {
      label: d.label,
      value: d.value
    }
  })
};


/**
 * An extension of ./widgetTypeTimeSeries.js
 * @param props
 * @constructor
 */
const WidgetTypeKpiHeroGroup = ({
  heroWidget,
  kpiWidgets,
  hasRecentData,
  addUrl,
  editUrl,
  editDescriptionsUrl,
  datagroup
}) => {

  return (
    <article className="widget-list__item">
      <header className="clearfix">
        <div className="title">
          <h1 className="h5">Kpi Performance Indicators</h1>
        </div>
        <div className="ancillary">
          <span className="date-meta">Last updated: {humanisedShortDate(kpiWidgets[0].last_updated_at)}</span>
        </div>
      </header>

      <div className="row">
        <div className="col-xs-12 col-lg-6">
          <Preview date={datagroup.key} items={makePreviewItems(datagroup.headDatapoints)} />
        </div>
        <div className="col-xs-12 col-lg-6">
          <Link to={addUrl} className="btn primary" disabled={hasRecentData}>Add data</Link><br/>
          <Link to={editUrl}>Edit data</Link><br/>
          <Link to={editDescriptionsUrl}>Edit KPI descriptions</Link><br/>
        </div>
      </div>
    </article>
  )
};


export default WidgetTypeKpiHeroGroup;
