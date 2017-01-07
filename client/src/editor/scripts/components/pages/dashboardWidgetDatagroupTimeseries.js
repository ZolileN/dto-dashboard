import * as flags from './../../constants/flags';

import React, { Component } from 'react';

import Breadcrumbs from './../../../../_shared/scripts/components/uikit-components/breadcrumbs';
import Pagination from './../../components/widgetPagePagination';
import { getDashboardWidgetsUrl } from './../../utils/urlHelpers';
import { getHumanisedVeryShortDate } from './../../utils/humanisedDates';
import CreateDatagroupsetForm from './../../components/forms/createDatagroupset';
import UpdateDatagroupsetForm from './../../components/forms/updateDatagroupset';
import metadatas from './../../data/widgetMetadata';
import TrafficLight from './../../components/widgetTrafficLight';
import {FLAG_UDPATE_DATAGROUP} from './../../constants/flags';


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
  }

  onCancelSuccess() {
    this.props.push(getDashboardWidgetsUrl(this.props.dashboard.id));
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
                  {path: '', name:`${widget.name} - ${getHumanisedVeryShortDate(datagroupsetSlice.sliceKey)}`}
                ]} />

                <div className="page__title">
                  <div className="page__title__left">
                    <h1 className="h3">{metadata.label || widget.name}</h1>
                  </div>
                  <div className="page__title__right">
                    <TrafficLight recentKey={datagroupsetSlice.recentKey} />
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
                  <span className="timeseries-pagination__title">{getHumanisedVeryShortDate(datagroupsetSlice.sliceKey)}</span>
                  <Pagination prevKey={datagroupsetSlice.slicePrevKey}
                              nextKey={datagroupsetSlice.sliceNextKey}
                              widgetId={widget.id}
                              dashboardId={dashboard.id} />
                </div>

                <hr />

                {metadata.widget_form_help && <p className="page-dashboardwidgetdatagrouptimeseries__form-help">{metadata.widget_form_help}</p>}

                {isUpdateMode ?
                  <UpdateDatagroupsetForm formModel={datagroupsetSlice}
                                          canSubmit={canUpdate}
                                          disableUpdate={!FLAG_UDPATE_DATAGROUP}
                                          formMetadata={metadata}
                                          onSubmitSuccess={this.onSubmitSuccess.bind(this)} /> :
                  <CreateDatagroupsetForm formModel={datagroupsetSlice}
                                          formMetadata={metadata}
                                          canSubmit={canCreate}
                                          onSubmitSuccess={this.onSubmitSuccess.bind(this)}
                                          onCancelSuccess={this.onCancelSuccess.bind(this, datagroupsetSlice.widget.id)} />}
              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default DashboardWidgetDatagroupTimeSeriesPage;
