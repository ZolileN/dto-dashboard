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
  getDashboardWidgetDatagroupTimeSeriesUrl
} from './../utils/urlHelpers';
import {
  getDatagroupForKpi,
  getNextDatagroupKey,
  getPreviousDatagroupKey,
  hasNextDatagroup
} from './../helpers/datagroup';
// import UpdateKpiDatagroupForm from './../components/forms/updateTimeSeriesDatagroup'; // todo


const mapStateToProps = (store, ownProps) => {
  let heroWidget = groupByHeroWidget(ownProps.widget);
  let kpiWidgets = groupByKpiWidgets(ownProps.widget);
  return {
    dashboard: ownProps.dashboard,
    heroWidget,
    kpiWidgets,
    datagroup_key: ownProps.params.datagroup_key,
    datagroup: getDatagroupForKpi(kpiWidgets, ownProps.datasets, ownProps.datapoints)
  }
};
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(uiActions, dispatch)
});


class DashboardWidgetDatagroupKpiPage extends Component {

  render() {
    let {
      heroWidget,
      kpiWidgets,
      dashboard,
      datagroup,
      datagroup_key
    } = this.props;

    let firstKpiWidget = kpiWidgets[0];

    let prevUrl = getDashboardWidgetDatagroupTimeSeriesUrl(dashboard.id, firstKpiWidget.id, getPreviousDatagroupKey(datagroup_key));
    let nextUrl = getDashboardWidgetDatagroupTimeSeriesUrl(dashboard.id, firstKpiWidget.id, getNextDatagroupKey(datagroup_key));

    return (
      <div className="page page-dashboardwidgetdatagroupkpi">
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

                <div className="timeseries-pagination">
                  <span className="">Edit data for:</span>
                  <div>
                    <span className="">{datagroup_key}</span>
                    <div>
                      <Link to={prevUrl}>Left</Link>
                      <Link to={nextUrl} disabled={hasNextDatagroup(datagroup.key)}>Right</Link>
                    </div>
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
