import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import * as uiActions from './../actions/ui';
import Breadcrumbs from './../components/breadcrumbs';
import KpiWidgetItem from './../components/kpiWidgetItem';
import WidgetItem from './../components/widgetItem';
import {
  filterKpiWidgets,
  filterBelowTheLineWidgets
} from './../reducers/widgets';
import {
  getDashboardUrl,
  getDashboardWidgetDataCreateUrl,
  getDashboardWidgetDataUpdateUrl,
  getDashboardWidgetDescriptionsUrl
} from './../utils/urlHelpers';
import {
  getDatapointsByIds,
  getNewestDatapoint
} from './../reducers/datapoints';
import { getDatasetsByIds } from './../reducers/datasets';
import {
  hasLatestData,
  getHeadDatapoints
} from './../helpers/datasets';
import getLatestDataHash from './../utils/getLatestDataHash';


const mapStateToProps = (store, ownProps) => {
  return {
    dashboard: ownProps.dashboard,
    kpiWidgets: filterKpiWidgets(ownProps.widgets),
    btlWidgets: filterBelowTheLineWidgets(ownProps.widgets),
    datasets: ownProps.datasets,
    datapoints: ownProps.datapoints
  }
};
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(uiActions, dispatch)
});


class PageDashboardWidgets extends Component {

  render() {
    let {
      kpiWidgets,
      btlWidgets,
      dashboard,
      datasets,
      datapoints
    } = this.props;

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
                {/*<KpiWidgetItem className="widget-list__item"*/}
                               {/*dashboard={dashboard}*/}
                               {/*widgets={kpiWidgets} />*/}

                {btlWidgets.map((w, idx) => {

                  let widgetDatasets = getDatasetsByIds(datasets, w.datasets);
                  let headDatapointsIds = getHeadDatapoints(widgetDatasets);
                  let headDatapoints = getDatapointsByIds(datapoints, headDatapointsIds);
                  let hasHead = hasLatestData(datapoints, headDatapointsIds);
                  let dateHash = getLatestDataHash(); // todo - add this on config or memoise

                  return (
                    <WidgetItem key={idx}
                                className="widget-list__item"
                                hasRecentData={hasHead}
                                addDataUrl={getDashboardWidgetDataCreateUrl(dashboard.id, w.id)}
                                editDataUrl={getDashboardWidgetDataUpdateUrl(dashboard.id, w.id, dateHash)}
                                editDescriptionsUrl={getDashboardWidgetDescriptionsUrl(dashboard.id, w.id)}
                                dashboard={dashboard}
                                headDatapoints={headDatapoints}
                                widget={w}
                                datasets={widgetDatasets} />
                  )
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

