import expect from 'expect';
import { isObject } from 'lodash';

import {
  getDatasetsByIds,
  getDatasetById
} from './../reducers/datasets';
import fixtureData from './fixtures/data';


/**
 * @param dataset {Object}
 * @return {boolean}
 */
let isDatasetType = (dataset) => {
  // item is an object
  if (isObject(dataset) === false) {
    return false;
  }
  // item matches keys unique to dataset so assume is dataset
  let datasetKeys = Object.keys(dataset);
  return ['datapoints', 'units', 'label'].every((k) => datasetKeys.includes(k));
};


describe('datasets selectors', () => {

  let state = fixtureData.datasets;
  let fixtureWidget = fixtureData.widgets[0];
  let fixture = state[0];


  it(`getDatasetsByIds can retrieve a collection of dataset by dataset ids`, () => {
    let datasetIds = fixtureWidget.datasets;
    let expected = getDatasetsByIds(state, datasetIds);
    expect(expected.length).toExist('returns a collection of dataset');

    if (expected.length) {
      let firstDataset = expected[0];
      expect(isDatasetType(firstDataset)).toBe(true, 'collection item is of type dataset');
    }
  });

  it(`getDatasetById can retrieve a dataset by id`, () => {
    let expected = getDatasetById(state, fixture.id);
    expect(expected.id).toBe(fixture.id, 'retrieves the correct dataset');
    expect(isDatasetType(expected)).toBe(true, 'item is of type dataset');
  });

});
