import * as flags from './../constants/flags';

import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { isObject } from 'lodash';
import { push } from 'react-router-redux';

import { getDashboardById } from './../reducers/dashboards';
import { getWidgetById } from './../reducers/widgets';
import {
  getDatagroupset,
  getDatagroupsetSlice
} from './../reducers/index';

import Breadcrumbs from './../components/breadcrumbs';
import Pagination from './../components/widgetPagePagination';
import * as uiActions from './../actions/ui';
import { getDashboardWidgetsUrl } from './../utils/urlHelpers';
import { getExpandedShortDate } from './../utils/humanisedDates';
import CreateDatagroupsetForm from './../components/forms/createDatagroupsetForm';
import UpdateDatagroupsetForm from './../components/forms/updateDatagroupsetForm';
import metadatas from './../data/widgetMetadata';
import TrafficLight from './../components/trafficLight';


const mapStateToProps = (state, ownProps) => {
  const dashboard = getDashboardById(state.dashboards, ownProps.params.dashboard_id);
  const widget = getWidgetById(state.widgets, ownProps.params.widget_id);
  const datagroupset = getDatagroupset(state, {widget});
  const datagroupsetSlice = getDatagroupsetSlice(datagroupset, ownProps.params.datagroup_key);
  return {
    dashboard,
    widget,
    datagroupsetSlice
  }
};
const mapDispatchToProps = dispatch => ({
  push: bindActionCreators(push, dispatch),
  actions: bindActionCreators(uiActions, dispatch)
});

class DashboardWidgetDatagroupTimeSeriesPage extends Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      metadata: {}
    };

    if (this.props.widget.type && this.props.widget.units) {
      let metadata = metadatas[this.props.widget.type][this.props.widget.units];
      if (metadata) {
        this.state.metadata = metadata;
      }
    }
  }

  onSubmitSuccess() {
    this.props.push(getDashboardWidgetsUrl(this.props.dashboard.id));
    this.props.actions.setAnchorToAtDashboardWidgets(this.props.widget.id);
  }

  render() {
    const canUpdate = flags.FLAG_UDPATE_DATAGROUP;
    const canCreate = flags.FLAG_CREATE_DATAGROUP;

    let {
      widget,
      dashboard,
      datagroupsetSlice
    } = this.props;

    let {
      metadata
    } = this.state;

    const isUpdateMode = Boolean(datagroupsetSlice.groups[0].datapoint);

    return (
      <div className="page page-dashboardwidgetdatagrouptimeseries">

        <div className="page__header">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-lg-8">

                <Breadcrumbs paths={[
                  {path: '/', name:'Manage Dashboards'},
                  {path: getDashboardWidgetsUrl(dashboard.id), name:`${dashboard.name}`},
                  {path: '', name:`${widget.name} - ${datagroupsetSlice.sliceKey}`}
                ]} />

                <div className="page__title">
                  <div className="page__title__left">
                    <h1>{metadata.label || widget.name}</h1>
                  </div>
                  <div className="page__title__right">
                    <TrafficLight lastUpdatedDate={datagroupsetSlice.sliceKey} />
                  </div>
                </div>

                {metadata.widget_help && <p className="title-description">{metadata.widget_help}</p>}

              </div>
            </div>
          </div>
        </div>


        <div className="container">
          <div className="page__body">
            <div className="row">
              <div className="col-xs-12 col-lg-8">

                <div className="timeseries-pagination">
                  <span className="timeseries-pagination__supp-title">{isUpdateMode ? 'View' : 'Add'} data for:</span>
                  <span className="timeseries-pagination__title">{getExpandedShortDate(datagroupsetSlice.sliceKey)}</span>
                  <Pagination prevKey={datagroupsetSlice.slicePrevKey}
                              nextKey={datagroupsetSlice.sliceNextKey}
                              widgetId={widget.id}
                              dashboardId={dashboard.id} />
                </div>


                {metadata.widget_form_help && <p>{metadata.widget_form_help}</p>}

                {isUpdateMode && <p>Last updated: {datagroupsetSlice.sliceLastUpdated}</p>}
                {isUpdateMode ?
                  <UpdateDatagroupsetForm formModel={datagroupsetSlice}
                                          canSubmit={canUpdate}
                                          formMetadata={metadata}
                                          onSubmitSuccess={this.onSubmitSuccess.bind(this)} /> :
                  <CreateDatagroupsetForm formModel={datagroupsetSlice}
                                          formMetadata={metadata}
                                          canSubmit={canCreate}
                                          onSubmitSuccess={this.onSubmitSuccess.bind(this)} />}
              </div>
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
