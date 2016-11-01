import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import * as uiActions from './../actions/ui';
import Breadcrumbs from './../components/breadcrumbs';
import WidgetTypeKpiHeroGroup from './../components/widgetTypeKpiHeroGroup';
import WidgetTypeSimple from './../components/widgetTypeSimple';
import WidgetTypeCrossSectional from './../components/widgetTypeCrossSectional';
import WidgetTypeTimeSeries from './../components/widgetTypeTimeSeries';

import {
  getDashboardUrl,
  getDashboardWidgetDatagroupSimpleUrl,
  getDashboardWidgetDatagroupTimeSeriesUrl,
  getDashboardWidgetDatagroupCrossSectionalUrl,
  getDashboardWidgetDescriptionsUrl
} from './../utils/urlHelpers';
import {
  getDatagroupForTimeSeries,
  getDatagroupForCrossSectional,
  getCurrentDatagroupKey,
  hasNextDatagroup
} from './../helpers/datagroup';
import {
  getWidgetsWithComputedProps,
  groupByHeroWidget,
  groupByKpiWidgets
} from './../reducers/widgets';


const mapStateToProps = (store, ownProps) => {
  return {
    dashboard: ownProps.dashboard,
    datasets: ownProps.datasets,
    datapoints: ownProps.datapoints,
    widgets: getWidgetsWithComputedProps(ownProps.widgets),
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

    let latestDatagroupKey = getCurrentDatagroupKey();

    let kpiWidgets = groupByKpiWidgets(widgets);
    let heroWidget = groupByHeroWidget(widgets);

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
                <Link to={getDashboardUrl(dashboard.id)}>Edit dashboard overview</Link>
              </div>

              <section className="widget-list">

                <WidgetTypeKpiHeroGroup heroWidget={heroWidget} kpiWidgets={kpiWidgets} />

                {widgets.map((w, idx) => {
                  if (w._type === 'simple') {
                    return <WidgetTypeSimple key={idx}
                                             widget={w}
                                             editUrl={getDashboardWidgetDatagroupSimpleUrl(dashboard.id, w.id)}
                                             dashboard={dashboard} />
                  }
                  else if (w._type === 'cross-sectional') {
                    return <WidgetTypeCrossSectional key={idx}
                                                     widget={w}
                                                     dashboard={dashboard}
                                                     editUrl={getDashboardWidgetDatagroupCrossSectionalUrl(dashboard.id, w.id)}
                                                     editDescriptionsUrl={getDashboardWidgetDescriptionsUrl(dashboard.id, w.id)}
                                                     datagroup={getDatagroupForCrossSectional(w, datasets, datapoints)} />
                  }
                  else if (w._type === 'time-series') {
                    let datagroup = getDatagroupForTimeSeries(w, datasets, datapoints);
                    return <WidgetTypeTimeSeries key={idx}
                                                 widget={w}
                                                 dashboard={dashboard}
                                                 hasRecentData={!hasNextDatagroup(datagroup.key)}
                                                 addUrl={getDashboardWidgetDatagroupTimeSeriesUrl(dashboard.id, w.id, latestDatagroupKey)}
                                                 editUrl={getDashboardWidgetDatagroupTimeSeriesUrl(dashboard.id, w.id, datagroup.key)}
                                                 editDescriptionsUrl={getDashboardWidgetDescriptionsUrl(dashboard.id, w.id)}
                                                 datagroup={datagroup} />
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

