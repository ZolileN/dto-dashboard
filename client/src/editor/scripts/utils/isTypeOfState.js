import { isObject } from 'lodash';

/**
 * Produce a function that can check an items' type against
 * reasonable assumptions
 * @param propertyKeys {Array} expected keys of a state item
 * @return {function(*=)}
 *
 * @usage:
 * const isDataset = isTypeOfState(['datapoints', 'units', 'label']);
 *
 */
const isTypeOfState = propertyKeys => {
  return (item) => {
    // item is an object
    if (isObject(item) === false) {
      return false;
    }
    let actualKeys = Object.keys(item);
    return propertyKeys.every(k => actualKeys.includes(k));
  }
};

export default isTypeOfState;
