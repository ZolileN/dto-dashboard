import React, { PropTypes } from 'react';


// todo - removed "name" attribute because of FieldsArray, name is at input.name

const Input = ({input}) => {
  return <input {...input} type="hidden" />
};

Input.propTypes = {
  input: PropTypes.object.isRequired,
  // name: PropTypes.string.isRequired
};

export default Input;
