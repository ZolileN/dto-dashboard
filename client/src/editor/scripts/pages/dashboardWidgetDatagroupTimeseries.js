import * as flags from './../constants/flags';

import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import { getDashboardById } from './../reducers/dashboards';
import { getWidgetById } from './../reducers/widgets';
import {
  getDatagroupset,
  getCurrentDatagroupsetSlice
} from './../reducers/index';

import Breadcrumbs from './../components/breadcrumbs';
import Pagination, { makeLinks } from './../components/widgetPagePagination';
import * as uiActions from './../actions/ui';
import { getDashboardWidgetsUrl } from './../utils/urlHelpers';
import { getExpandedShortDate } from './../utils/humanisedDates';
import UpdateDatagroupsetForm from './../components/forms/UpdateDatagroupsetForm';


const mapStateToProps = (state, ownProps) => {
  const dashboard = getDashboardById(state.dashboards, ownProps.params.dashboard_id);
  const widget = getWidgetById(state.widgets, ownProps.params.widget_id);
  const datagroupset = getDatagroupset(state, {widget});
  const currentDatagroupset = getCurrentDatagroupsetSlice(datagroupset, ownProps.params.datagroup_key);
  return {
    dashboard,
    widget,
    datagroupset: currentDatagroupset
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
                  {path: '', name:`${widget.name} - ${datagroupset.currentKey}`}
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
              <p>Last updated: {datagroupset.recentLastUpdated}</p>
              <UpdateDatagroupsetForm formModel={datagroupset}
                                      canUpdate={canUpdate}
                                      canCreate={canCreate} />
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
