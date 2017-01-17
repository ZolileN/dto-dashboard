import React from 'react';

import LegendDot, { getPaletteColor } from './svgs/legendDot';
import { getHumanisedUnits } from './../redux/datasets/datasetsHelper';
import { getHumanisedVeryShortDate } from './../utils/humanisedDates';
import {formatCurrency2dp} from './../utils/formatCurrency';
import {formatPercentile2dp} from './../utils/formatPercentile';

const Preview = ({recentDatagroupset}) => {

  return (
    <div className="preview">
      <p className="most-recent-text">Most recent data: <span className="strong">{getHumanisedVeryShortDate(recentDatagroupset.recentKey)}</span></p>

      {recentDatagroupset.groups.map((group, idx) => {
        let value;
        let units = getHumanisedUnits(group.dataset.units);
        let unitsStr = units ? ` ${units}` : '';
        if (group.datapoint) {
          if (group.datapoint.value === null) {
            value = 'No data';
          } else {
            if (units === '$') {
              value = formatCurrency2dp(group.datapoint.value) + unitsStr;
            } else if (units === '%') {
              value = formatPercentile2dp(group.datapoint.value) + unitsStr;
            } else {
              value = group.datapoint.value + unitsStr;
            }
          }
        } else {
          console.warn('Group has no datapoint. Something is very wrong.');
          return null;
        }
        return (
          <div key={idx} className="preview-table">
            <span className="key">
              <LegendDot color={getPaletteColor(idx)} />
            </span>
            <span className="description">{group.dataset.label}</span>
            <span className="value">{value}</span>
          </div>
        );
      })}
    </div>
  )
};

export default Preview;
