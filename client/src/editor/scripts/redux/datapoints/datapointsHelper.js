
// todo - need to verify that we're rendering "2016-00" or start at "2016-01"


import moment from 'moment';
import 'moment-range';
import * as dateFormats from './../../constants/dateFormats';


export const getHeadKey = () => {
  let headMonth = moment(new Date()).subtract(1, 'months');
  return headMonth.format(dateFormats.DATAGROUP_KEY_ROUTE_SEGMENT);
};

/**
 * Gets the next key in sequence from recentKey up to and including headKey
 * otherwise returns null.
 * @param headKey {String} 'YYYY-MM'
 * @param recentKey {String} 'YYYY-MM'
 * @returns {String|null} 'YYYY-MM'
 */
export const getNextKey = (headKey, recentKey) => {
  if (new Date(headKey) < new Date(recentKey)) {
    throw new Error(`recentKey can't be beyond headKey`);
  }
  let headMonth = moment(headKey);
  let recentMonth = moment(recentKey);
  let nextMonth = recentMonth.add(1, 'months');
  let nextKey = nextMonth.format(dateFormats.DATAGROUP_KEY_ROUTE_SEGMENT);

  if (nextMonth > headMonth) {
    return null;
  }
  return nextKey;
};


/**
 * Gets the previous key before the one provided.
 * @param recentKey {String} 'YYYY-MM'
 * @returns {String} 'YYYY-MM'
 */
export const getPrevKey = recentKey => {
  let recentMonth = moment(recentKey);
  let prevMonth = recentMonth.subtract(1, 'months');
  return prevMonth.format(dateFormats.DATAGROUP_KEY_ROUTE_SEGMENT);
};


export const getNumMonthsBetweenHeadKeyAndRecentKey = recentKey => {
  const headMonth = moment(new Date()).subtract(1, 'months');
  const month = moment(recentKey);
  const dateRange = moment.range(month, headMonth);
  return dateRange.diff('months');
};

export const computeLabel = ts => {
  return moment(ts).format(dateFormats.DATAGROUP_KEY_ROUTE_SEGMENT);
};
