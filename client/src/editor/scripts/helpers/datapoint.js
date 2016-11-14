import moment from 'moment';
import * as dateFormats from './../constants/dateFormats';


export const getHeadKey = () => {
  let maxMonth = moment(new Date()).subtract(1, 'months');
  return maxMonth.format(dateFormats.DATAGROUP_KEY_ROUTE_SEGMENT);
};

export const getNextKey = (headKey, recentKey) => {
  let headMonth = moment(headKey);
  let recentMonth = moment(recentKey);
  let nextMonth = recentMonth.add(1, 'months');
  let nextKey = nextMonth.format(dateFormats.DATAGROUP_KEY_ROUTE_SEGMENT);

  if (nextMonth > headMonth) {
    return null;
  }
  return nextKey;
};

export const getPrevKey = (recentKey) => {
  let recentMonth = moment(recentKey);
  let prevMonth = recentMonth.subtract(1, 'months');
  let prevKey = prevMonth.format(dateFormats.DATAGROUP_KEY_ROUTE_SEGMENT);

  return prevKey;
};

export const computeLabel = ts => {
  return moment(ts).format(dateFormats.DATAGROUP_KEY_ROUTE_SEGMENT);
};
