import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'
import { Field, FieldArray, reduxForm, SubmissionError } from 'redux-form';

import DatagroupsetInput from './../fields/datagroupsetInput';
import InputHidden from './../fields/inputHidden';
import { createDatagroupset } from './../../actions/datagroupset';
import { setToast } from './../../actions/toast';
import { getHumanisedMonth } from './../../utils/humanisedDates';


let CreateDatagroupsetForm = ({
  canSubmit, formModel,
  ...rfProps
}) => {

  const { error, handleSubmit, pristine, valid, submitting } = rfProps;

  return (
    <form noValidate onSubmit={e => e.preventDefault()}>

      <FieldArray name="groups" component={renderFields} props={{
        models:formModel.groups,
        canSubmit
      }} />
      <div>
        <button type="submit"
                className="btn primary"
                disabled={!canSubmit || submitting}
                onClick={handleSubmit(submit.bind(this))}>{submitting ? 'Publishing...' : 'Publish'}</button>
        <button type="cancel"
                className='btn primary-link'
                disabled={!canSubmit || submitting}
                onClick={cancel.bind({}, rfProps)}>Cancel</button>
      </div>
      <div className="form__help-block">
        {error && <strong>{error}</strong>}
      </div>
    </form>
  )
};

const renderFields = ({fields, models, canSubmit, disabled}) => {
  return (
    <div>
      {fields.map((member, idx) => {
        return (
          <fieldset key={idx}>
            <Field name={`${member}.dataset.id`}
                   component={InputHidden} />

            <Field name={`${member}.value`}
                   label={models[idx].dataset.label}
                   component={DatagroupsetInput}
                   fieldProps={{disabled}}  // todo - elementProps
                   optionProps={{canSubmit}} />
          </fieldset>
        )
      })}
    </div>
  )
};

const submit = (values, dispatch, props) => {
  let formData = values.groups.map((g, idx) => {
    return {
      value: g.value || null,
      ts: new Date(props.formModel.sliceKey).toJSON(),
      dataset_id: g.dataset.id
    }
  });

  return new Promise((resolve, reject) => {
    dispatch(createDatagroupset(formData))
      .then(
        (data) => { // promise success
          if (data && data.length) {
            dispatch(setToast(`Published data for: ${getHumanisedMonth(data[0].ts)} -
              ${data.map((el, idx) => {
                return ` ${props.formModel.groups[idx].dataset.label} ${el.value === null ? "No data" : el.value}` 
              })}
            `, 'success'));
            return resolve();
          }
          // server error
          // return reject({message: data.message || 'Server error'});
          debugger
          return reject({message:'Server error'});
        },
        (error) => { // promise failed
          return reject(error);
        },
      ).catch((error) => {
        debugger
        throw new SubmissionError({_error: error.message || 'Submit failed'});
      });
  });
};

const validate = (values, props) => {   // todo - validate
  const errors = {};
  return errors;
};

const cancel = (rfProps, cb = null) => {
  rfProps.reset();
  if (cb) {
    cb();
  }
};


CreateDatagroupsetForm = reduxForm({
  form: 'CreateDatagroupsetForm',
  validate,
  deepEqual: true,
  destroyOnUnmount: false
})(CreateDatagroupsetForm);

CreateDatagroupsetForm = connect(
  (state, ownProps) => ({
    enableReinitialize: true
  }),
  (dispatch, ownProps) => ({
    initialValues: ownProps.formModel
  })
)(CreateDatagroupsetForm);

export default CreateDatagroupsetForm
