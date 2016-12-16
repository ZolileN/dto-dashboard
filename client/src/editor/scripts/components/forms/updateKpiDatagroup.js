import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'
import { Field, reduxForm, SubmissionError } from 'redux-form';
import { isURL } from 'validator';

import Input from './../fields/input';
import Textarea from './../fields/textarea';
import SubmitButton from './../submitButton';


/**
 * @param props
 * @component
 */
let UpdateTimeSeriesDatagroup = ({
  isEditing, isSubmitting, onCancelSuccess, formModel,
  ...rfProps
}) => {

  const { error, handleSubmit, pristine, valid } = rfProps;

  return (
    <form onSubmit={(e) => e.preventDefault()}>

      <Field component={Input}
             type="number"  name="value[0]" label="datagroup[0].datasetName"
             optionProps={{infoText: `Leave blank to save as "No data"`}} />

      <Field component={Input}
             type="number"  name="value[1]" label="datagroup[1].datasetName"
             optionProps={{infoText: `Leave blank to save as "No data"`}} />

      <Field component={Input}
             type="number"  name="value[2]" label="datagroup[2].datasetName"
             optionProps={{infoText: `Leave blank to save as "No data"`}} />

      <Field component={Input}
             type="number"  name="value[3]" label="datagroup[3].datasetName"
             optionProps={{infoText: `Leave blank to save as "No data"`}} />

      <div>
        <SubmitButton type="submit"
                      btnText={isSubmitting ? 'Saving...' : 'Save'}
                      className='UIK-button btn btn-primary'
                      disabled={isSubmitting || pristine || !valid}
                      onClick={handleSubmit(submit.bind(this))} />
        <button type="cancel"
                className='UIK-button btn btn-link'
                disabled={!isEditing || isSubmitting}
                onClick={cancel.bind({}, rfProps, onCancelSuccess)}>Cancel</button>
      </div>
      <div className="form__help-block">
        {error && <strong>{error}</strong>}
      </div>
    </form>
  )
};

UpdateTimeSeriesDatagroup.defaultProps = {
  isEditing: true
};

UpdateTimeSeriesDatagroup.propTypes = {
  formModel: PropTypes.object.isRequired,
  // onSubmitSuccess: PropTypes.func.isRequired,
  // onCancelSuccess: PropTypes.func.isRequired,
  isEditing: PropTypes.bool
};


/**
 * @param values
 * @param dispatch
 * @returns {Promise} - this function *must* return Promise, until
 *    resolve is called, its' submitting prop will be true
 */
const submit = (values, dispatch) => {
  // return new Promise((resolve, reject) => {
  //   dispatch(updateDashboard(values)).then(
  //     (data) => { // promise success
  //       if (data) {
  //         return resolve();
  //       }
  //       // server error
  //       return reject({message: data.message});
  //     },
  //     (error) => { // promise failed
  //       return reject(error);
  //     },
  //   ).catch((error) => {
  //     throw new SubmissionError({_error: error.message || 'Submit failed!'});
  //   });
  // });
};

const validate = (values, props) => {
  const errors = {};

  if (!values.description) {
    errors.description = 'Required';
  }

  return errors;
};

const cancel = (rfProps, cb = ()=>{}) => {
  rfProps.reset(rfProps.form);
  cb();
};


UpdateTimeSeriesDatagroup = reduxForm({
  form: 'updateDashboard',
  validate,
  destroyOnUnmount: true
})(UpdateTimeSeriesDatagroup);

UpdateTimeSeriesDatagroup = connect(
  (state, ownProps) => ({
    enableReinitialize: true
  }),
  (dispatch, ownProps) => ({
    initialValues: ownProps.formModel
  })
)(UpdateTimeSeriesDatagroup);

export default UpdateTimeSeriesDatagroup;
