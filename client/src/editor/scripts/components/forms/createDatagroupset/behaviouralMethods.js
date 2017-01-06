import {SubmissionError} from 'redux-form';

import * as validators from './../../../utils/validators';
import {getHumanisedMonth} from './../../../utils/humanisedDates';


/**
 * Submit the form
 * @param values
 * @param dispatch
 * @param props
 * @return {Promise} resolves redux-form submission
 */
export const submit = (values, dispatch, props) => {
  let formData = values.groups.map((g, idx) => {
    return {
      value: g.value || null,
      ts: new Date(props.formModel.sliceKey).toJSON(),
      dataset_id: g.dataset.id
    }
  });

  return new Promise((resolve, reject) => {
    dispatch(props.createDatagroupset(formData))
      .then((data) => { // dispatch actions
        try {
          dispatch(props.setDatagroupTransacted({
            widgetId: props.formModel.widget.id,
            description: `Published data for: ${getHumanisedMonth(data[0].ts)} -
                ${data.map((el, idx) => {
              return ` ${props.formModel.groups[idx].dataset.label} ${el.value === null ? "No data" : el.value}`
            })}`,
            type: 'created'
          }));
        } catch(e) {
          console.warn('problem with dispatching success message', props.formModel, data);
        }
        return data;
      })
      .then((data) => {
        // resolve(data);
        // return data;
        return resolve(data);
      })
      .catch((e) => {
        console.error(e);
        reject(new SubmissionError({_error: String(e) ? e : e.message ? e.message : 'Submit failed'}));
      });
  });
};


/**
 * Validate the form and provide errors like redux-form expects
 * @param values
 * @param props
 * @return {{}} - errors - which maps to shape of values
 */
export const validate = (values, props) => {
  const errors = {};

  errors.groups = values.groups.map((member, idx) => {

    if (props.formMetadata && props.formMetadata.validators) {
      let groupErrors = {value:''};

      props.formMetadata.validators.forEach(v => {  // todo - only handles single validator now
        if (validators[v.validator](member.value) === false) {
          groupErrors.value = v.message;
        }
      });

      return groupErrors;
    }
  });

  return errors;
};


export const cancel = (rfProps, cb = null) => {
  rfProps.reset();
  if (cb) {
    cb();
  }
};


/**
   todo - this nasty mainly because it violates the separation of React with Rails,
      we will refactor this out when we deprecate this feature :(
 */
export const preview = (data) => {
  let formData = data.groups.map((g, idx) => {
    return {
      value: document.getElementById(`groups[${idx}].value`).value || null,
      ts: new Date(data.sliceKey).toJSON(), // props.formModel.sliceKey
      dataset_id: g.dataset.id
    }
  });

  let previewForm = document.createElement('form');
  previewForm.setAttribute('method', 'post');
  previewForm.setAttribute('target', 'preview');
  previewForm.setAttribute('action', `widgets/${data.widget.id}/preview`);

  let input = document.createElement('input');
  input.setAttribute('type', 'hidden');
  input.setAttribute('name', 'datapoints');
  input.setAttribute('value', JSON.stringify(formData));

  previewForm.appendChild(input);
  document.getElementsByTagName('body')[0].appendChild(previewForm);
  previewForm.submit();
};

