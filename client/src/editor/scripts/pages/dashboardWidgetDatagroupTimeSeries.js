import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import Breadcrumbs from './../components/breadcrumbs';
import Pagination, { makeLinksTimeSeriesType } from './../components/widgetPagePagination';
import * as uiActions from './../actions/ui';
import { getDashboardWidgetsUrl } from './../utils/urlHelpers';
import { getExpandedShortDate } from './../utils/humanisedDates';
import {
  getDatagroupsets,
  getCurrentDatagroupsetSlice
} from './../helpers/datagroup';
// import UpdateDatagroupFormGroup from './../components/forms/UpdateDatagroup';


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
                    <Pagination links={makeLinksTimeSeriesType(datagroupset, dashboard.id, widget.id)} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-xs-12 col-lg-8">

              <p>Last updated: {datagroupset.groups[0].dataset.updated_at}</p>

              {datagroupset.groups.map((g, idx) => {
                return (
                  <p key={idx}>
                    <span className="label">{g.dataset.label}</span>
                    <span className="label">{g.dataset.name}</span>
                    <span className="value">{g.datapoint.value || 'No data'}</span>
                  </p>
                )
              })}

              {/*<UpdateDatagroupFormGroup datagroupset={datagroupset} />*/}
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
