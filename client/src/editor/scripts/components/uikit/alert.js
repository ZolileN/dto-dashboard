import React, { PropTypes } from 'react';


const META = { // todo - make this a real icon font
  'success': {
    icon: '✓'
  },
  'error': {
    icon: '✗'
  },
  'warning': {
    icon: '!'
  },
  'info': {
    icon: '!'
  }
};

const UikitAlert = ({type, headingText, text}) => {
  return (
    <div className={`UIK-alert alert alert-${type}`} role="alert">
      <div className="alert__icon"><i>{META[type].icon}</i></div>
      <div className="alert__text">
        {headingText && <span className="heading-text">{headingText}</span>}
        <p>{text}</p>
      </div>
    </div>
  )
};

UikitAlert.propTypes = {
  type: PropTypes.oneOf(Object.keys(META)).isRequired,
  text: PropTypes.string.isRequired,
  headingText: PropTypes.string
};

export default UikitAlert;
