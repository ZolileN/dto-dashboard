import React, { PropTypes } from 'react';
import { isEmpty } from 'lodash';

import LegendDot, { getPaletteColor } from './svgs/legend-dot';


const Preview = ({recentDatagroupset}) => {
  return (
    <div className="preview">
      {recentDatagroupset.groups.map((group, idx) => {
        return (
          <div key={idx} className="preview-table">
            <span className="key">
              <LegendDot color={getPaletteColor(idx)} />
            </span>
            <span className="description">{group.dataset.label}</span>
            <span className="value">{group.datapoint.value || 'No data'}</span>
          </div>
        );
      })}
    </div>
  )
};

export default Preview;
