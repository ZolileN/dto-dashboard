import expect from 'expect';

import dashboardReducer from './../reducers/dashboards';
import fixtureData from './fixtures/data';
import * as types from './../actions/_types';


describe('dashboards reducer', () => {

  let state;
  let fixture;

  beforeEach(() => {
    state = [fixtureData.dashboards];
    fixture = state[0];
  });

  afterEach(() => {
  });

  it('Will update an existing dashboard', () => {
    let expectedStateSlice = {...fixture, name:'boo hoo'};
    let actual = dashboardReducer(state, {
      type: types.SET_DASHBOARDS,
      payload: expectedStateSlice
    });
    expect(actual).toInclude(expectedStateSlice, 'can update an existing record on state');

    let actual2 = actual.length;
    let expected2 = state.length;
    expect(actual2).toEqual(expected2, 'after setting state the right amount of records on state remain');
  });

});
