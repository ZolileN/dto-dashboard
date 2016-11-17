import { FLAG_UDPATE_DATAGROUP } from './../constants/flags';


import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import Preview from './datagroupPreview';
import WidgetAlert from './widgetAlert';
import TrafficLight from './../components/widgetTrafficLight';


const WidgetTypeTimeSeries = ({
  recentDatagroupset,
  editUrl,
  addUrl,
  editDescriptionsUrl,
  alertProps
}) => {

  const canUpdate = FLAG_UDPATE_DATAGROUP;


  return (
    <article className="widget-list__item">

      {alertProps && <WidgetAlert {...alertProps} />}

      <header className="clearfix">
        <div className="title">
          <h1 className="h5">{recentDatagroupset.widget.name}</h1>
        </div>
        <div className="ancillary">
          <TrafficLight recentKey={recentDatagroupset.recentKey} />
        </div>
      </header>

      <div className="row">
        <div className="col-xs-12 col-lg-6">
          {recentDatagroupset.recentKey && <Preview recentDatagroupset={recentDatagroupset} />}
        </div>
        <div className="col-xs-12 col-lg-6">
          <Link to={addUrl} className="btn primary"
                disabled={recentDatagroupset.hasHead}
                onClick={e => {if (recentDatagroupset.hasHead) return e.preventDefault()}}>Add data</Link><br/>
          <Link to={editUrl}
                disabled={!canUpdate}
                onClick={e => !canUpdate && e.preventDefault()}>Edit data</Link><br/>
          <Link to={editDescriptionsUrl}
                disabled={!canUpdate}
                onClick={e => !canUpdate && e.preventDefault()}>Edit KPI descriptions</Link><br/>
        </div>
      </div>
    </article>
  )
};

WidgetTypeTimeSeries.propTypes = {
  recentDatagroupset: PropTypes.object.isRequired,
  editUrl: PropTypes.string.isRequired
};

export default WidgetTypeTimeSeries;
