import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRedirect } from 'react-router';

import Layout from './layout';

import Dashboards from './dashboards';
import DashboardWidgets from './dashboardWidgets';
import DashboardWidgetDatagroupSimple from './dashboardWidgetDatagroupSimple';
import DashboardWidgetDatagroupTimeseries from './dashboardWidgetDatagroupTimeseries';
// import DashboardWidgetDescriptions from './dashboardWidgetDescriptions';

import NoMatch from './noMatch';


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

            <IndexRedirect to="/dashboards" />

            <Route path="dashboards"
                   component={Dashboards} />
            <Route path="dashboards/:dashboard_id/widgets"
                   component={DashboardWidgets} />
            <Route path="dashboards/:dashboard_id/widgets/:widget_id/datagroup-simple"
                   component={DashboardWidgetDatagroupSimple} />
            <Route path="dashboards/:dashboard_id/widgets/:widget_id/datagroup-timeseries/:datagroup_key"
                   component={DashboardWidgetDatagroupTimeseries} />
            {/*<Route path="dashboards/:dashboard_id/widgets/:widget_id/descriptions"*/}
                   {/*component={DashboardWidgetDescriptions} />*/}

            <Route path="*" component={NoMatch} />

          </Route>
        </Router>
      </Provider>
    )
  }
};
