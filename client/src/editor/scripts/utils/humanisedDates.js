import moment from 'moment';
import * as dateFormats from './../constants/dateFormats';


export const humanisedLongDate = ts => {
  return moment(ts).format(dateFormats.LONG_DATE);
};

export const humanisedShortDate = ts => {
  return moment(ts).format(dateFormats.SHORT_DATE);
};

export const humanisedVeryShortDate = ts => {
  return moment(ts).format(dateFormats.VERY_SHORT_DATE);
};

export const getExpandedShortDate = key => {
  return moment(key).format(`MMMM 'YY`);
};

export const getHumanisedMonth = ts => {
  return moment(ts).format('m');
};
