import React, { PropTypes } from 'react';
import { humanisedLongDate } from './../../utils/humanisedDates';


const InputDate = ({input, name, label, meta, fieldProps, optionProps}) => {

  const { isOptional } = optionProps;
  const { touched, error } = meta;

  let computedValue = humanisedLongDate(input.value);

  return (
    <div className="form-group">
      <label htmlFor={name}
             className="control-label">{label}{isOptional === true && <sup> Optional</sup>}</label>
      <div>
        <input type="hidden" {...input} name={name} />
        <input {...fieldProps}
               type="text"
               value={computedValue}
               id={name}
               className={touched && error ? `form-control invalid` : `form-control`} />
        {touched && error && <span className="help-block">{error}</span>}
      </div>
    </div>
  )
};

InputDate.defaultProps = {
  fieldProps: {
    autoComplete: 'off'
  },
  optionProps: {}
};

InputDate.propTypes = {
  input: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
};

export default InputDate;
