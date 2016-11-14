import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import { getDashboardById } from './../reducers/dashboards';
import { getWidgetById } from './../reducers/widgets';

import * as uiActions from './../actions/ui';
import { getDashboardWidgetsUrl } from './../utils/urlHelpers';
import Breadcrumbs from './../components/breadcrumbs';


const mapStateToProps = (state, ownProps) => {
  let dashboard = getDashboardById(state.dashboards, ownProps.params.dashboard_id);
  let widget = getWidgetById(state.widgets, ownProps.params.widget_id);
  return {
    dashboard,
    widget
  }
};
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(uiActions, dispatch)
});


class DashboardWidgetDescriptionsPage extends Component {

  render() {
    let {
      widget,
      dashboard
    } = this.props;

    return (
      <div className="page page-dashboardwidgetdescriptions">

        <div className="page__header">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-lg-8">

                <Breadcrumbs paths={[
                    {path: '/', name:'Home'},
                    {path: getDashboardWidgetsUrl(dashboard.id), name:`${dashboard.name}`},
                    {path: '', name:`Labels and descriptions`}
                  ]} />

                <h1 className="h4">{widget.name}: Labels and descriptions</h1>

              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="page__body">
            <div className="row">
              <div className="col-xs-12 col-lg-8">
                DashboardWidgetDescriptions
              </div>
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
)(DashboardWidgetDescriptionsPage);
