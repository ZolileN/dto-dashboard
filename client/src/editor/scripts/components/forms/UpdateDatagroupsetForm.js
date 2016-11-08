import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'
import { Field, FieldArray, reduxForm, SubmissionError } from 'redux-form';

import DatagroupsetInput from './../fields/datagroupsetInput';
import InputHidden from './../fields/inputHidden';


let UpdateDatagroupsetForm = ({
  canUpdate, canCreate, formModel,
  ...rfProps
}) => {

  const { error, handleSubmit, pristine, valid } = rfProps;

  const notDisabled = canCreate && !formModel.groups[0].datapoint.value;
  const disabled = !notDisabled;

  return (
    <form onSubmit={e => e.preventDefault()}>
      <FieldArray name="groups" component={renderFields} props={{
        models:formModel.groups,
        canUpdate,
        canCreate,
        disabled
      }} />
      <div>
        <button type="submit"
                className="btn primary"
                disabled={disabled}
                onClick={handleSubmit(submit.bind(this))}>Publish</button>
        <button type="cancel"
                className='btn primary-link'
                disabled={disabled}
                onClick={cancel.bind({}, rfProps)}>Cancel</button>
      </div>
      <div className="form__help-block">
        {error && <strong>{error}</strong>}
      </div>
    </form>
  )
};

const renderFields = ({fields, models, canUpdate, canCreate, disabled}) => {
  return (
    <div>
      {fields.map((member, idx) => {
        return (
          <fieldset key={idx}>
            <Field name={`${member}.dataset.id`}
                   component={InputHidden} />
            <Field name={`${member}.datapoint.value`}
                   label={models[idx].dataset.label}
                   component={DatagroupsetInput}
                   fieldProps={{disabled}}
                   optionProps={{canUpdate, canCreate}} />
          </fieldset>
        )
      })}
    </div>
  )
};


const submit = (values, dispatch, props) => { // todo

  debugger

  // x length
  // dataset.id
  // datapoint.value
  // datapoint.ts

  return Promise.resolve();
};

const validate = (values, props) => {   // todo - validate
  const errors = {};
  return errors;
};

const cancel = (rfProps, cb) => {
  rfProps.reset();
  if (cb) cb();
};


UpdateDatagroupsetForm = reduxForm({
  form: 'CreateUpdateDatagroupsetForm',
  validate,
  destroyOnUnmount: false
})(UpdateDatagroupsetForm);

UpdateDatagroupsetForm = connect(
  (state, ownProps) => ({
    enableReinitialize: true
  }),
  (dispatch, ownProps) => ({
    initialValues: ownProps.formModel
  })
)(UpdateDatagroupsetForm);

export default UpdateDatagroupsetForm
