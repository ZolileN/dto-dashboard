/*global describe,it,beforeAll*/
import expect from 'expect';

import widgetsReducer from './../reducers/widgets';
import * as types from './../actions/_types';
import fixtures from './fixtures/data';


describe('Widgets Reducer', () => {

  const widgets = fixtures.widgets;
  const widget = widgets[0];


  describe('UPDATE a widget', () => {
    let newState,
      actual;

    beforeAll(() => {
      actual = {...widget, name:'CATS'};
      newState = widgetsReducer(widgets, {
        type: types.UPDATE_WIDGET,
        payload: actual
      });
    });

    it('can handle an unknown issue', () => {
      let initState = [];
      let nextState = widgetsReducer(initState, {type:'UNKNOWN', payload:{id:1}});
      expect(nextState).toBe(initState);  // toBe expects the *exact same* state
    });

    it.skip('should have updated the correct property on the correct Widget', () => {});

    it.skip('should not have changed the number of Widgets on the supplied state', () => {});

  });

});
