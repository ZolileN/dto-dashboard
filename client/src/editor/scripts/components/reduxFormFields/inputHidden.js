import React from 'react';

/**
 * A Redux Form Field Signature input component
 * @param props {Object} has input and meta
 * @returns {Object<jsx>}
 * @constructor
 */
const InputHidden = (props) => {
  const {input} = props;
  return <input {...input} type="hidden" id={input.name} />
};

export default InputHidden;
