import expect from 'expect';
import { isObject } from 'lodash';

import {
  getDatapointById,
  getDatapointsById
} from './../reducers/datapoints';
import fixtureData from './fixtures/data';


/**
 * @param datapoint {Object}
 * @return {boolean}
 */
let isDatapointType = (datapoint) => {
  // item is an object
  if (isObject(datapoint) === false) {
    return false;
  }
  // item matches keys unique to datapoint so assume is datapoint
  let datapointKeys = Object.keys(datapoint);
  return ['label', 'ts', 'value'].every((k) => datapointKeys.includes(k));
};



describe('datapoints selectors', () => {

  let state = fixtureData.datapoints;
  let fixtureDataset = fixtureData.datasets[4];
  let fixture = state[0];

  it(`getDatapointsById can retrieve a collection of datapoint by datapoint ids`, () => {
    let datapointIds = fixtureDataset.datapoints;

    if (!datapointIds) {
      throw new Error('fixtureDatasets has not datapoints.')
    }

    let actual = getDatapointsById(state, datapointIds);

    let actual1 = actual.length;
    expect(actual1).toExist('returns a collection of datapoint');

    if (actual.length) {
      let actual2 = isDatapointType(actual[0]);
      let expected2 = true;
      expect(actual2).toEqual(expected2, 'collection item is of type datapoint');
    }
  });

  it(`getDatapointById can retrieve a datapoint by id`, () => {
    let actual = getDatapointById(state, fixture.id);

    let actual1 = actual.id;
    let expected1 = fixture.id;
    expect(actual1).toEqual(expected1, 'retrieves the correct datapoint');

    let actual2 = isDatapointType(actual);
    let expected2 = true;
    expect(actual2).toEqual(expected2, 'item is of type datapoint');
  });

});
