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
let UpdateCrossSectionalDatagroup = ({
  isEditing, isSubmitting, onCancelSuccess,
  ...rfProps
}) => {

  const { error, handleSubmit, pristine, valid } = rfProps;

  return (
    <form onSubmit={(e) => e.preventDefault()}>

      fields
      {/*<Field component={Textarea}*/}
             {/*name='description' label='Fact text' />*/}

      <div>
        <SubmitButton type="submit"
                      btnText={isSubmitting ? 'Saving...' : 'Save'}
                      className='btn primary'
                      disabled={isSubmitting || pristine || !valid}
                      onClick={handleSubmit(submit.bind(this))} />
        <button type="cancel"
                className='btn primary-link'
                disabled={!isEditing || isSubmitting}
                onClick={cancel.bind({}, rfProps, onCancelSuccess)}>Cancel</button>
      </div>
      <div className="form__help-block">
        {error && <strong>{error}</strong>}
      </div>
    </form>
  )
};

UpdateCrossSectionalDatagroup.defaultProps = {
  isEditing: true
};

UpdateCrossSectionalDatagroup.propTypes = {
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


UpdateCrossSectionalDatagroup = reduxForm({
  form: 'updateDashboard',
  validate,
  destroyOnUnmount: true
})(UpdateCrossSectionalDatagroup);

UpdateCrossSectionalDatagroup = connect(
  (state, ownProps) => ({
    enableReinitialize: true
  }),
  (dispatch, ownProps) => ({
    initialValues: ownProps.formModel
  })
)(UpdateCrossSectionalDatagroup);

export default UpdateCrossSectionalDatagroup;
