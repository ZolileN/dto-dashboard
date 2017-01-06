import React from 'react';
import {connect} from 'react-redux'
import {
  Field,
  FieldArray,
  reduxForm
} from 'redux-form';

import {createDatagroupset} from './../../../actions/datagroupset';
import {setDatagroupTransacted} from './../../../actions/uiApp';

import {
  submit,
  cancel,
  validate,
  preview
} from './behaviour';

import DatagroupsetInput from './../../fields/datagroupsetInput';
import InputHidden from './../../reduxFormFields/inputHidden';

import {getHumanisedUnits} from './../../../helpers/dataset';


let CreateDatagroupsetForm = ({
  canSubmit,
  formModel,
  ...rfProps
}) => {

  const { handleSubmit, submitting, error } = rfProps;

  return (
    <form noValidate onSubmit={e => e.preventDefault()}>

      <FieldArray name="groups" component={renderFields} props={{
        models:formModel.groups,
        formModel: formModel,
        canSubmit
      }} />

      <hr />

      <div className="form-preview">
        <button className="UIK-button btn btn-secondary mb-1"
                onClick={preview.bind(this, formModel)}>Click to preview before publishing</button>

        <iframe id="preview" name="preview" style={{height: '500px', width: '100%'}}></iframe>
      </div>

      <hr className="mt-2" />

      <div className="form-actions-buttons">
        <button type="submit"
                className="UIK-button btn btn-primary"
                disabled={!canSubmit || submitting}
                onClick={handleSubmit(submit.bind(this))}>{submitting ? 'Publishing...' : 'Publish'}</button>
        <button type="cancel"
                className='UIK-button btn btn-link'
                disabled={submitting}
                onClick={submitting ? () => {} : cancel.bind({}, rfProps)}>Cancel</button>
      </div>

      <div className="form__help-block mt-1">
        {error && <strong>{error}</strong>}
      </div>

    </form>
  )
};

const renderFields = ({
  fields, models,
  canSubmit, disabled, formModel, meta: {error}
}) => {
  return (
    <div>
      {fields.map((member, idx) => {
        return (
          <fieldset key={idx}>

            <Field name={`${member}.dataset.id`}
                   component={InputHidden}
                   props={{}} />

            <Field name={`${member}.value`}
                   component={DatagroupsetInput}
                   props={{
                     label: models[idx].dataset.label,
                     elementProps: {
                       disabled:!canSubmit
                     },
                     optionProps: {
                       suffix:getHumanisedUnits(formModel.groups[idx].dataset.units)
                     }
                   }} />
          </fieldset>
        )
      })}
    </div>
  )
};

CreateDatagroupsetForm = reduxForm({
  form: 'CreateDatagroupsetForm',
  validate,
  deepEqual: true,
  destroyOnUnmount: false
})(CreateDatagroupsetForm);

CreateDatagroupsetForm = connect(
  (state, ownProps) => ({     // mapStateToProps
    enableReinitialize: true
  }),
  (dispatch, ownProps) => ({  // mapDispatchToProps
    initialValues: ownProps.formModel,
    createDatagroupset: createDatagroupset,
    setDatagroupTransacted: setDatagroupTransacted
  })
)(CreateDatagroupsetForm);

export default CreateDatagroupsetForm
