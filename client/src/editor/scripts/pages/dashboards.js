import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { getDashboardWidgetsUrl } from './../utils/urlHelpers';


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
      <p>{dashboard.description}</p>
      <Link to={getDashboardWidgetsUrl(dashboard.id)} className="btn primary">Edit Dashboard</Link>
    </article>
  )
};

const mapStateToProps = (store, ownProps) => ({
  dashboards: ownProps.dashboards
});
const mapDispatchToProps = dispatch => ({});

class DashboardsIndex extends Component {

  render() {
    let sortedDashboards = this.props.dashboards.sort((a,b) => {
      return new Date(b.ts).getTime() - new Date(a.ts).getTime();
    });

    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-lg-8">
            <div className="page page-dashboards">
              <div className="page__header">
                <h1 className="h4">Manage Dashboards</h1>
              </div>
              <DashboardItems dashboards={sortedDashboards} />
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
)(DashboardsIndex);
