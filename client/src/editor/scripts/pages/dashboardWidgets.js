import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import * as uiActions from './../actions/ui';
import Breadcrumbs from './../components/breadcrumbs';
import WidgetTypeKpiHeroGroup from './../components/widgetTypeKpiHeroGroup';
import WidgetTypeSimple from './../components/widgetTypeSimple';
import WidgetTypeTimeSeries from './../components/widgetTypeTimeSeries';

import {
  getDashboardUrl,
  getDashboardWidgetsDatagroupKpiUrl,
  getDashboardWidgetDatagroupSimpleUrl,
  getDashboardWidgetDatagroupTimeSeriesUrl,
  getDashboardWidgetDescriptionsUrl
} from './../utils/urlHelpers';
import {
  getRecentDatagroupsetSlice,
  getDatagroupsets,
  getKpiDatagroup
} from './../helpers/datagroup';
import {
  groupByKpiWidgets,
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

const KpiGroup = ({kpiSuperWidgets, datasets, datapoints, dashboard, latestDatagroupKey}) => {
  let datagroup = getKpiDatagroup(kpiSuperWidgets, datasets, datapoints, latestDatagroupKey);

  if (datagroup) {
    return (
      <WidgetTypeKpiHeroGroup
        datagroup={datagroup}
        addUrl={getDashboardWidgetsDatagroupKpiUrl(dashboard.id, latestDatagroupKey)}
        editUrl={getDashboardWidgetsDatagroupKpiUrl(dashboard.id, datagroup.key)}
        editDescriptionsUrl={getDashboardWidgetDescriptionsUrl(dashboard.id, datagroup.key)}
        dashboard={dashboard} />
    )
  }
};

class PageDashboardWidgets extends Component {

  render() {

    let {
      dashboard,
      datasets,
      datapoints,
      widgets
    } = this.props;

    let kpiSuperWidgets = groupByKpiWidgets(widgets);
    let btlWidgets = groupByStandardWidgets(widgets);


    // btlWidgets.map((w, idx) => {
    //   getDatagroups(w, datasets, datapoints);
    // });

    // getDatagroups(btlWidgets[4], datasets, datapoints);
    // getDatagroups(btlWidgets[5], datasets, datapoints);



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

                {/*<KpiGroup kpiSuperWidgets={kpiSuperWidgets}*/}
                          {/*datasets={datasets}*/}
                          {/*datapoints={datapoints}*/}
                          {/*dashboard={dashboard}*/}
                          {/*latestDatagroupKey={latestDatagroupKey} />*/}

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
                               recentDatagroups={getRecentDatagroupsetSlice(datagroupset)}
                               addUrl={getDashboardWidgetDatagroupTimeSeriesUrl(dashboard.id, w.id, datagroupset.headKey)}
                               editUrl={getDashboardWidgetDatagroupTimeSeriesUrl(dashboard.id, w.id, datagroupset.recentKey)}
                               editDescriptionsUrl={getDashboardWidgetDescriptionsUrl(dashboard.id, w.id)}
                               widget={w}
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

