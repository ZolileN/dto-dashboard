import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import { getDashboardById } from './../reducers/dashboards';
import { getWidgetById } from './../reducers/widgets';
import { getDatasetsByIds } from './../reducers/datasets';
import { getDatapointsByDatasets } from './../reducers/datapoints';
import { isPendingRequest } from './../reducers/requests';

import Breadcrumbs from './../components/breadcrumbs';
import * as uiAppActions from './../actions/uiApp';
import UpdateWidgetForm from './../components/forms/updateWidgetForm';
import { getRequestKey } from './../actions/widget';


const mapStateToProps = (state, ownProps) => {
  let dashboard = getDashboardById(state.dashboards, ownProps.params.dashboard_id);
  let widget = getWidgetById(state.widgets, ownProps.params.widget_id);
  let datasets = getDatasetsByIds(state.datasets, widget.datasets);
  let datapoints = getDatapointsByDatasets(state.datapoints, datasets);
  let requestKey = getRequestKey(widget.id, 'update');
  return {
    dashboard,
    widget,
    datasets,
    datapoints,
    ui: state.ui.pageDashboardWidget,
    isPendingRequest: isPendingRequest(state.requests, requestKey)
  }
};
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(uiAppActions, dispatch)
});


class PageDashboardWidget extends Component {

  enterForm() {
    this.props.actions.editFormAtDashboardWidgetPage(true);
  }

  exitForm() {
    this.props.actions.editFormAtDashboardWidgetPage(false);
  }

  onSubmitSuccess() {
    this.exitForm();
  }

  componentWillUnmount() {
    if (this.props.ui.isEditing) {
      this.exitForm();
    }
  }

  render() {
    let {
      widget,
      dashboard,
      datasets,
      ui,
      isPendingRequest
    } = this.props;

    let sortedDatasets = datasets.sort((a,b) => {
      return new Date(b.ts).getTime() - new Date(a.ts).getTime();
    });

    let editDatasetsList = (datasets) => {
      return (
        <table className="content-table">
          <thead>
          <tr>
            <td>ID</td><td>Name</td>
          </tr>
          </thead>
          <tbody>
          {datasets.map((d, idx) => (
            <tr key={idx}>
              <td>{d.id}</td><td>{d.name}</td><td><Link to={`/datasets/${d.id}`} className="UIK-link">Edit</Link></td>
            </tr>
          ))}
          </tbody>
        </table>
      )
    };

    return (
      <div className="page page-dashboardwidget">
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <Breadcrumbs paths={[
                {path:'/', name:'Home'},
                {path:`/dashboards/${dashboard.id}`, name:`${dashboard.name}`},
                {path:`/dashboards/${dashboard.id}/widgets/${widget.id}`, name:`${widget.name}`}
              ]} />
          </div>
        </div>

          <div className="row">
            <div className="col-xs-12">
              <h1>Dashboard: {dashboard.name}, Widget: {widget.name}</h1>
              <h2 className="h4">Datasets</h2>
            </div>
          </div>

          <div className="row">
            <div className="col-xs-12">
              {sortedDatasets.length ?
                editDatasetsList(sortedDatasets) :
                <p><em>No datasets</em></p>
              }
            </div>
            <br />
          </div>

          <div className="row">
            <div className="col-xs-12 col-lg-8">
              <button
                className="UIKIT-button btn btn-primary small"
                disabled={ui.isEditing}
                onClick={this.enterForm.bind(this)}>Edit</button>

              <UpdateWidgetForm
                formModel={widget}
                isEditing={ui.isEditing}
                isSubmitting={isPendingRequest}
                onSubmitSuccess={this.onSubmitSuccess.bind(this)}
                onCancelSuccess={this.exitForm.bind(this)}
                OPTIONS_WIDGET_TYPE={OPTIONS_WIDGET_TYPE}
                OPTIONS_WIDGET_UNITS={OPTIONS_WIDGET_UNITS}
              />
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
)(PageDashboardWidget);

