import React, { PropTypes } from 'react';


const Donut = ({strokeColor, innerColor, radius = 12, strokeWidth = 6}) => {

  const dimension = radius*2;
  const fauxRadius = radius - strokeWidth;  // because strokes the outside of path

  return (
    <svg width={dimension} height={dimension} viewBox={`0 0 ${dimension} ${dimension}`}>
      <circle r={fauxRadius} cx={radius} cy={radius} fill={innerColor} stroke={strokeColor} strokeWidth={strokeWidth} />
    </svg>
  );
};

Donut.propTypes = {
  strokeColor: PropTypes.string.isRequired,
  innerColor: PropTypes.string,
  radius: PropTypes.number,
  strokeWidth: PropTypes.number,
};

export default Donut;
