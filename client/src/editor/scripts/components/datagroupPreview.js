import React, { PropTypes } from 'react';
import { isEmpty } from 'lodash';

import {
  humanisedVeryShortDate
} from './../utils/humanisedDates';
import LegendDot, { getPaletteColor } from './svgs/legend-dot';


const Preview = ({recentDatagroups}) => {
  return (
    <div className="preview">
      <span className="date-meta">Most recent data: {humanisedVeryShortDate(recentDatagroups.lastUpdated)}</span>
      {recentDatagroups.groups.map((group, idx) => {
        return (
          <div key={idx} className="preview-table">
          <span className="key">
            <LegendDot color={getPaletteColor(idx)} />
          </span>
            <span className="description">{group.dataset.label}</span>
            <span className="value">{group.datapoint.value}</span>
          </div>
        );
      })}
    </div>
  )
};

export default Preview;
