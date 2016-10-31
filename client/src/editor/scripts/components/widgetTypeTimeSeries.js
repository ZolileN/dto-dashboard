import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import { humanisedShortDate } from './../utils/humanisedDates';
import Preview from './datagroupPreview';


const makePreviewItems = datapoints => {
  return datapoints.map(d => {
    return {
      label: d.label,
      value: d.value
    }
  })
};

const WidgetTypeTimeSeries = ({widget, datagroup, editUrl, addUrl, editDescriptionsUrl, hasRecentData}) => {
  return (
    <article className="widget-list__item">
      <header className="clearfix">
        <div className="title">
          <h1 className="h5">{widget.name}</h1>
        </div>
        <div className="ancillary">
          <span className="date-meta">Last updated: {humanisedShortDate(widget.last_updated_at)}</span>
        </div>
      </header>

      {/*<h1>WidgetTypeTimeSeries</h1>*/}
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

WidgetTypeTimeSeries.propTypes = {
  widget: PropTypes.object.isRequired,
  editUrl: PropTypes.string.isRequired
};

export default WidgetTypeTimeSeries;
