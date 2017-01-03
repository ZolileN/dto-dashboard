/*global describe,it,beforeAll,afterEach*/
import expect from 'expect';

import uiReducer from './../../reducers/ui';
import fixtures from './../../__tests__/fixtures/data';
import initState from './../../store/initialState';


describe('Ui Reducer', () => {

  const ui = fixtures.ui;

  it('can handle an unknown issue', () => {
    let nextState = uiReducer(initState.ui, {type:'UNKNOWN', payload:{id:1}});
    expect(nextState).toBe(initState.ui);  // toBe expects the *exact same* state
  });

});
