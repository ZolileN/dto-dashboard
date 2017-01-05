import React, { PropTypes } from 'react';


const Input = ({input}) => {

  // todo - removed "name" attribute because of FieldsArray, name is at input.name
  const { name } = input;   // todo

  return <input {...input} type="hidden" id={name} />
};

Input.propTypes = {
  input: PropTypes.object.isRequired,
  // name: PropTypes.string.isRequired
};

export default Input;
