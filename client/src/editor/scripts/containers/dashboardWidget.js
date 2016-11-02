import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { getWidgetById } from './../reducers/widgets';

import { getDatasetsByIds } from './../reducers/datasets';
import { getDatapointsByDatasets } from './../reducers/datapoints';


const mapStateToProps = (store, ownProps) => {
  let widget = getWidgetById(ownProps.widgets, ownProps.params.widget_id);
  let datasets = getDatasetsByIds(ownProps.datasets, widget.datasets);
  return {
    dashboard: ownProps.dashboard,
    widget,
    datasets,
    datapoints: getDatapointsByDatasets(ownProps.datapoints, datasets)
  }
};
const mapDispatchToProps = dispatch => ({});

class Dashboard extends Component {
  render() {
    return (
      <div>
        {React.cloneElement(this.props.children, {
          dashboard: this.props.dashboard,
          widget: this.props.widget,
          datasets: this.props.datasets,
          datapoints: this.props.datapoints
        })}
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
