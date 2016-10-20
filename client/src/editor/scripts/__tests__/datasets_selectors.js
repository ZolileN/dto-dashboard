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
    let actual = getDatasetsByIds(state, datasetIds);

    let actual1 = actual.length;
    expect(actual1).toExist('returns a collection of dataset');

    if (actual.length) {
      let firstDataset = actual[0];

      let actual2 = isDatasetType(firstDataset);
      let expected2 = true;
      expect(actual2).toEqual(expected2, 'collection item is of type dataset');
    }
  });

  it(`getDatasetById can retrieve a dataset by id`, () => {
    let actual = getDatasetById(state, fixture.id);

    let actual1 = actual.id;
    let expected1 = fixture.id;
    expect(actual1).toEqual(expected1, 'retrieves the correct dataset');

    let actual2 = isDatasetType(actual);
    let expected2 = true;
    expect(actual2).toEqual(expected2, 'item is of type dataset');
  });

});
