
import React, {PropTypes} from 'react';
import {
  Field,
  FieldArray,
  SubmissionError
} from 'redux-form';

import {preview} from './behaviour';

import InputHidden from './../../reduxFormFields/inputHidden';
import DatagroupsetInput from './../../fields/datagroupsetInput';

import {getHumanisedUnits} from './../../../redux/datasets/datasetsHelper';


/**
 * Normalize raw values from form so they are in the right shape for
 * submission in action
 * @param values
 * @param props
 * @returns {Array}
 */
const normalizeValues = (values, props) => {
  return values.groups.map(g => {
    return {
      value: g.value || null,
      ts: new Date(props.formModel.sliceKey).toJSON(),
      dataset_id: g.dataset.id
    }
  });
};

/**
 * Submit the form
 * @param values
 * @param dispatch
 * @param props
 * @return {Promise} resolves redux-form submission
 */
const mySubmit = (values, dispatch, props) => {
  let payload = normalizeValues(values, props);
  return props.onSave(payload).then(response => {
    props.onSaveSuccess(response, props);
    props.reset();
    return response;
  }).catch(error => {
    throw new SubmissionError({_error: error && error.message ? error.message : 'Submit failed'})
  });
};

const cancel = (props) => {
  props.onCancelSuccess(props);
  props.reset();
};

const renderFields = ({
  fields, models,
  canSubmit, disabled, formModel, meta: {error}
}) => {
  return (
    <div>
      {fields.map((member, idx) => (
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
      ))}
    </div>
  )
};

/**
 * Container which renders the Create Datagroupset Form
 * @returns {Object<jsx>}
 */
const CreateDatagroupsetForm = (props) => {

  const { canSubmit, formModel, ...rfProps } = props;
  const { handleSubmit, submitting, error, valid } = rfProps;

  return (
    <form noValidate onSubmit={e => e.preventDefault()}>

      <FieldArray name="groups"
                  component={renderFields}
                  props={{
                    models:formModel.groups,
                    formModel: formModel,
                    canSubmit
                  }} />

      <hr />

      <div className="form-preview">
        <button className="UIK-button btn btn-secondary mb-1"
                onClick={preview.bind(this, formModel)}>Click to preview</button>

        <iframe id="preview" name="preview" style={{height: '500px', width: '100%', display:'none'}}></iframe>
      </div>

      <hr className="mt-0" />

      <div className="form-actions-buttons">
        <button type="submit"
                className="UIK-button btn btn-primary"
                disabled={!canSubmit || submitting || !valid}
                onClick={valid ? handleSubmit(mySubmit.bind(this)) : () => {}}>{submitting ? 'Publishing...' : 'Publish'}</button>
        <button type="cancel"
                className='UIK-button btn btn-link'
                disabled={submitting}
                onClick={submitting ? () => {} : cancel.bind({}, rfProps)}>Cancel</button>
      </div>

      <div className="form__help-block mt-1">
        {error && <strong>{error}</strong>}
      </div>

      <div className="form__help-block mt-1">
        {!valid && <strong>A field value you have entered is invalid.</strong>}
      </div>

    </form>
  )
};

CreateDatagroupsetForm.propTypes = {
  onSave: PropTypes.func.isRequired,
  formModel: PropTypes.object.isRequired,
  formMeta: PropTypes.object,
  onSubmitSuccess: PropTypes.func,
  onCancelSuccess: PropTypes.func,
  // redux-form props, but still check this way we know if the form
  // is configured correctly and therefore behaving correctly
  handleSubmit: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired
};

export default CreateDatagroupsetForm;
