/*global describe,it,beforeAll*/
import expect from 'expect';
import {
  getDatapointById,
  getDatapointsById,
  isDatapoint
} from './../../reducers/datapoints';
import fixtures from './../../_fixtures/data';


describe('Datapoints Selectors', () => {

  const datapoints = fixtures.datapoints;
  const datapoint = datapoints[4];
  const datasets = fixtures.datasets;
  const dataset = datasets[10];

  beforeAll(() => {
    if (!datapoint) {
      throw new Error('incorrect Datapoint fixture supplied');
    }
    if (!dataset || !dataset.datapoints.length) {
      throw new Error('incorrect Dataset fixture supplied');
    }
  });

  describe('getDatapointById', () => {
    let actual;
    beforeAll(() => {
      actual = getDatapointById(datapoints, datapoint.id);
    });

    it('should retrieve a Datapoint from an id', () => {
      expect(actual).toBe(datapoint);
    });

    it('should retrieve the correct Datapoint', () => {
      expect(actual.ts).toBe(datapoint.ts);
    });

    it('should return an item that is of type Datapoint', () => {
      expect(isDatapoint(actual)).toBe(true);
    });
  });

  describe('getDatapointsById', () => {
    let actual;
    beforeAll(() => {
      actual = getDatapointsById(datapoints, dataset.datapoints);
    });

    it('should retrieve a collection of items', () => {
      expect(actual.length).toBeTruthy();
    });

    it('should retrieve a collection of Datapoint items', () => {
      expect(actual.every((i) => {
        return isDatapoint(i);
      })).toBe(true);
    });
  });

});
