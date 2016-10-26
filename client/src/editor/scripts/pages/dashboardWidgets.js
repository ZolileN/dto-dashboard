import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import * as uiActions from './../actions/ui';
import WidgetItem from './../components/widgetItem';
import { getEditDashboardUrl } from './../utils/urlHelpers';


const mapStateToProps = (store, ownProps) => {
  return {
    dashboard: ownProps.dashboard,
    widgets: ownProps.widgets
  }
};
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(uiActions, dispatch)
});


class PageDashboardWidgets extends Component {

  render() {
    let {
      widgets,
      dashboard
    } = this.props;

    return (
      <div className="container">

        <div className="row">
          <div className="col-xs-12 col-lg-8">
            <span>Update Dashboard</span>
            <hr />
            <h1>{dashboard.name}</h1>
            <p>{dashboard.description}</p>
            <Link to={getEditDashboardUrl(dashboard.id)}>Edit dashboard overview</Link>
          </div>
        </div>

        <div className="row">
          <div className="col-xs-12 col-lg-8">
            {widgets.map((w, idx) => <WidgetItem key={idx} dashboard={dashboard} widget={w} />)}
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

