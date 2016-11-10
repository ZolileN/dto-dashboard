import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import { getDashboardById } from './../reducers/dashboards';
import { getWidgetsByDashboardId } from './../reducers/widgets';
import {
  getDatagroupsets,
  filterDatagroupsetByHeroWidget,
  filterDatagroupsetsByBtlWidgets,
  getRecentDatagroupsetSlice
} from './../reducers/index';

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



const mapStateToProps = (state, ownProps) => {
  let dashboard = getDashboardById(state.dashboards, ownProps.params.dashboard_id);
  let widgets = getWidgetsByDashboardId(state.widgets, dashboard.id);
  let datagroupsets = getDatagroupsets(state, {widgets});
  return {
    dashboard,
    // heroDatagroupset: filterDatagroupsetByHeroWidget(datagroupsets),
    btlDatagroupsets: filterDatagroupsetsByBtlWidgets(datagroupsets)
  }
};
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(uiActions, dispatch)
});


class PageDashboardWidgets extends Component {

  render() {
    let {
      dashboard,
      // heroDatagroupset,
      btlDatagroupsets
    } = this.props;

    // const recentHeroDatagroupset = getRecentDatagroupsetSlice(heroDatagroupset);

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

                {/*<WidgetTypeTimeSeries*/}
                  {/*recentDatagroupset={recentHeroDatagroupset}*/}
                  {/*addUrl={getDashboardWidgetDatagroupTimeSeriesUrl(dashboard.id, recentHeroDatagroupset.headKey)}*/}
                  {/*editUrl={getDashboardWidgetDatagroupTimeSeriesUrl(dashboard.id, recentHeroDatagroupset.recentKey)}*/}
                  {/*editDescriptionsUrl={getDashboardWidgetDescriptionsUrl(dashboard.id, recentHeroDatagroupset.id)}*/}
                  {/*dashboard={dashboard} />*/}


                {btlDatagroupsets.map((datagroupset, idx) => {
                  if (datagroupset.type === 'simple') {
                    return <WidgetTypeSimple key={idx}
                               editUrl={getDashboardWidgetDatagroupSimpleUrl(dashboard.id, datagroupset.widget.id)}
                               widget={datagroupset.widget}
                               dashboard={dashboard} />
                  }
                  else if (datagroupset.type === 'time-series') {
                    const recentDatagroupset = getRecentDatagroupsetSlice(datagroupset);
                    return <WidgetTypeTimeSeries key={idx}
                               recentDatagroupset={recentDatagroupset}
                               addUrl={getDashboardWidgetDatagroupTimeSeriesUrl(dashboard.id, datagroupset.widget.id, datagroupset.headKey)}
                               editUrl={getDashboardWidgetDatagroupTimeSeriesUrl(dashboard.id, datagroupset.widget.id, datagroupset.recentKey)}
                               editDescriptionsUrl={getDashboardWidgetDescriptionsUrl(dashboard.id, datagroupset.widget.id)}
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

