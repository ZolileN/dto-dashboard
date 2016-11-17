import React, { PropTypes } from 'react';

import Donut from './svgs/donut';
import { statusColors } from './../constants/styleVariables';
import { humanisedShortDate } from './../utils/humanisedDates';
import { getNumMonthsBetweenHeadKeyAndRecentKey } from './../helpers/datapoint';
import { isNumber } from 'lodash';


const STATUSES = [
  {
    label: 'UP TO DATE',
    color: statusColors.COLOR_SUCCESS
  },
  {
    label: 'TO DO',
    color: statusColors.COLOR_WARNING
  },
  {
    label: 'OVERDUE',
    color: statusColors.COLOR_ERROR
  }
];

const TrafficLight = ({recentKey}) => {

  const numMonths = getNumMonthsBetweenHeadKeyAndRecentKey(recentKey);

  if (!isNumber(numMonths)) {
    return null;
  }

  const status = numMonths >= 2 ? STATUSES[2] : STATUSES[numMonths];

  return (
    <div className="traffic-light">
      <span className="traffic-light__top">

      <span className="status-key-group">
        <span className="status-key">
          <Donut innerColor="white" strokeColor={status.color} />
        </span>
        <span className="status-label">{status.label}</span>
      </span>

      </span>
      <span className="traffic-light__bottom">Published: <time>{humanisedShortDate(recentKey)}</time></span>
    </div>
  )
};

TrafficLight.propTypes = {
  recentKey: PropTypes.string.isRequired
};

export default TrafficLight;
