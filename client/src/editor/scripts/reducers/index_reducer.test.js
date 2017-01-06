/*global describe,it,beforeEach*/

import expect from 'expect';

import reducer from './index';
import initialState from './../store/initialState';
import * as _types from './../actions/_types';


describe('(Reducers) Root', () => {

  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toInclude(initialState)
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
      type: _types.UPDATE_DATAGROUPSET,
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

});
