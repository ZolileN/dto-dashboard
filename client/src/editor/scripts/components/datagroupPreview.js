import React, { PropTypes } from 'react';
import { isEmpty } from 'lodash';

import LegendDot, { getPaletteColor } from './svgs/legendDot';
import { getHumanisedUnits } from './../helpers/dataset';
import { getHumanisedVeryShortDate } from './../utils/humanisedDates';


const Preview = ({recentDatagroupset}) => {

  return (
    <div className="preview">
      <p className="most-recent-text">Most recent data: <span className="strong">{getHumanisedVeryShortDate(recentDatagroupset.recentKey)}</span></p>

      {recentDatagroupset.groups.map((group, idx) => {
        if (!(group.datapoint && group.datapoint.value)) {  // todo - remove
          console.warn('datapoint is null, this means your widget has no data for this slice of time which is probably an error in the data integrity', group);
        }

        let units = getHumanisedUnits(group.dataset.units);
        let unitsStr = units ? ` ${units}` : '';

        return (
          <div key={idx} className="preview-table">
            <span className="key">
              <LegendDot color={getPaletteColor(idx)} />
            </span>
            <span className="description">{group.dataset.label}</span>
            <span className="value">{group.datapoint && `${group.datapoint.value}${unitsStr}` || 'No data'}</span>
            {/*<span className="value">{group.datapoint.value || 'No data'}</span>*/}
          </div>
        );
      })}
    </div>
  )
};

export default Preview;
