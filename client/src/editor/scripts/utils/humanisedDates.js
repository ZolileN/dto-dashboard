import moment from 'moment';
import dateConsts from './../../../_common/scripts/_vendor/gov-au-ui-kit/constants/date-time';


export const humanisedLongDate = ts => {
  return moment(ts).format(dateConsts.LONG_DATE);
};

export const humanisedShortDate = ts => {
  return moment(ts).format(dateConsts.SHORT_DATE);
};
