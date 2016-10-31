import moment from 'moment';
import { DATE_HASH_ROUTE_SEGMENT } from './../constants/dateFormats';


const getLatestDateHash = () => {
  let saidMonth = moment(new Date()).subtract(1, 'months');
  return saidMonth.format(DATE_HASH_ROUTE_SEGMENT)
};


export default getLatestDateHash;
