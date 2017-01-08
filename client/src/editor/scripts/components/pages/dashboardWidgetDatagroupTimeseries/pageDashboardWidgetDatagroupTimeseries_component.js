
import * as flags from './../../../constants/flags';

import React  from 'react';

import Breadcrumbs from './../../../../../_shared/scripts/components/uikit-components/breadcrumbs';
import Pagination from './../../widgetPagePagination';
import {getHumanisedVeryShortDate} from './../../../utils/humanisedDates';
import CreateDatagroupsetForm from './../../forms/createDatagroupset';
import UpdateDatagroupsetForm from './../../forms/updateDatagroupset';
import metadatas from './../../../data/widgetMetadata';
import TrafficLight from './../../widgetTrafficLight';
import {getDashboardWidgetsUrl} from './../../../utils/urlHelpers';


const DashboardWidgetDatagroupTimeSeriesPage = (props) => {
  const canUpdate = flags.FLAG_UDPATE_DATAGROUP;
  const canCreate = flags.FLAG_CREATE_DATAGROUP;
  const {
    widget,
    dashboard,
    datagroupsetSlice
  } = props;

  const isUpdateMode = Boolean(datagroupsetSlice.groups[0].datapoint);

  let metadata;

  if (widget.type && widget.units) {
    metadata = metadatas[widget.type][widget.units];
  }

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
                                        formMetadata={metadata}
                                        canSubmit={canUpdate}
                                        disableUpdate={!canUpdate} /> :
                <CreateDatagroupsetForm formModel={datagroupsetSlice}
                                        formMetadata={metadata}
                                        canSubmit={canCreate}
                                        dashboard_id={dashboard.id} />}
            </div>
          </div>
        </div>
      </div>

    </div>
  )
};

export default DashboardWidgetDatagroupTimeSeriesPage;
