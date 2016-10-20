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

    let expected = getDatapointsById(state, datapointIds);
    expect(expected.length).toExist('returns a collection of datapoint');

    if (expected.length) {
      let firstDatapoint = expected[0];
      expect(isDatapointType(firstDatapoint)).toBe(true, 'collection item is of type datapoint');
    }
  });

  it(`getDatapointById can retrieve a datapoint by id`, () => {
    let expected = getDatapointById(state, fixture.id);
    expect(expected.id).toBe(fixture.id, 'retrieves the correct datapoint');
    expect(isDatapointType(expected)).toBe(true, 'item is of type datapoint');
  });

});
