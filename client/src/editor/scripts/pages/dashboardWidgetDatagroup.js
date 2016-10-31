import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import * as uiActions from './../actions/ui';
import { computeLabel } from './../reducers/datapoints';
import { getDashboardUrl } from './../utils/urlHelpers';


const mapStateToProps = (store, ownProps) => {
  return {
    dashboard: ownProps.dashboard,
    widget: ownProps.widget,
    dateHash: ownProps.params.key
  }
};
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(uiActions, dispatch)
});

class DashboardWidgetDatagroupPage extends Component {

  render() {
    let {
      widget,
      dashboard,
      key
    } = this.props;

    return (
      <div className="page page-dashboardwidgetdata">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-lg-8">
              <div className="page__header">
                <Breadcrumbs paths={[
                  {path: '/', name:'Home'},
                  {path: getDashboardUrl(dashboard.id), name:`${dashboard.name}`},
                  {path: '', name:`Data group: ${key}`}
                ]} />
                <h1 className="h4">{widget.name}</h1>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-xs-12 col-lg-8">
              DashboardWidgetDatagroupPage
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
)(DashboardWidgetDatagroupPage);
