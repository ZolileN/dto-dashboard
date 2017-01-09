
import { FLAG_UDPATE_DATAGROUP } from './../constants/flags';

import React, {PropTypes} from 'react';
import {Link} from 'react-router';

import Preview from './datagroupPreview';
import TrafficLight from './../components/widgetTrafficLight';
import UikitAlert from './../../../_shared/scripts/components/uikit-components/alert';


const WidgetTypeTimeSeries = ({
  recentDatagroupset,
  editUrl,
  addUrl,
  serviceDashboardUrl,
  editDescriptionsUrl,
  alertProps,
  setLastViewedWidget
}) => {

  const canUpdate = FLAG_UDPATE_DATAGROUP;

  const hasNoDatapoints = recentDatagroupset.groups.every(g => {
    return !recentDatagroupset.groups[0].dataset.datapoints.length;
  });

  if (hasNoDatapoints) {
    return (
      <article className="widget-list__item">
        <div className="row">
          <div className="col-xs-12">
            <UikitAlert type="info" text="Datasets for this widget have not been set up. Please contact the Dashboard Team to set up your first dataset." />
          </div>
        </div>
      </article>
    )
  }

  const handleClickAdd = (e) => {
    if (recentDatagroupset.hasHead) {
      e.preventDefault();
    } else {
      setLastViewedWidget({widgetId:recentDatagroupset.widget.id});
    }
  };

  return (
    <article className="widget-list__item">

      {alertProps && <UikitAlert type={alertProps.type === 'create' || alertProps.type === 'update' ? 'success' : 'info'}
                                 text={alertProps.description}
                                 className="animated fadeIn" />}

      <header>
        <div className="title">
          <h1 className="h5">{recentDatagroupset.widget.name === 'Kpis' ? 'Key performance indicators' : recentDatagroupset.widget.name}</h1>
        </div>
        <div className="meta-status">
          <TrafficLight recentKey={recentDatagroupset.recentKey} />
        </div>
      </header>

      <div className="row">
        <div className="col-xs-12 col-lg-6">
          {recentDatagroupset.recentKey && <Preview recentDatagroupset={recentDatagroupset} />}
        </div>
        <div className="col-xs-12 col-lg-6 ctas">
          <Link to={addUrl} className="UIK-button btn btn-primary"
                disabled={recentDatagroupset.hasHead}
                onClick={handleClickAdd}>Add new data</Link><br/>
          <Link to={editUrl}
                className="UIK-link"
                disabled={!canUpdate}
                onClick={e => !canUpdate && e.preventDefault()}>Edit existing data</Link><br/>
          <Link to={editDescriptionsUrl}
                className="UIK-link"
                disabled={!canUpdate}
                onClick={e => !canUpdate && e.preventDefault()}>Edit labels and descriptions</Link><br/>

          <a href={serviceDashboardUrl} className="UIK-link" target="blank" rel="external">View on Dashboard</a>
        </div>
      </div>
    </article>
  )
};

WidgetTypeTimeSeries.propTypes = {
  recentDatagroupset: PropTypes.object.isRequired,
  editUrl: PropTypes.string.isRequired,
  addUrl: PropTypes.string.isRequired,
  serviceDashboardUrl: PropTypes.string.isRequired,
  editDescriptionsUrl: PropTypes.string.isRequired,
  alertProps: PropTypes.shape({
    widgetId: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]).isRequired,
    description: PropTypes.string.isRequired,
    type: PropTypes.string
  }),
  setLastViewedWidget: PropTypes.func.isRequired
};

export default WidgetTypeTimeSeries;
