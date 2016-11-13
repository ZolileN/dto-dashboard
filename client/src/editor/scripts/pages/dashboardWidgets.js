import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import { getDashboardById } from './../reducers/dashboards';
import { getWidgetsByDashboardId } from './../reducers/widgets';
import {
  getDatagroupsets,
  getDatagroupsetSlices,
  filterDatagroupsetByHeroWidget,
  filterDatagroupsetsByBtlWidgets,
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
  let datagroupsetSlices = getDatagroupsetSlices(datagroupsets, ownProps.params.datagroup_key);
  return {
    dashboard,
    datagroupsetSlices
  }
};
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(uiActions, dispatch)
});


class PageDashboardWidgets extends Component {

  render() {
    let {
      dashboard,
      datagroupsetSlices
    } = this.props;

    let heroDatagroupsetSlice = {}
    const displayHero = dashboard.display_hero;
    if (displayHero) {
      heroDatagroupsetSlice = filterDatagroupsetByHeroWidget(datagroupsetSlices);
    }

    const btlDatagroupsetsSlices = filterDatagroupsetsByBtlWidgets(datagroupsetSlices);


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

                {displayHero && <WidgetTypeTimeSeries
                  recentDatagroupset={heroDatagroupsetSlice}
                  addUrl={getDashboardWidgetDatagroupTimeSeriesUrl(dashboard.id, heroDatagroupsetSlice.sliceNextKey)}
                  editUrl={getDashboardWidgetDatagroupTimeSeriesUrl(dashboard.id, heroDatagroupsetSlice.sliceKey)}
                  editDescriptionsUrl={getDashboardWidgetDescriptionsUrl(dashboard.id, heroDatagroupsetSlice.id)}
                  dashboard={dashboard} />}


                {btlDatagroupsetsSlices.map((slice, idx) => {
                  if (slice.type === 'simple') {
                    return <WidgetTypeSimple key={idx}
                               editUrl={getDashboardWidgetDatagroupSimpleUrl(dashboard.id, slice.widget.id)}
                               widget={slice.widget}
                               dashboard={dashboard} />
                  }
                  else if (slice.type === 'time-series') {

                    return <WidgetTypeTimeSeries key={idx}
                               recentDatagroupset={slice}
                               addUrl={getDashboardWidgetDatagroupTimeSeriesUrl(dashboard.id, slice.widget.id, slice.sliceNextKey)}
                               editUrl={getDashboardWidgetDatagroupTimeSeriesUrl(dashboard.id, slice.widget.id, slice.sliceKey)}
                               editDescriptionsUrl={getDashboardWidgetDescriptionsUrl(dashboard.id, slice.widget.id)}
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

