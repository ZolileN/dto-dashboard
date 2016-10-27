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
                  {path:'/', name:'Home'},
                  {path:getDashboardUrl(dashboard.id), name:`${dashboard.name}`}
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
                  let latestDataSlice = widgetDatasets.map((wd) => {
                    let sectionDatapoints = getDatapointsByIds(datapoints, wd.datapoints);
                    let newestDatapoint = getNewestDatapoint(sectionDatapoints);
                    return {
                      date_period: newestDatapoint.label,
                      label: wd.label,
                      value: newestDatapoint.value,
                      units: wd.units
                    }
                  });

                  let dateHash = {}; // todo
                  return (
                    <WidgetItem key={idx}
                                className="widget-list__item"
                                hasRecentData={!!dateHash}
                                addDataUrl={getDashboardWidgetDataCreateUrl(dashboard.id, w.id)}
                                editDataUrl={getDashboardWidgetDataUpdateUrl(dashboard.id, w.id, dateHash)}
                                editDescriptionsUrl={getDashboardWidgetDescriptionsUrl(dashboard.id, w.id)}
                                dashboard={dashboard}
                                latestDataSlice={latestDataSlice}
                                widget={w} />
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

