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
  getDashboardWidgetsDatagroupKpiUrl,
  getDashboardWidgetDatagroupSimpleUrl,
  getDashboardWidgetDatagroupTimeSeriesUrl,
  getDashboardWidgetDatagroupCrossSectionalUrl,
  getDashboardWidgetDescriptionsUrl
} from './../utils/urlHelpers';
import {
  getDatagroup,
  getKpiDatagroup,
  getLatestDatagroupKey
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
  let datagroup = getKpiDatagroup(kpiSuperWidgets, datasets, datapoints);
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
}

class PageDashboardWidgets extends Component {

  render() {

    let {
      dashboard,
      datasets,
      datapoints,
      widgets
    } = this.props;

    let datagroup;
    let latestDatagroupKey = getLatestDatagroupKey();

    let kpiSuperWidgets = groupByKpiWidgets(widgets);
    let btlWidgets = groupByStandardWidgets(widgets);


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

                <KpiGroup kpiSuperWidgets={kpiSuperWidgets}
                          datasets={datasets}
                          datapoints={datapoints}
                          dashboard={dashboard}
                          latestDatagroupKey={latestDatagroupKey} />

                {btlWidgets.map((w, idx) => {
                  let datagroup = getDatagroup(w, datasets, datapoints);

                  if (datagroup.type === 'simple') {
                    return <WidgetTypeSimple key={idx}
                               editUrl={getDashboardWidgetDatagroupSimpleUrl(dashboard.id, w.id)}
                               widget={w}
                               dashboard={dashboard} />
                  }
                  else if (datagroup.type === 'cross-sectional') {

                    console.warn('Found a cross-sectional datagroup');
                    {/*return <WidgetTypeCrossSectional key={idx}*/}
                               {/*datagroup={datagroup}*/}
                               {/*editUrl={getDashboardWidgetDatagroupCrossSectionalUrl(dashboard.id, w.id)}*/}
                               {/*editDescriptionsUrl={getDashboardWidgetDescriptionsUrl(dashboard.id, w.id)}*/}
                               {/*widget={w}*/}
                               {/*dashboard={dashboard} />*/}
                  }
                  else if (datagroup.type === 'time-series') {
                    return <WidgetTypeTimeSeries key={idx}
                               datagroup={datagroup}
                               addUrl={getDashboardWidgetDatagroupTimeSeriesUrl(dashboard.id, w.id, latestDatagroupKey)}
                               editUrl={getDashboardWidgetDatagroupTimeSeriesUrl(dashboard.id, w.id, datagroup.key)}
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

