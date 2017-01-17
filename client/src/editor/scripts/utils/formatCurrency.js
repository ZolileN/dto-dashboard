
/**
 * Takes a value and returns a Number as String to 2 decimal places.
 * Does not round.
 * @param value {Number|String}
 * @returns {string}
 */
export const formatCurrency2dp = value => {
  let num = Number(value);
  return num.toFixed(2);
};
