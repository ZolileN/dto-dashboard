
/**
 * Makes an assumption that chart data is intended to be 
 * categorically grouped because more than one dataset was
 * provided
 * @param chartData {Array}
 * @returns {Boolean}
 */
export const assumeIsGroupedByCategory = chartData => {
  return chartData.length > 1;
}