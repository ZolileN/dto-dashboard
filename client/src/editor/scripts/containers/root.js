import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRedirect, IndexRoute } from 'react-router';

import Layout from './layout';

import Dashboards from './dashboards';
import Dashboard from './dashboard';
import DashboardWidget from './dashboardWidget';


import Dataset from './dataset';
import Datasets from './datasets';
import DatasetDatapoints from './datasetDatapoints';

import SplashPage from './../pages/splash';
import DashboardPage from './../pages/dashboard';
import DashboardWidgetsPage from './../pages/dashboardWidgets';
import DashboardWidgetPage from './../pages/dashboardWidget';
import DashboardWidgetDataPage from './../pages/dashboardWidgetData';
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

	            /
	            dashboards
	            dashboards/:id                            UpdateDashboard Form
	            dashboards/:id/widgets
	            dashboards/:id/widgets/:id/data-new       CreateWidgetData Form
	            dashboards/:id/widgets/:id/data/:yy-mm
	            dashboards/:id/widgets/:id/descriptions   UpdateWidget Form



	            datasets
	            datasets/id
	            datasets/id/datapoints/1
	            datasets/id/datapoints-new

             */

            {/*<IndexRedirect to="" />*/}

            <Route path="" component={Dashboards}>
              /* / */
              <IndexRoute component={SplashPage} />

              <Route path="dashboards/:dashboard_id" component={Dashboard}>
                /* dashboards/:id */
                <IndexRoute component={DashboardPage} />

                <Route path="widgets">
                  /* dashboards/:id/widgets */
                  <IndexRoute component={DashboardWidgetsPage} />

                  <Route path=":widget_id" component={DashboardWidget}>
                    /* dashboards/:id/widgets/:id */
                    <IndexRoute component={DashboardWidgetPage} />
                    /* dashboards/:id/widgets/:id/data-new */
                    /* dashboards/:id/widgets/:id/data/:yy-mm */
                    /* dashboards/:id/widgets/:id/descriptions */
                    <Route path="data-new" component={DashboardWidgetDataPage} />
                    <Route path="data/descriptions" component={DashboardWidgetDescriptionsPage} />
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

