import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import * as uiActions from './../actions/ui';
import { getDashboardWidgetsUrl } from './../utils/urlHelpers';
import Breadcrumbs from './../components/breadcrumbs';


const mapStateToProps = (store, ownProps) => {
  return {
    dashboard: ownProps.dashboard,
    widget: ownProps.widget
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
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-lg-8">
              <div className="page__header">
                <Breadcrumbs paths={[
                  {path: '/', name:'Home'},
                  {path: getDashboardWidgetsUrl(dashboard.id), name:`${dashboard.name}`},
                  {path: '', name:`Labels and descriptions`}
                ]} />
                <h1 className="h4">{widget.name}: Labels and descriptions</h1>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-xs-12 col-lg-8">
              DashboardWidgetDescriptions
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