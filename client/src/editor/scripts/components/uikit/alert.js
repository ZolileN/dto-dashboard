import React, { PropTypes } from 'react';


const UikitAlert = ({type, headingText, text}) => {
  return (
    <div className={`UIK-alert alert alert-${type}`} role="alert">
      <div className="alert__icon"><i>!</i></div>
      <div className="alert__text">
        {headingText && <span className="heading-text">{headingText}</span>}
        <p>{text}</p>
      </div>
    </div>
  )
};

UikitAlert.propTypes = {
  type: PropTypes.string.isRequired,
  headingText: PropTypes.string,
  text: PropTypes.string.isRequired
};

export default UikitAlert;
