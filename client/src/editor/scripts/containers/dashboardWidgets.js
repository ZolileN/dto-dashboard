import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { getDatasetsByIds } from './../reducers/datasets';
import { getDatapointsByIds } from './../reducers/datapoints';


const mapStateToProps = ({datasets, datapoints}, ownProps) => {
  let widgets = ownProps.widgets;

  let widgetsDatasetIds = widgets.reduce((cur, next) => {
    return cur.concat(next.datasets);
  }, []);
  let datasets = getDatasetsByIds(datasets, widgetsDatasetIds);
  let datatpointIds = datasets.reduce((cur, next) => {
    return curr.concat(next.datapoints);
  }, []);

  return {
    dashboard: ownProps.dashboard,
    widgets,
    datasets,
    datapoints: getDatapointsByIds(datapoints, datatpointIds)
  }
};
const mapDispatchToProps = dispatch => ({});

class Dashboard extends Component {
  render() {
    return (
      <div>
        {React.cloneElement(this.props.children, {
          dashboard: this.props.dashboard,
          widgets: this.props.widgets,
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
