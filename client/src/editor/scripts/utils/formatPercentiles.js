
/**
 * Takes a value and returns a Number as String to 2 decimal places.
 * Does not round.
 * @param value {Number|String}
 * @returns {string}
 */
export const formatPercentile2dp = value => {
  let percentile = Number(value);
  return percentile.toFixed(2);
};
