import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import * as uiActions from './../actions/ui';
import { getDatapointsById } from './../reducers/datapoints';
import UpdateDatasetForm from './../components/forms/update-dataset-form';


const mapStateToProps = ({datapoints, ui}, ownProps) => {
  let dataset = ownProps.dataset;
  return {
    dataset,
    datapoints: getDatapointsById(datapoints, dataset.datapoints),
    ui: ui.pageDataset
  }
};
const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(uiActions, dispatch)
  }
};


class DatasetIndex extends Component {

  enterForm() {
    this.props.actions.editFormAtDatasetPage(true);
  }

  exitForm() {
    this.props.actions.editFormAtDatasetPage(false);
  }

  onSubmitSuccess() {
    this.exitForm();
  }

  render() {
    let { dataset, datapoints, ui } = this.props;
    return (
      <div>
        <h1>Dataset: {dataset.name}</h1>

        <button
          className="btn--primary btn--small"
          disabled={ui.isEditing}
          onClick={this.enterForm.bind(this)}>Edit</button>

        <UpdateDatasetForm
          formModel={dataset}
          isEditing={ui.isEditing}
          onSubmitSuccess={this.onSubmitSuccess.bind(this)}
          onCancelSuccess={this.exitForm.bind(this)} />

        <div>
          <h3>Datapoints</h3>

          <Link to={`/datasets/${dataset.id}/datapoints-new`}>Create new</Link>


          <table>
            <thead>
            <tr>
              <td>ID</td><td>Label</td><td colSpan="2">Value</td>
            </tr>
            </thead>
            <tbody>
            {datapoints.map((d, idx) => (
              <tr key={idx}>
                <td>{d.id}</td><td>{d.label}</td><td>{d.value}</td><td><Link to={`/datasets/${dataset.id}/datapoints/${d.id}`}>Edit</Link></td>
              </tr>
            ))}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DatasetIndex);