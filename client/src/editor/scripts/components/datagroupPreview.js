import React, { PropTypes } from 'react';
import { isEmpty } from 'lodash';

import {
  humanisedVeryShortDate
} from './../utils/humanisedDates';
import LegendDot, { getPaletteColor } from './svgs/legend-dot';


const DescriptionWithoutData = () => <span className="description">No records</span>;

const DescriptionWithData = ({description}) => <span className="description">{description}</span>;
const ValueWithData = ({value = '-'}) => <span className="value">{value}</span>;

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
            {!!i.label ? <DescriptionWithData description={i.label} /> : <DescriptionWithoutData />}
            {!!i.label ? <ValueWithData value={i.value} /> : ''}
          </div>
        );
      })}
    </div>
  )
};

export default Preview;
