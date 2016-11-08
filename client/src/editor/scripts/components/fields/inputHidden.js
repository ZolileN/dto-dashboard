import React, { PropTypes } from 'react';


const Input = ({input, name}) => {
  return <input {...input} type="hidden" name={name} />
};

Input.propTypes = {
  input: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired
};

export default Input;
