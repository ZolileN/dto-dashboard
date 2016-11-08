import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'
import { Field, FieldArray, reduxForm, SubmissionError } from 'redux-form';

import DatagroupsetInput from './../fields/datagroupsetInput';
import InputHidden from './../fields/inputHidden';


let UpdateDatagroupsetForm = ({
  canUpdate, canCreate, formModel,
  ...rfProps
}) => {

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
        <button type="submit" className="btn primary" disabled={disabled}>Publish</button>
        <button type="cancel" disabled={disabled}>Cancel</button>
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


UpdateDatagroupsetForm = reduxForm({
  form: 'CreateUpdateDatagroupsetForm',
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
