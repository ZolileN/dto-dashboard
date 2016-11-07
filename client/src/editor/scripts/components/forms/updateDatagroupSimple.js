import { FLAG_CAN_UDPATE_DATAGROUP } from './../../constants/flags';

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'
import { Field, reduxForm, SubmissionError } from 'redux-form';
import { isURL } from 'validator';

import Textarea from './../fields/textarea';
import SubmitButton from './../submitButton';


/**
 * @param props
 * @component
 */
let UpdateDatagroupSimpleForm = ({
  isEditing, isSubmitting, onCancelSuccess,
  ...rfProps
}) => {

  const disableUpdate = !FLAG_CAN_UDPATE_DATAGROUP;
  const { error, handleSubmit, pristine, valid } = rfProps;

  return (
    <form onSubmit={(e) => e.preventDefault()}>

      <Field component={Textarea}
             name='description' label='Fact text'
             fieldProps={{autoComplete: 'off', rows: 5, disabled:disableUpdate}} />

      <div>
        <SubmitButton type="submit"
                      btnText={isSubmitting ? 'Saving...' : 'Save'}
                      className='btn primary'
                      disabled={disableUpdate || isSubmitting || pristine || !valid}
                      onClick={disableUpdate || handleSubmit(submit.bind(this))} />
        <button type="cancel"
                className='btn primary-link'
                disabled={disableUpdate || !isEditing || isSubmitting}
                onClick={disableUpdate || cancel.bind({}, rfProps, onCancelSuccess)}>Cancel</button>
      </div>
      <div className="form__help-block">
        {error && <strong>{error}</strong>}
      </div>
    </form>
  )
};

UpdateDatagroupSimpleForm.defaultProps = {
  isEditing: true
};

UpdateDatagroupSimpleForm.propTypes = {
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


UpdateDatagroupSimpleForm = reduxForm({
  form: 'updateDashboard',
  validate,
  destroyOnUnmount: true
})(UpdateDatagroupSimpleForm);

UpdateDatagroupSimpleForm = connect(
  (state, ownProps) => ({
    enableReinitialize: true
  }),
  (dispatch, ownProps) => ({
    initialValues: ownProps.formModel
  })
)(UpdateDatagroupSimpleForm);

export default UpdateDatagroupSimpleForm;
