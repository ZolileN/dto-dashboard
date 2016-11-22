import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'
import { Field, FieldArray, reduxForm, SubmissionError } from 'redux-form';

import DatagroupsetInput from './../fields/datagroupsetInput';
import InputHidden from './../fields/inputHidden';
import { updateDatagroupset } from './../../actions/datagroupset';
import { getHumanisedUnits } from './../../helpers/dataset';


let UpdateDatagroupsetForm = ({
  canSubmit, formModel,
  ...rfProps
}) => {

  const { error, handleSubmit, pristine, valid, submitting } = rfProps;

  return (
    <form noValidate onSubmit={e => e.preventDefault()}>

      <FieldArray name="groups" component={renderFields} props={{
        models:formModel.groups,
        formModel: formModel,
        canSubmit
      }} />

      <hr />

      <div className="form-actions-buttons">
        <button type="submit"
                className="UIKIT-button btn btn-primary"
                disabled={!canSubmit || submitting}
                onClick={handleSubmit(submit.bind(this))}>{!canSubmit ? 'Edit existing data' : submitting ? 'Publishing...' : 'Publish'}</button>
        <button type="cancel"
                className='UIKIT-button btn btn-link'
                disabled={!canSubmit || submitting}
                onClick={cancel.bind({}, rfProps)}>Cancel</button>
      </div>

      <div className="form__help-block">
        {error && <strong>{error}</strong>}
      </div>
    </form>
  )
};

const renderFields = ({fields, models, canSubmit, disabled, formModel}) => {
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
                   elementProps={{disabled}}
                   optionProps={{canSubmit, suffix:getHumanisedUnits(formModel.groups[idx].dataset.units)}} />

          </fieldset>
        )
      })}
    </div>
  )
};


const submit = (values, dispatch, props) => {
  let formData = values.groups.map((g, idx) => {
    return {
      value: g.datapoint ? g.datapoint.value : '',
      ts: new Date(props.formModel.sliceKey).toJSON(),
      dataset_id: g.dataset.id
    }
  });

  return new Promise((resolve, reject) => {
    resolve();
    console.warn('did not actually do XHR');
  //   dispatch(updateDatagroupset(formData))
  //     .then(
  //       (data) => { // promise success
  //         if (data && data.length) {
  //           return resolve();
  //         }
  //         // server error
  //         // return reject({message: data.message || 'Server error'});
  //         debugger
  //         return reject({message:'Server error'});
  //       },
  //       (error) => { // promise failed
  //         return reject(error);
  //       },
  //     ).catch((error) => {
  //       debugger
  //       throw new SubmissionError({_error: error.message || 'Submit failed'});
  //     });
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


UpdateDatagroupsetForm = reduxForm({
  form: 'UpdateDatagroupsetForm',
  validate,
  deepEqual: true,
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
