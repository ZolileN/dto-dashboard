import React, { PropTypes } from 'react';


// maps to client/src/_common/styles/_variables.scss
const LEGEND_COLOR_PALETTE = ['#f2b038', '#75a370', '#4892c0', '#7066a5', '#40bdac'];

export const getPaletteColor = (idx, palette = LEGEND_COLOR_PALETTE) => {
  return palette[idx] || (palette[idx % palette.length]);
};

const Dot = ({color, radius = 7}) => {
  const dimension = radius*2;
  return (
    <svg width={dimension} height={dimension} viewBox={`0 0 ${dimension} ${dimension}`}>
      <circle r={radius} cx={radius} cy={radius} fill={color} />
    </svg>
  );
};

Dot.propTypes = {
  color: PropTypes.string.isRequired,
  radius: PropTypes.number
};

export default Dot;
