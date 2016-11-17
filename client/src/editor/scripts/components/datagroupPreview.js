import React, { PropTypes } from 'react';
import { isEmpty } from 'lodash';

import LegendDot, { getPaletteColor } from './svgs/legendDot';


const Preview = ({recentDatagroupset}) => {

  return (
    <div className="preview">
      <p>Most recent data: {recentDatagroupset.recentKey}</p>

      {recentDatagroupset.groups.map((group, idx) => {
        if (!(group.datapoint && group.datapoint.value)) {  // todo - remove
          console.warn('datapoint is null, this means your widget has no data for this slice of time which is probably an error in the data integrity', group);
        }
        return (
          <div key={idx} className="preview-table">
            <span className="key">
              <LegendDot color={getPaletteColor(idx)} />
            </span>
            <span className="description">{group.dataset.label}</span>
            <span className="value">{group.datapoint && group.datapoint.value ? group.datapoint.value  : 'No data'}</span>
            {/*<span className="value">{group.datapoint.value || 'No data'}</span>*/}
          </div>
        );
      })}
    </div>
  )
};

export default Preview;
