import React, { PropTypes } from 'react';

import {
  humanisedVeryShortDate
} from './../utils/humanisedDates';
import LegendDot, { getPaletteColor } from './svgs/legend-dot';


const Preview = ({items, date}) => {
  return (
    <div className="preview">
      <span className="date-meta">Most recent data: {humanisedVeryShortDate(date)}</span>
      {items.map((i, idx) => {
        return (
          <div key={idx} className="preview-table">
        <span className="key">
          <LegendDot color={getPaletteColor(idx)} />
        </span>
            <span className="description">{i.label}</span>
            <span className="value">{i.value}</span>
          </div>
        );
      })}
    </div>
  )
};

export default Preview;
