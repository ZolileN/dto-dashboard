import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRedirect, IndexRoute } from 'react-router';

import Layout from './layout';

import Dashboard from './dashboard';
import Dashboards from './dashboards';
import Dataset from './dataset';

import DashboardsPage from './../pages/dashboards';
import DashboardPage from './../pages/dashboard';
import DashboardWidgetPage from './../pages/dashboardWidget';
import DatasetPage from './../pages/dataset';
import DatasetDatapointPage from './../pages/datasetDatapoint';
import DatasetDatapointCreatePage from './../pages/datasetDatapointCreate';

import NoMatch from './../pages/no-match';


export default class Root extends Component {

  static propTypes = {
    store: PropTypes.object,
    history: PropTypes.object
  };

  render() {
    let { store, history } = this.props;
    return (
      <Provider store={store}>
        <Router history={history}>
          <Route path="/" component={Layout}>

            /*

             dashboards
             dashboards/1
             dashboards/1/widgets/1
             datasets/id
             datasets/id/datapoints/1
             datasets/id/datapoints/new

             */

            <IndexRedirect to="dashboards" />

            <Route path="dashboards" component={Dashboards}>
              <IndexRoute component={DashboardsPage} />
              <Route path=":dashboard_id" component={Dashboard}>
                <IndexRoute component={DashboardPage} />
                <Route path="widgets/:widget_id" component={DashboardWidgetPage} />
              </Route>
            </Route>

            <Route path="datasets/:dataset_id" component={Dataset}>
              <IndexRoute component={DatasetPage} />
              <Route path="datapoints/:datapoint_id" component={DatasetDatapointPage} />
              <Route path="datapoints-new" component={DatasetDatapointCreatePage} />
            </Route>

            <Route path="*" component={NoMatch} />

          </Route>
        </Router>
      </Provider>
    )
  }
};
