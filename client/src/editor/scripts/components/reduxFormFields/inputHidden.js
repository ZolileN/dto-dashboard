import React from 'react';

/**
 * A Redux Form Field Signature input component
 * @param props {Object} has input and meta
 * @returns {Object<jsx>}
 * @constructor
 */
const InputHidden = ({input}) => {
  const {name} = input;
  return <input {...input} type="hidden" id={name} />
};

export default InputHidden;
