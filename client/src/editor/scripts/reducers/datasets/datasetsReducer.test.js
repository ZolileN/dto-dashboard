/*global describe,it*/

import expect from 'expect';

import {
  isDataset,
  getDatasetById,
  getDatasetsByIds
} from './datasets';
import fixtures from './../../_fixtures/data';


describe('(Reducers) Datasets', () => {
  const datasets = fixtures.datasets;
  const dataset = datasets[0];

  describe('(Helpers)', () => {
    describe('isDataset', () => {
      it('should correctly verify type is Dataset', () => {
        expect(isDataset(dataset)).toEqual(true);
      });
      it('should correctly verify type is not Dataset', () => {
        expect(isDataset(fixtures.widgets[0])).toEqual(false);
        expect(isDataset({})).toEqual(false);
      });
    });
  });

  describe('(Selectors)', () => {
    describe('getDatasetById', () => {
      const state = [{id:1},{id:2}];
      it('should return the correct dataset when supplied id as Number', () => {
        const record = getDatasetById(state, 1);
        expect(record).toBeTruthy();
        expect(record.id).toEqual(1);
      });
      it('should return the correct dataset when supplied id as String', () => {
        const record = getDatasetById(state, '1');
        expect(record).toBeTruthy();
        expect(record.id).toEqual(1);
      });
      it('should return undefined if no dataset is found', () => {
        const record = getDatasetById(state, 100);
        expect(record).toEqual(void 0);
      });
      it('should throw if state provided is not correct type', () => {
        expect(() => {
          getDatasetById({}, 1);
        }).toThrow();
      });
    });

    describe('getDatasetsByIds', () => {
      const state = [{id:1},{id:2},{id:3},{id:4},{id:5},{id:6}];
      it('should return an array of datasets when a single id is supplied', () => {
        const output = getDatasetsByIds(state,[2]);
        expect(output.length).toBe(1);
        expect(output[0].id).toBe(2);
      });
      it('should return an array of datasets when a multiple ids are supplied', () => {
        const output = getDatasetsByIds(state,[2,4,5]);
        expect(output.length).toBe(3);
        expect(output[0].id).toBe(2);
        expect(output[1].id).toBe(4);
        expect(output[2].id).toBe(5);
      });
      it('should throw if state provided is not correct type', () => {
        expect(() => {
          getDatasetsByIds({}, [1]);
        }).toThrow();
      });
      it('should throw if ids provided are not correct type', () => {
        expect(() => {
          getDatasetsByIds({}, 1);
        }).toThrow();
      });
    });
  });
});
