/*global describe,it,beforeEach*/

import expect from 'expect';

import reducer from './rootReducer';
import initialState from './../initialState';
import {types as datagroupsetActionTypes} from './../datagroupset/datagroupsetActions';


describe('(Reducers) Root', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toInclude(initialState)
  });
});


describe('(Reducers) Datagroupset', () => {

  it('should see no state change if action is invalid', () => {
    const output = reducer(initialState, {type:'PAT THE KITTEH',payload:{}});
    expect(output).toEqual(initialState);
  });

  it('should handle UPDATE_DATAGROUPSET', () => {
    let state = {...initialState, ...{
      datapoints: [
        {id:1},
      ],
      datasets: [
        {id:1,datapoints:[]},
        {id:2,datapoints:[1]}
      ]
    }};

    const action = {
      type: datagroupsetActionTypes.UPDATE_DATAGROUPSET,
      payload: {
        datapoint: {
          id:2,
          value:'cat datapoint'
        },
        dataset: {
          id:2,
          datapoint_id:2
        }
      }
    };

    const output = reducer(state, action);

    expect(output.datapoints[1].value).toBe('cat datapoint');
    expect(output.datasets[1].datapoints).toEqual([1,2]);
  });


  describe('(Selectors)', () => {
    describe('getDatagroupset', () => {
      it.skip('todo');
    });
    describe('getDatagroupsets', () => {
      it.skip('todo');
    });
    describe('getDatagroupsetSlice', () => {
      it.skip('todo');
    });
    describe('getDatagroupsetSlices', () => {
      it.skip('todo');
    });
    describe('filterDatagroupsetByHeroWidget', () => {
      it.skip('todo');
    });
    describe('filterDatagroupsetsByBtlWidgets', () => {
      it.skip('todo');
    });
  });

});
