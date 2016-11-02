import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import { humanisedShortDate } from './../utils/humanisedDates';
import Preview from './datagroupPreview';
import { makeKpiPreviewItems } from './../helpers/datagroup';


/**
 * An extension of ./widgetTypeTimeSeries.js
 * @param props
 * @constructor
 */
const WidgetTypeKpiHeroGroup = ({
  datagroup,
  addUrl,
  editUrl,
  editDescriptionsUrl
}) => {
  return (
    <article className="widget-list__item">
      <header className="clearfix">
        <div className="title">
          <h1 className="h5">Kpi Performance Indicators</h1>
        </div>
        <div className="ancillary">
          <span className="date-meta">Last updated: {humanisedShortDate(datagroup.head[0].lastUpdated)}</span>
        </div>
      </header>

      <div className="row">
        <div className="col-xs-12 col-lg-6">
          <Preview date={datagroup.key} items={makeKpiPreviewItems(datagroup)} />
        </div>
        <div className="col-xs-12 col-lg-6">
          <Link to={addUrl} className="btn primary" disabled={datagroup.head.hasLatest}>Add data</Link><br/>
          <Link to={editUrl} disabled={true}>Edit data</Link><br/>
          <Link to={editDescriptionsUrl} disabled={true}>Edit KPI descriptions</Link><br/>
        </div>
      </div>
    </article>
  )
};


export default WidgetTypeKpiHeroGroup;
