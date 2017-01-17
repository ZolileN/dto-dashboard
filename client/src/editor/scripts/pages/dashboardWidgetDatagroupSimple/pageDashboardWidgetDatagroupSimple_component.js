import React, { Component } from 'react';

import Breadcrumbs from './../../../../_shared/components/uikit-breadcrumbs';
import {getDashboardWidgetsUrl} from './../../utils/formatUrl';
import UpdateDatagroupSimpleForm from './../../components/forms/updateDatagroupSimple';
import metadatas from './../../data/widgetMetadata';


class DashboardWidgetDatagroupSimplePage extends Component {

  constructor(props, context) {
    super(props, context);
    const {widget} = props;
    this.setState('metadata', {});
    if (widget.type && widget.units) {
      this.setState('metadata', metadatas[widget.type][widget.units]);
    }
  }

  render() {
    let {
      widget,
      dashboard
    } = this.props;

    let {metadata} = this.state;

    return (
      <div className="page page-dashboardwidgetdatagroupsimple">

        <div className="page__header">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-lg-8">
                <Breadcrumbs paths={[
                  {path: '/', name:'Manage Dashboards'},
                  {path: getDashboardWidgetsUrl(dashboard.id), name:`${dashboard.name}`},
                  {path: '', name:`Fact: ${widget.name}`}
                ]} />
                <h1 className="h3">{widget.name}</h1>
                {metadata.widget_help && <p className="title-description">{metadata.widget_help}</p>}
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="page__body">
            <div className="row">
              <div className="col-xs-12 col-lg-8">
                <UpdateDatagroupSimpleForm formModel={widget} formMetadata={metadata} />
              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default DashboardWidgetDatagroupSimplePage;
