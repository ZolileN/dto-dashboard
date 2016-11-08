import { FLAG_UDPATE_DATAGROUP } from './../constants/flags';


import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import { humanisedShortDate } from './../utils/humanisedDates';
import Preview from './datagroupPreview';


const WidgetTypeTimeSeries = ({
  recentDatagroups, editUrl, addUrl, editDescriptionsUrl, widget
}) => {

  const canUpdate = FLAG_UDPATE_DATAGROUP;
  const disableUpdate = !canUpdate;

  return (
    <article className="widget-list__item">
      <header className="clearfix">
        <div className="title">
          <h1 className="h5">{recentDatagroups.widget.name}</h1>
        </div>
        <div className="ancillary">
          <span className="date-meta">Last updated: {humanisedShortDate(recentDatagroups.lastUpdated)}</span>
        </div>
      </header>

      <div className="row">
        <div className="col-xs-12 col-lg-6">
          {recentDatagroups.groups[0].datapoint && <Preview recentDatagroups={recentDatagroups} />}
        </div>
        <div className="col-xs-12 col-lg-6">
          <Link to={addUrl} className="btn primary"
                disabled={recentDatagroups.hasHead}
                onClick={e => {if (recentDatagroups.hasHead) return e.preventDefault()}}>Add data</Link><br/>
          <Link to={editUrl}
                disabled={disableUpdate}
                onClick={e => disableUpdate && e.preventDefault()}>Edit data</Link><br/>
          <Link to={editDescriptionsUrl}
                disabled={disableUpdate}
                onClick={e => disableUpdate && e.preventDefault()}>Edit KPI descriptions</Link><br/>
        </div>
      </div>
    </article>
  )
};

WidgetTypeTimeSeries.propTypes = {
  recentDatagroups: PropTypes.object.isRequired,
  editUrl: PropTypes.string.isRequired
};

export default WidgetTypeTimeSeries;
