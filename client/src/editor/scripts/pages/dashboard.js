import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import Breadcrumbs from './../components/breadcrumbs';
import * as uiActions from './../actions/ui';
import UpdateDashboardForm from './../components/forms/updateDashboardForm';
import { getRequestKey } from './../actions/dashboard';
import { isPendingRequest } from './../reducers/requests';
import {
  getDashboardWidgetsUrl
} from './../utils/urlHelpers';


const mapStateToProps = ({ui, requests}, ownProps) => {
  let dashboard = ownProps.dashboard;
  let requestKey = getRequestKey(dashboard.id, 'update');
  return {
    dashboard,
    ui: ui.pageDashboard,
    isPendingRequest: isPendingRequest(requests, requestKey)
  };
};
const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(uiActions, dispatch)
});

class DashboardIndex extends Component {

  enterForm() {
    this.props.actions.editFormAtDashboardPage(true);
  }

  exitForm() {
    this.props.actions.editFormAtDashboardPage(false);
  }

  onSubmitSuccess() {
    this.exitForm();
  }

  componentWillUnmount() {
    if (this.props.ui.isEditing) {
      this.exitForm();
    }
  }

  render() {
    let {
      dashboard,
      ui,
      isPendingRequest
    } = this.props;

    return (
      <div className="page page-dashboard">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-lg-8">
              <div className="page__header">
                <Breadcrumbs paths={[
                  {path: '/dashboards', name:'Home'},
                  {path: getDashboardWidgetsUrl(dashboard.id), name:`${dashboard.name}`},
                  {path: '', name:`Edit dashboard information`}
                ]} />
                <h1 className="h4">Update Dashboards</h1>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-xs-12 col-lg-8">
              <button
                className="btn primary small"
                disabled={ui.isEditing}
                onClick={this.enterForm.bind(this)}>Edit</button>

              <UpdateDashboardForm
                formModel={dashboard}
                isEditing={ui.isEditing}
                isSubmitting={isPendingRequest}
                onSubmitSuccess={this.onSubmitSuccess.bind(this)}
                onCancelSuccess={this.exitForm.bind(this)} />
              <br />
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
)(DashboardIndex);

