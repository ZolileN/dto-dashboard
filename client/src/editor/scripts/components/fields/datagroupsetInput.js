import React, {PropTypes} from 'react';


const DatagroupsetInput = ({
  input, meta,
  // these props are merged down to props by redux-form
  label, elementProps={}, optionProps={}, suffix, disabled=false, isOptional=false, infoText
}) => {

  const {name} = input;
  const {touched, error} = meta;

  return (
    <div className="UIK-form-group form-group">
      <label htmlFor={name}
             className="control-label">{label}{isOptional && <sup> Optional</sup>}</label>
      {infoText && <label className="info-block">{infoText}</label>}
      <div className="input-group">
        <input {...input} {...elementProps}
          type="text"
          id={name} disabled={disabled}
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

DatagroupsetInput.PropTypes = {
  label: PropTypes.string.isRequired,
  elementProps: PropTypes.object,
  optionProps: PropTypes.object
};

export default DatagroupsetInput;
