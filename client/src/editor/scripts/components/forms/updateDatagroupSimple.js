
import { FLAG_UDPATE_DATAGROUP } from './../../constants/flags';

import React, {PropTypes} from 'react';
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form';

import Textarea from './../fields/textarea';
import SubmitButton from './../submitButton';


const submit = (values, dispatch, props) => {
  return new Promise((resolve, reject) => {
    console.warn('did not actually do XHR', values);
    resolve();
  });
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


let UpdateDatagroupSimpleForm = ({
  isEditing, isSubmitting, onCancelSuccess, disableUpdate,
  ...rfProps
}) => {

  const disableEdit = FLAG_UDPATE_DATAGROUP === false;
  const { error, handleSubmit, pristine, valid } = rfProps;

  return (
    <form onSubmit={(e) => e.preventDefault()}>

      <Field component={Textarea}
             name='description' label='Fact text'
             fieldProps={{autoComplete: 'off', rows: 5, disabled:disableUpdate}} />

      <div>
        <SubmitButton type="submit"
                      btnText={isSubmitting ? 'Saving...' : 'Save'}
                      className='UIK-button btn btn-primary'
                      disabled={disableEdit || isSubmitting || pristine || !valid}
                      onClick={disableEdit || handleSubmit(submit.bind(this))} />
        <button type="cancel"
                className='UIK-button btn btn-link'
                disabled={disableEdit || !isEditing || isSubmitting}
                onClick={disableEdit || cancel.bind({}, rfProps, onCancelSuccess)}>Cancel</button>
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
