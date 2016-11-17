import { isNumber } from 'lodash';
import { isFloat, isCurrency } from 'validator';


export const MESSAGE_REQUIRED = 'Value required';
export const MESSAGE_NUMERICNULL = 'Value should be numeric. Leave blank if you have no data.';
export const MESSAGE_SECONDS = 'Value must be in seconds. Leave blank if you have no data.';
export const MESSAGE_PERCENTILE = 'Value must be numbers between 0 and 100. Leave blank if you have no data.';
export const MESSAGE_MONEY = 'Value must be in dollars and cents as a decimal. Leave blank if you have no data.';


export const required = value => {
  return Boolean(value);
};

export const emptyOrNumeric = value => {
  return typeof value === 'undefined' || Boolean(Number(value) && Number(value) >= 0);
};

export const emptyOrSeconds = value => {
  return typeof value === 'undefined' || isNumber(value) && value >= 0;
};

export const emptyOrPercentile = value => {
  return typeof value === 'undefined' || isFloat(String(value), {min:0, max:100});
};

export const emptyOrMoney = value => {
  return typeof value === 'undefined' || isCurrency(value);
};
