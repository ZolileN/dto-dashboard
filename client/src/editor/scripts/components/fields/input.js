import React, { PropTypes } from 'react';


const Input = ({input, name, type, label, meta, fieldProps, optionProps}) => {
  const { isOptional, infoText } = optionProps;
  const { touched, error } = meta;

  if (type === 'checkbox') {
    throw new Error('Use "checkbox" input instead.');
  }

  // todo - removed "name" attribute because of FieldsArray, name is at input.name
  const { name } = input;

  return (
    <div className="form-group">
      <label htmlFor={name}
             className="control-label">{label}{isOptional && <sup> Optional</sup>}</label>
      {infoText && <label className="info-block">{infoText}</label>}
      <div>
        <input {...input} {...fieldProps}
          type={type}
          id={name}
          className={touched && error ? `form-control invalid` : `form-control`} />
        {touched && error && <span className="help-block">{error}</span>}
      </div>
    </div>
  )
};

Input.defaultProps = {
  fieldProps: {
    autoComplete: 'off'
  },
  optionProps: {
    infoText: null
  }
};

Input.propTypes = {
  input: PropTypes.object.isRequired,
  // name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
};

export default Input;
