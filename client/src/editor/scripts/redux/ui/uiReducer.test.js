/*global describe,it*/

import expect from 'expect';

import reducer from './uiReducer';
import {types} from './uiActions';

import initialStoreState from './../initialState';
const initialState = initialStoreState.ui;


describe('(Reducers) UI - uiReducer', () => {

  it('should see no state change if action is invalid', () => {
    const output = reducer({}, {type:'PAT THE KITTEH',payload:{}});
    expect(output).toEqual({});
  });

  describe('UI_SET_LASTVIEWEDWIDGET', () => {
    it('should correctly update a widgetId that is a Number', () => {
      const action = {
        type: types.UI_SET_LASTVIEWEDWIDGET,
        payload: {
          widgetId:100
        }
      };
      const outcome = reducer(undefined, action);
      expect(outcome.lastViewedWidget).toEqual(100);
    });

    it('should correctly update a widgetId that is Null', () => {
      const action = {
        type: types.UI_SET_LASTVIEWEDWIDGET,
        payload: {
          widgetId:null
        }
      };
      const outcome = reducer(undefined, action);
      expect(outcome.lastViewedWidget).toEqual(null);
    });

    it('should correctly update when empty payload is supplied', () => {
      const action = {
        type: types.UI_SET_LASTVIEWEDWIDGET,
        payload: {}
      };
      const outcome = reducer(undefined, action);
      expect(outcome.lastViewedWidget).toEqual(null);
    });
  });

  describe('UI_SET_LASTDATAGROUPSETTRANSACTION', () => {
    it('should correctly update all props supplied', () => {
      const action = {
        type: types.UI_SET_LASTDATAGROUPSETTRANSACTION,
        payload: {
          widgetId: 8,
          description: 'cats are better than dogs',
          type: 'create'
        }
      };
      const outcome = reducer(undefined, action);
      expect(outcome.lastDatagroupsetTransaction).toEqual(action.payload);
    });

    it('should correctly update no props supplied', () => {
      const action = {
        type: types.UI_SET_LASTDATAGROUPSETTRANSACTION,
        payload: {}
      };
      const outcome = reducer(undefined, action);
      expect(outcome.lastDatagroupsetTransaction.widgetId).toBe(null);
      expect(outcome.lastDatagroupsetTransaction.description).toBe(null);
      expect(outcome.lastDatagroupsetTransaction.type).toBe(null);
    });
  });

});
