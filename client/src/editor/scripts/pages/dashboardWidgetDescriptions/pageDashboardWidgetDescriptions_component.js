import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';

import { getDashboardWidgetsUrl } from './../../utils/urlHelpers';
import Breadcrumbs from './../../../../_shared/components/uikit-breadcrumbs';


class DashboardWidgetDescriptionsPage extends Component {

  render() {
    let {
      widget,
      dashboard
    } = this.props;

    return (
      <div className="page page-dashboardwidgetdescriptions">

        <div className="page__header">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-lg-8">

                <Breadcrumbs paths={[
                    {path: '/', name:'Home'},
                    {path: getDashboardWidgetsUrl(dashboard.id), name:`${dashboard.name}`},
                    {path: '', name:`Labels and descriptions`}
                  ]} />

                <h1 className="h3">{widget.name}: Labels and descriptions</h1>

              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="page__body">
            <div className="row">
              <div className="col-xs-12 col-lg-8">
                DashboardWidgetDescriptions
              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default DashboardWidgetDescriptionsPage;
