
/**
 * Normalize non sequential data from array
 *
 * @example
   [null, 2, 2, 3, null, 2, null, 2, 2];
   will become
   [null, 2, 2, 3, null, null, null, 2, 2]
 *
 * @type {Array}
 * @returns {Array}
 */

export const normalizeNonSequentialData = function(data) {
  return data.map((d, idx, arr) => {
    if (d &&
      (arr[idx+1] || arr[idx-1])
    ) {
      return d;
    }
    return null;
  });
};

/**
 * Normalize non sequential data from nested 2 level d3 object on property y
 * @param {Array} data
 * @returns {Array}
 */
export const normalizeNonSequentialDataNested = function(data) {
  return data.map(d => {
    return d.map((d2, idx2, arr2) => {
      if (
        d2.y &&
        ( (arr2[idx2+1] && arr2[idx2+1].y) || (arr2[idx2-1] && arr2[idx2-1].y) )
      ) {
        // do nothing
      } else {
        d2.y = null;
      }
      return d2;
    });
  });
};

/**
 * Check if normalizeNonSequentialDataNested
 * @param data
 * @returns {boolean}
 */
export const hasNonSequentialDataNested = function(data) {
  let condition = false;
  data.map(d => {
    d.map((d2, idx2, arr2) => {
      if (
        d2.y &&
        ( (arr2[idx2+1] && arr2[idx2+1].y) || (arr2[idx2-1] && arr2[idx2-1].y) )
      ) {
        // do nothing
      } else {
        condition = true;
      }
    });
  });
  return condition;
};
