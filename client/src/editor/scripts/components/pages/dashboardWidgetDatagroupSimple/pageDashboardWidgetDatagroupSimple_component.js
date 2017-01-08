import React, { Component } from 'react';

import Breadcrumbs from './../../../../../_shared/scripts/components/uikit-components/breadcrumbs';
import {getDashboardWidgetsUrl} from './../../../utils/urlHelpers';
import UpdateDatagroupSimpleForm from './../../forms/updateDatagroupSimple';


class DashboardWidgetDatagroupSimplePage extends Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      metadata: {}
    };

    if (this.props.widget.type && this.props.widget.units) {
      try {
        let metadata = metadata[this.props.widget.type][this.props.widget.units];
        if (metadata) {
          this.setState('metadata', metadata);
        }
      } catch(e) {
        console.warn('no widget metadata for that permutation', this.props.widget.type, this.props.widget.units);
      }
    }
  }

  render() {
    let {
      widget,
      dashboard
    } = this.props;

    let {
      metadata
    } = this.state;

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
                <UpdateDatagroupSimpleForm formModel={widget} />
              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default DashboardWidgetDatagroupSimplePage;
