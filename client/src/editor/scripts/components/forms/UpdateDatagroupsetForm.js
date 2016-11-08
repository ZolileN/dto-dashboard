import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'
import { Field, FieldArray, reduxForm, SubmissionError } from 'redux-form';


let UpdateDatagroupsetForm = ({...rfProps}) => {
  let {formModel} = rfProps;
  return (
    <form>
      <FieldArray name="groups" component={renderFields} props={{groupsModels:formModel.groups}} />
      <div>
        <button type="submit">Save</button>
      </div>
    </form>
  )
};

const renderFields = ({fields, groupsModels}) => {
  return (
    <div>
      {fields.map((member, idx) => {
        return (
          <Field key={idx} name={`${member}.datapoint.value`}
                 label={groupsModels[idx].dataset.label}
                 component={renderField} />
        )
      })}
    </div>
  )
};

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} type={type} placeholder={label}/>
      {touched && error && <span>{error}</span>}
    </div>
  </div>
);


UpdateDatagroupsetForm = reduxForm({
  form: 'UpdateDatagroupsetForm',
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
