import moment from 'moment';
import * as dateFormats from './../constants/dateFormats';


export const getMaxEditableLabel = () => {
  let maxMonth = moment(new Date()).subtract(1, 'months');
  return maxMonth.format(dateFormats.DATAGROUP_KEY_ROUTE_SEGMENT)
};

export const getNextEditableLabel = (mostRecentTs) => {
  let maxMonth = moment(new Date()).subtract(1, 'months');
  let nextMonth = moment(mostRecentTs).add(1, 'months');
  
  if (nextMonth < maxMonth) {
    return nextMonth.format(dateFormats.DATAGROUP_KEY_ROUTE_SEGMENT)
  }
  return maxMonth.format(dateFormats.DATAGROUP_KEY_ROUTE_SEGMENT)
};

export const computeLabel = ts => {
  return moment(ts).format(dateFormats.DATAGROUP_KEY_ROUTE_SEGMENT);
};
