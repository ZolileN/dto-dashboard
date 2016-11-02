import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import Breadcrumbs from './../components/breadcrumbs';
import * as uiActions from './../actions/ui';
import Pagination, { makeLinksKpiType } from './../components/widgetPagePagination';
import { groupByKpiWidgets } from './../reducers/widgets';
import { getDashboardWidgetsUrl } from './../utils/urlHelpers';
import { getKpiDatagroup } from './../helpers/datagroup';
import { getExpandedShortDate } from './../utils/humanisedDates';
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
                    <Pagination dashboard={dashboard}
                                datagroup_key={datagroup_key}
                                links={makeLinksKpiType(datagroup_key, dashboard.id)} />
                  </div>
                </div>


                {datagroup.head.map(h => {
                  return (
                    <p><span className="label">{h.datasetName}</span><span className="value">{h.value}</span></p>
                  )
                })};

                <UpdateKpiDatagroupForm formModel={datagroup} />

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
