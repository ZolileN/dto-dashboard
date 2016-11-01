import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import Breadcrumbs from './../components/breadcrumbs';
import * as uiActions from './../actions/ui';
import { getDashboardWidgetsUrl } from './../utils/urlHelpers';
import { getDatagroupForTimeSeries } from './../helpers/datagroup';
import UpdateTimeSeriesDatagroupForm from './../components/forms/updateTimeSeriesDatagroup';


const mapStateToProps = (store, ownProps) => {
  return {
    dashboard: ownProps.dashboard,
    widget: ownProps.widget,
    datagroup_key: ownProps.params.datagroup_key,
    datagroup: getDatagroupForTimeSeries(ownProps.widget, ownProps.datasets, ownProps.datapoints)
  }
};
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(uiActions, dispatch)
});


class DashboardWidgetDatagroupTimeSeriesPage extends Component {

  render() {
    let {
      widget,
      dashboard,
      datagroup,
      datagroup_key
    } = this.props;

    return (
      <div className="page page-dashboardwidgetdatagrouptimeseries">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-lg-8">
              <div className="page__header">
                <Breadcrumbs paths={[
                  {path: '/', name:'Home'},
                  {path: getDashboardWidgetsUrl(dashboard.id), name:`${dashboard.name}`},
                  {path: '', name:`${datagroup_key}`}
                ]} />
                <h1 className="h4">{widget.name}</h1>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-xs-12 col-lg-8">
              <UpdateTimeSeriesDatagroupForm formModel={datagroup} />
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
)(DashboardWidgetDatagroupTimeSeriesPage);
