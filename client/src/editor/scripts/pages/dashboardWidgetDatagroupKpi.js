import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import Breadcrumbs from './../components/breadcrumbs';
import * as uiActions from './../actions/ui';
import {
  groupByKpiWidgets
} from './../reducers/widgets';
import {
  getDashboardWidgetsUrl,
  getDashboardWidgetsDatagroupKpiUrl
} from './../utils/urlHelpers';
import {
  getKpiDatagroup,
  getNextDatagroupKey,
  getPreviousDatagroupKey,
  getLatestDatagroupKey
} from './../helpers/datagroup';
import {
  getExpandedShortDate
} from './../utils/humanisedDates';
// import UpdateKpiDatagroupForm from './../components/forms/updateTimeSeriesDatagroup'; // todo


const mapStateToProps = (store, ownProps) => {
  let kpiWidgets = groupByKpiWidgets(ownProps.widgets);
  return {
    dashboard: ownProps.dashboard,
    widgets: kpiWidgets,
    datagroup_key: ownProps.params.datagroup_key,
    datagroup: getKpiDatagroup(kpiWidgets, ownProps.datasets, ownProps.datapoints)
  }
};
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(uiActions, dispatch)
});


const Pagination = ({dashboard, datagroup_key}) => {

  let disableNext = false;

  let latestKey = getLatestDatagroupKey();
  let prevKey = getPreviousDatagroupKey(datagroup_key);

  let prevUrl = getDashboardWidgetsDatagroupKpiUrl(dashboard.id, prevKey);
  let nextUrl = getDashboardWidgetsDatagroupKpiUrl(dashboard.id, getNextDatagroupKey(datagroup_key));

  if (prevKey === latestKey) {
    disableNext = true;
  }

  return (
    <div>
      <Link to={prevUrl}>Left</Link>
      <Link to={nextUrl}
            disabled={disableNext}
            onClick={e => {if (disableNext) return e.preventDefault()}}>Right</Link>
    </div>
  )
};

class DashboardWidgetDatagroupKpiPage extends Component {

  render() {
    let {
      kpiWidgets,
      dashboard,
      datagroup,
      datagroup_key
    } = this.props;

    return (
      <div className="page page-dashboardwidgetsdatagroupkpi">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-lg-8">
              <div className="page__header">
                <Breadcrumbs paths={[
                  {path: '/', name:'Home'},
                  {path: getDashboardWidgetsUrl(dashboard.id), name:`${dashboard.name}`},
                  {path: '', name:`${datagroup_key}`}
                ]} />
                <h1 className="h4">Key Performance Indicators</h1>

                <div className="timeseries-pagination">
                  <span className="">Edit data for:</span>
                  <div>
                    <span className="">{getExpandedShortDate(datagroup_key)}</span>
                    <Pagination dashboard={dashboard} datagroup_key={datagroup_key} />
                  </div>
                </div>

              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-xs-12 col-lg-8">
              {/*<UpdateKpiDatagroupForm formModel={datagroup} />*/}
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
)(DashboardWidgetDatagroupKpiPage);
