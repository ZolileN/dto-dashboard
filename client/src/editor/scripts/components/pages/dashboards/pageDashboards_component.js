
import React, { Component } from 'react';
import { Link } from 'react-router';

import {
  getServiceDashboardUrl,
  getDashboardWidgetsUrl
} from './../../../utils/urlHelpers';
import Breadcrumbs from './../../../../../_shared/scripts/components/uikit-components/breadcrumbs';


const DashboardItems = ({dashboards}) => {
  return (
    <section className="dashboard-list">
      {dashboards.length ?
        dashboards.map((d, idx) => {
          return <DashboardItem key={idx} dashboard={d} />
        }) :
        <p>No dashboards</p>
      }
    </section>
  )
};

const DashboardItem = ({dashboard}) => {
  return (
    <article className="dashboard-list__item">
      <h1 className="h5">{dashboard.name}</h1>
      <span className="link-wrap"><Link to={getDashboardWidgetsUrl(dashboard.id)} className="btn btn-primary">Edit Dashboard</Link></span>
      <span className="link-wrap"><a href={getServiceDashboardUrl(dashboard.id, dashboard.name)} className="UIK-link" target="blank" rel="external">View service dashboard</a></span>
    </article>
  )
};


class DashboardsIndex extends Component {

  render() {
    let sortedDashboards = this.props.dashboards.sort((a,b) => {
      return new Date(b.ts).getTime() - new Date(a.ts).getTime();
    });

    return (
      <div className="page page-dashboards">

        <div className="page__header">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-lg-8">

                <Breadcrumbs paths={[
                  {path:'', name:'Manage Dashboards'}
                ]} />

                <h1 className="h3">Manage Dashboards</h1>

              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="page__body">
            <div className="row">
              <div className="col-xs-12 col-lg-8">
                <DashboardItems dashboards={sortedDashboards} />
              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default DashboardsIndex;
