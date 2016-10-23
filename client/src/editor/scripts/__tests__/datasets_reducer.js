/*global describe,it,beforeAll*/
import expect from 'expect';

import datasetsReducer from './../reducers/datasets';
import * as types from './../actions/_types';
import fixtures from './fixtures/data';


describe('Datasets Reducer', () => {

  const datasets = fixtures.datasets;
  const dataset = datasets[0];


  describe('UPDATE a dataset', () => {
    let newState,
      actual;

    beforeAll(() => {
      actual = {...dataset, label:734278364};
      newState = datasetsReducer(datasets, {
        type: types.UPDATE_DATASET,
        payload: actual
      });
    });

    it('can handle an unknown issue', () => {
      let initState = [];
      let nextState = datasetsReducer(initState, {type:'UNKNOWN', payload:{id:1}});
      expect(nextState).toBe(initState);  // toBe expects the *exact same* state
    });

    it.skip('should have updated the correct property on the correct Dataset', () => {});

    it.skip('should not have changed the number of Datasets on the supplied state', () => {});

  });

});
