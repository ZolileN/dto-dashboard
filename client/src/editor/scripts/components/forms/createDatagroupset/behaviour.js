
import * as validators from './../../../utils/validators';

/**
 * Validate the form and provide errors like redux-form expects
 * @param values
 * @param props
 * @return {{}} - errors - which maps to shape of values
 */
export const validate = (values, props) => {
  const errors = {};

  errors.groups = values.groups.map(member => {
    let groupErrors = {};

    if (props.formMetadata && props.formMetadata.validators) {
      props.formMetadata.validators.forEach(v => {  // todo - only handles single validator now
        if (validators[v.validator](member.value) === false) {
          groupErrors['value'] = v.message;
        }
      });
    }
    return groupErrors;
  });

  return errors;
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

  document.getElementById('preview').style.display = 'block';
  document.getElementById('preview').style.marginBottom = `2.1em`;

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
