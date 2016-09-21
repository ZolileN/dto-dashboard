import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { push } from 'react-router-redux';

import * as uiActions from './../actions/ui';
import { getDatapointById } from './../reducers/datapoints';
import UpdateDatapointForm from './../components/forms/update-datapoint-form';


const mapStateToProps = ({datapoints, ui}, ownProps) => {
  return {
    ui: ui.pageDatasetDatapoint,
    dataset: ownProps.dataset,
    datapoint: getDatapointById(datapoints, ownProps.params.datapoint_id)
  }
};
const mapDispatchToProps = dispatch => {
  return {
    push: bindActionCreators(push, dispatch),
    actions: bindActionCreators(uiActions, dispatch)
  }
};

class DatasetDatapointPage extends Component {

  enterForm() {
    this.props.actions.editFormAtDatasetDatapointPage(true);
  }

  exitForm() {
    this.props.actions.editFormAtDatasetDatapointPage(false);
  }

  onSubmitSuccess() {
    this.exitForm();
    this.props.push(`/datasets/${this.props.dataset.id}`);
  }

  render() {
    let { datapoint, ui } = this.props;
    return (
      <div>
        <h1>Dataset Datapoint</h1>

        <button
          className="btn--primary btn--small"
          disabled={ui.isEditing}
          onClick={this.enterForm.bind(this)}>Edit</button>

        <UpdateDatapointForm
          formModel={datapoint}
          isEditing={ui.isEditing}
          onSubmitSuccess={this.onSubmitSuccess.bind(this)}
          onCancelSuccess={this.exitForm.bind(this)} />

      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DatasetDatapointPage);