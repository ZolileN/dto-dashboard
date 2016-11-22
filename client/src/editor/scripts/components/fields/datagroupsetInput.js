import React, { PropTypes } from 'react';


const DatagroupsetInput = ({input, name, type, label, meta, elementProps, optionProps, groupModel}) => {
  const { isOptional, infoText, canSubmit, suffix } = optionProps;
  const { touched, error } = meta;

  // if (!input.value) {
  //   input.placeholder = 'No data';
  // }

  return (
    <div className="UIK-form-group form-group">
      <label htmlFor={name}
             className="control-label">{label}{isOptional && <sup> Optional</sup>}</label>
      {infoText && <label className="info-block">{infoText}</label>}
      <div className="input-group">
        <input {...input} {...elementProps}
          type="text"
          name={name}
          id={name} disabled={!canSubmit}
          className={touched && error ? `form-control invalid` : `form-control`} />
        {touched && error && <span className="help-block">{error}</span>}

        {suffix && <div className="input-group-addon">{suffix}</div>}
      </div>
    </div>
  )
};

DatagroupsetInput.defaultProps = {
  elementProps: {
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
