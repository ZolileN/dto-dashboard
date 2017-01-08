/*global describe,it*/

import expect from 'expect';

import {
  isDatapoint,
  getDatapointById,
  getDatapointsByIds
} from './datapointsReducer';
import fixtures from './../../_fixtures/data';


describe('(Reducers) Datapoints', () => {
  const datapoints = fixtures.datapoints;
  const datapoint = datapoints[0];

  describe('(Helpers)', () => {
    describe('isDatapoint', () => {
      it('should correctly verify type is Datapoint', () => {
        expect(isDatapoint(datapoint)).toEqual(true);
      });
      it('should correctly verify type is not Datapoint', () => {
        expect(isDatapoint(fixtures.widgets[0])).toEqual(false);
        expect(isDatapoint({})).toEqual(false);
      });
    });
  });

  describe('(Selectors)', () => {
    describe('getDatapointById', () => {
      const state = [{id:1},{id:2}];
      it('should return the correct datapoint when supplied id as Number', () => {
        const record = getDatapointById(state, 1);
        expect(record).toBeTruthy();
        expect(record.id).toEqual(1);
      });
      it('should return the correct datapoint when supplied id as String', () => {
        const record = getDatapointById(state, '1');
        expect(record).toBeTruthy();
        expect(record.id).toEqual(1);
      });
      it('should return undefined if no datapoint is found', () => {
        const record = getDatapointById(state, 100);
        expect(record).toEqual(void 0);
      });
      it('should throw if state provided is not correct type', () => {
        expect(() => {
          getDatapointById({}, 1);
        }).toThrow();
      });
    });

    describe('getDatapointsByIds', () => {
      const state = [{id:1},{id:2},{id:3},{id:4},{id:5},{id:6}];
      it('should return an array of datapoints when a single id is supplied', () => {
        const output = getDatapointsByIds(state,[2]);
        expect(output.length).toBe(1);
        expect(output[0].id).toBe(2);
      });
      it('should return an array of datapoints when a multiple ids are supplied', () => {
        const output = getDatapointsByIds(state,[2,4,5]);
        expect(output.length).toBe(3);
        expect(output[0].id).toBe(2);
        expect(output[1].id).toBe(4);
        expect(output[2].id).toBe(5);
      });
      it('should throw if state provided is not correct type', () => {
        expect(() => {
          getDatapointsByIds({}, [1]);
        }).toThrow();
      });
      it('should throw if ids provided are not correct type', () => {
        expect(() => {
          getDatapointsByIds({}, 1);
        }).toThrow();
      });
    });
  });
});
