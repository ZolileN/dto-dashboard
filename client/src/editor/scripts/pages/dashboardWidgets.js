import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import * as uiActions from './../actions/ui';
import Breadcrumbs from './../components/breadcrumbs';
import KpiWidgetItem from './../components/kpiWidgetItem';
import WidgetItem from './../components/widgetItem';
import {
  filterKpiWidgets,
  filterBelowTheLineWidgets
} from './../reducers/widgets';
import {
  getDashboardUrl,
  getDashboardWidgetDataCreateUrl,
  getDashboardWidgetDataUpdateUrl,
  getDashboardWidgetDescriptionsUrl
} from './../utils/urlHelpers';


const mapStateToProps = ({}, ownProps) => {
  return {
    dashboard: ownProps.dashboard,
    kpiWidgets: filterKpiWidgets(ownProps.widgets),
    btlWidgets: filterBelowTheLineWidgets(ownProps.widgets)
  }
};
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(uiActions, dispatch)
});


class PageDashboardWidgets extends Component {

  render() {
    let {
      kpiWidgets,
      btlWidgets,
      dashboard
    } = this.props;


    return (
      <div className="container">

        <div className="row">
          <div className="col-xs-12 col-lg-8">
            <Breadcrumbs paths={[
              {path:'/', name:'Home'},
              {path:getDashboardUrl(dashboard.id), name:`${dashboard.name}`}
            ]} />

            <span>Update Dashboard</span>
            <hr />
            <h1>{dashboard.name}</h1>
            <p>{dashboard.description}</p>
            <Link to={getDashboardUrl(dashboard.id)}>Edit dashboard overview</Link>
          </div>
        </div>


        <div className="row">
          <div className="col-xs-12 col-lg-8">
            <KpiWidgetItem dashboard={dashboard}
                           widgets={kpiWidgets} />
            {btlWidgets.map((w, idx) => {
              let dateHash = '16-10'; // todo

              return (
                <WidgetItem key={idx}
                            addDataUrl={getDashboardWidgetDataCreateUrl(dashboard.id, w.id)}
                            editDataUrl={getDashboardWidgetDataUpdateUrl(dashboard.id, w.id, dateHash)}
                            editDescriptionsUrl={getDashboardWidgetDescriptionsUrl(dashboard.id, w.id)}
                            dashboard={dashboard}
                            widget={w} />
              )
            })}
          </div>
        </div>

      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PageDashboardWidgets);

