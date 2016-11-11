import React, { PropTypes } from 'react';


const DatagroupsetInput = ({input, name, type, label, meta, fieldProps, optionProps, groupModel}) => {
  const { isOptional, infoText } = optionProps;
  const { touched, error } = meta;

  // if (!input.value) {
  //   input.placeholder = 'No data';
  // }

  return (
    <div className="form-group">
      <label htmlFor={name}
             className="control-label">{label}{isOptional && <sup> Optional</sup>}</label>
      {infoText && <label className="info-block">{infoText}</label>}
      <div>
        <input {...input} {...fieldProps}
          type="number"
          name={name}
          id={name}
          className={touched && error ? `form-control invalid` : `form-control`} />
        {touched && error && <span className="help-block">{error}</span>}
      </div>
    </div>
  )
};

DatagroupsetInput.defaultProps = {
  fieldProps: {
    autoComplete: 'off'
  },
  optionProps: {
    infoText: null,
    canSubmit: true
  }
};

DatagroupsetInput.propTypes = {
  input: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
};

export default DatagroupsetInput;
