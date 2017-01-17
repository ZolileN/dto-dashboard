
import React from 'react';

import LegendDot, { getPaletteColor } from './svgs/legendDot';
import { getHumanisedUnits } from './../redux/datasets/datasetsHelper';
import { getHumanisedVeryShortDate } from './../utils/humanisedDates';
import {formatCurrency2dp} from './../utils/formatCurrency';
import {formatPercentile2dp} from './../utils/formatPercentile';


/**
 * Format and decorate value provided for the View
 * @param value {Number|String<Number>}
 * @param units {String}
 * @returns {String}
 */
const formatValue = (value, units) => {
  if (typeof value === 'undefined') {
    console.warn('Group has no datapoint. Something is very wrong.');
    return null;
  }
  let formattedValue;
  let units = getHumanisedUnits(units);
  let unitsStr = units ? ` ${units}` : '';
  if (value === null) {
    formattedValue = 'No data';
  } else {
    if (units === '$') {
      formattedValue = formatCurrency2dp(value) + unitsStr;
    } else if (units === '%') {
      formattedValue = formatPercentile2dp(value) + unitsStr;
    } else {
      formattedValue = value + unitsStr;
    }
  }
  return formattedValue;
};

const Preview = ({recentDatagroupset}) => {
  return (
    <div className="preview">
      <p className="most-recent-text">Most recent data: <span className="strong">{getHumanisedVeryShortDate(recentDatagroupset.recentKey)}</span></p>
      {recentDatagroupset.groups.map((group, idx) => {
        return (
          <div key={idx} className="preview-table">
            <span className="key">
              <LegendDot color={getPaletteColor(idx)} />
            </span>
            <span className="description">{group.dataset.label}</span>
            <span className="value">{formatValue(group.datapoint.value, group.dataset.units)}</span>
          </div>
        );
      })}
    </div>
  )
};

export default Preview;
