import { isNumber } from 'lodash';
import { isFloat, isCurrency } from 'validator';


export const MESSAGE_REQUIRED = 'Value required';
export const MESSAGE_NUMERICNULL = 'Value should be numeric or empty to save as "No data"';
export const MESSAGE_SECONDS = 'Value must be in seconds';
export const MESSAGE_PERCENTILE = 'Value must be numbers between 0 and 100';
export const MESSAGE_MONEY = 'Value must be in dollars and cents as a decimal';


export const required = value => {
  return Boolean(value);
};

export const numericNull = value => {
  return value === null || Boolean(Number(value) && Number(value) >= 0);
};

export const seconds = value => {
  return isNumber(value) && value >= 0;
};

export const percentile = value => {
  return isFloat(String(value), {min:0, max:100});
};

export const money = value => {
  return isCurrency(value);
};
