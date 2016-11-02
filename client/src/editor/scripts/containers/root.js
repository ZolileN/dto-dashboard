import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRedirect, IndexRoute } from 'react-router';

import Layout from './layout';

// Route State
import Dashboards from './dashboards';
import Dashboard from './dashboard';
import DashboardWidgets from './dashboardWidgets';
import DashboardWidget from './dashboardWidget';


import Dataset from './dataset';
import Datasets from './datasets';
import DatasetDatapoints from './datasetDatapoints';

// Pages
import DashboardsPage from './../pages/dashboards';
import DashboardPage from './../pages/dashboard';
import DashboardWidgetsPage from './../pages/dashboardWidgets';
import DashboardWidgetPage from './../pages/dashboardWidget';
import DashboardWidgetDatagroupKpiPage from './../pages/dashboardWidgetDatagroupKpi';
import DashboardWidgetDatagroupSimplePage from './../pages/dashboardWidgetDatagroupSimple';
import DashboardWidgetDatagroupCrossSectionalPage from './../pages/dashboardWidgetDatagroupCrossSectional';
import DashboardWidgetDatagroupTimeSeriesPage from './../pages/dashboardWidgetDatagroupTimeSeries';
import DashboardWidgetDescriptionsPage from './../pages/dashboardWidgetDescriptions';


import DatasetPage from './../pages/dataset';
import DatasetsPage from './../pages/datasets';
import DatasetDatapointPage from './../pages/datasetDatapoint';
import DatasetDatapointCreatePage from './../pages/datasetDatapointCreate';

import NoMatch from './../pages/noMatch';


export default class Root extends Component {

  static propTypes = {
    store: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  };

  render() {
    let { store, history } = this.props;
    return (
      <Provider store={store}>
        <Router history={history}>
          <Route path="/" component={Layout}>

            /*

	            dashboards
	            dashboards/:id                            UpdateDashboard Form
	            dashboards/:id/widgets
              dashboards/:id/widgets/datagroup-kpi/:datagroup_key
              dashboards/:id/widgets/:id/datagroup-simple
              dashboards/:id/widgets/:id/datagroup-cross-sectional
              dashboards/:id/widgets/:id/datagroup-time-series/:datagroup_key
	            dashboards/:id/widgets/:id/descriptions   UpdateWidget Form


	            datasets
	            datasets/id
	            datasets/id/datapoints/1
	            datasets/id/datapoints-new

             */

            <IndexRedirect to="/dashboards" />

            <Route path="dashboards" component={Dashboards}>
              <IndexRoute path="" component={DashboardsPage} />

              <Route path=":dashboard_id" component={Dashboard}>
                /* dashboards/:id */
                <IndexRoute path="" component={DashboardPage} />

                  <Route path="widgets" component={DashboardWidgets}>
                    /* dashboards/:id/widgets */
                    <IndexRoute component={DashboardWidgetsPage} />

                    /* dashboards/:id/widgets/datagroup-kpi/:datagroup_key */
                    <Route path="datagroup-kpi/:datagroup_key" component={DashboardWidgetDatagroupKpiPage} />


                    <Route path=":widget_id" component={DashboardWidget}>
                      /* dashboards/:id/widgets/:id */
                      <IndexRoute component={DashboardWidgetPage} />
                      /* dashboards/:id/widgets/:id/datagroup-simple */
                      /* dashboards/:id/widgets/:id/datagroup-cross-sectional */
                      /* dashboards/:id/widgets/:id/datagroup-time-series/:datagroup_key */
                      /* dashboards/:id/widgets/:id/descriptions */
                      <Route path="datagroup-simple" component={DashboardWidgetDatagroupSimplePage} />
                      <Route path="datagroup-cross-sectional" component={DashboardWidgetDatagroupCrossSectionalPage} />
                      <Route path="datagroup-time-series/:datagroup_key" component={DashboardWidgetDatagroupTimeSeriesPage} />
                      <Route path="descriptions" component={DashboardWidgetDescriptionsPage} />
                    </Route>
                  </Route>
              </Route>
            </Route>

            <Route path="datasets" component={Datasets}>
              <IndexRoute component={DatasetsPage} />

              <Route path=":dataset_id" component={Dataset}>
                <IndexRoute component={DatasetPage} />

                <Route component={DatasetDatapoints}>
                  <Route path="datapoints/:datapoint_id" component={DatasetDatapointPage} />
                  <Route path="datapoints-new" component={DatasetDatapointCreatePage} />
                </Route>
              </Route>
            </Route>

            <Route path="*" component={NoMatch} />

          </Route>
        </Router>
      </Provider>
    )
  }
};
