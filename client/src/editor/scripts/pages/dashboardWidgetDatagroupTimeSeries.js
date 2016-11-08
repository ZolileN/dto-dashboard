import * as flags from './../constants/flags';

import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import Breadcrumbs from './../components/breadcrumbs';
import Pagination, { makeLinks } from './../components/widgetPagePagination';
import * as uiActions from './../actions/ui';
import { getDashboardWidgetsUrl } from './../utils/urlHelpers';
import { getExpandedShortDate } from './../utils/humanisedDates';
import {
  getDatagroupsets,
  getCurrentDatagroupsetSlice
} from './../helpers/datagroup';
import UpdateDatagroupsetForm from './../components/forms/UpdateDatagroupsetForm';


const mapStateToProps = (store, ownProps) => {
  let datagroupsets = getDatagroupsets(ownProps.widget, ownProps.datasets, ownProps.datapoints);
  let datagroupset = datagroupsets[0];
  let currentDatagroups = getCurrentDatagroupsetSlice(datagroupset, ownProps.params.datagroup_key);
  return {
    dashboard: ownProps.dashboard,
    widget: ownProps.widget,
    datagroupset: currentDatagroups
  }
};
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(uiActions, dispatch)
});


class DashboardWidgetDatagroupTimeSeriesPage extends Component {

  render() {

    const canUpdate = flags.FLAG_UDPATE_DATAGROUP;
    const canCreate = flags.FLAG_CREATE_DATAGROUP;

    let {
      widget,
      dashboard,
      datagroupset
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
                  {path: '', name:`${datagroupset.currentKey}`}
                ]} />
                <h1 className="h4">{widget.name}</h1>

                <div className="timeseries-pagination">
                  <span className="">Edit data for:</span>
                  <div>
                    <span className="">{getExpandedShortDate(datagroupset.currentKey)}</span>
                    <Pagination links={makeLinks(datagroupset, dashboard.id, widget.id)} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-xs-12 col-lg-8">
              <p>Last updated: {datagroupset.groups[0].dataset.updated_at}</p>
              <UpdateDatagroupsetForm formModel={datagroupset} canUpdate={canUpdate} canCreate={canCreate} />
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
