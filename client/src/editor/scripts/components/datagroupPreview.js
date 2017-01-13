import React from 'react';

import LegendDot, { getPaletteColor } from './svgs/legendDot';
import { getHumanisedUnits } from './../redux/datasets/datasetsHelper';
import {
  getHumanisedVeryShortDate,
  getHumanisedMonth
} from './../utils/humanisedDates';

import {assumeIsGroupedByCategory} from './../redux/datagroupset/datagroupsetHelpers';

const Preview = ({recentDatagroupset, widget}) => {

  return (
    <div className="preview">
      <p className="most-recent-text">Most recent data: <span className="strong">{
        assumeIsGroupedByCategory(recentDatagroupset.groups, widget.type) ? 
        getHumanisedMonth(recentDatagroupset.recentKey) :
        getHumanisedVeryShortDate(recentDatagroupset.recentKey)
      }</span></p>

      {recentDatagroupset.groups.map((group, idx) => {

        let value;

        let units = getHumanisedUnits(group.dataset.units);
        let unitsStr = units ? ` ${units}` : '';
        if (group.datapoint) {
          value = group.datapoint.value === null ? 'No data' : group.datapoint.value + unitsStr;
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
