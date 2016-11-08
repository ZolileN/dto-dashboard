import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import * as uiActions from './../actions/ui';
import Breadcrumbs from './../components/breadcrumbs';
import WidgetTypeSimple from './../components/widgetTypeSimple';
import WidgetTypeTimeSeries from './../components/widgetTypeTimeSeries';

import {
  getDashboardUrl,
  getDashboardWidgetDatagroupSimpleUrl,
  getDashboardWidgetDatagroupTimeSeriesUrl,
  getDashboardWidgetDescriptionsUrl
} from './../utils/urlHelpers';
import {
  getRecentDatagroupsetSlice,
  getDatagroupsets
} from './../helpers/datagroup';
import {
  groupByHeroWidget,
  groupByStandardWidgets
} from './../reducers/widgets';


const mapStateToProps = (store, ownProps) => {
  return {
    dashboard: ownProps.dashboard,
    datasets: ownProps.datasets,
    datapoints: ownProps.datapoints,
    widgets: ownProps.widgets,
  }
};
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(uiActions, dispatch)
});


class PageDashboardWidgets extends Component {

  render() {

    let {
      dashboard,
      datasets,
      datapoints,
      widgets
    } = this.props;

    let heroWidget = groupByHeroWidget(widgets);
    let btlWidgets = groupByStandardWidgets(widgets);


    const KpiGroup = ({widget, datasets, datapoints, dashboard}) => {
      let datagroupsets = getDatagroupsets(widget, datasets, datapoints);
      let datagroupset = datagroupsets[0];
      return (
        <WidgetTypeTimeSeries
          recentDatagroupset={getRecentDatagroupsetSlice(datagroupset)}
          addUrl={getDashboardWidgetDatagroupTimeSeriesUrl(dashboard.id, datagroupset.headKey)}
          editUrl={getDashboardWidgetDatagroupTimeSeriesUrl(dashboard.id, datagroupset.recentKey)}
          editDescriptionsUrl={getDashboardWidgetDescriptionsUrl(dashboard.id, datagroupset.id)}
          dashboard={dashboard} />
      )
    };

    return (
      <div className="page page-dashboardwidgets">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-lg-8">
              <div className="page__header">
                <Breadcrumbs paths={[
                  {path: '/', name:'Home'},
                  {path: getDashboardUrl(dashboard.id), name:`${dashboard.name}`}
                ]} />
                <h1 className="h4">Manage Dashboards</h1>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-xs-12 col-lg-8">
              <div className="page-dashboardwidgets__title-block">
                <h1>{dashboard.name}</h1>
                <p>{dashboard.description}</p>
                <Link to={getDashboardUrl(dashboard.id)}
                      disabled={true}
                      onClick={e => e.preventDefault()}>Edit dashboard overview</Link>
              </div>

              <section className="widget-list">

                <KpiGroup widget={heroWidget}
                          datasets={datasets}
                          datapoints={datapoints}
                          dashboard={dashboard} />

                {btlWidgets.map((w, idx) => {
                  let datagroupsets = getDatagroupsets(w, datasets, datapoints);
                  let datagroupset = datagroupsets[0];

                  if (datagroupset.type === 'simple') {
                    return <WidgetTypeSimple key={idx}
                               editUrl={getDashboardWidgetDatagroupSimpleUrl(dashboard.id, w.id)}
                               widget={w}
                               dashboard={dashboard} />
                  }
                  else if (datagroupset.type === 'time-series') {
                    return <WidgetTypeTimeSeries key={idx}
                               recentDatagroupset={getRecentDatagroupsetSlice(datagroupset)}
                               addUrl={getDashboardWidgetDatagroupTimeSeriesUrl(dashboard.id, w.id, datagroupset.headKey)}
                               editUrl={getDashboardWidgetDatagroupTimeSeriesUrl(dashboard.id, w.id, datagroupset.recentKey)}
                               editDescriptionsUrl={getDashboardWidgetDescriptionsUrl(dashboard.id, w.id)}
                               dashboard={dashboard} />
                  }
                })}
              </section>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PageDashboardWidgets);

