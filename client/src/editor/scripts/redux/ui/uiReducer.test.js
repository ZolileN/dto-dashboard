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

  describe('UI_SET_DATAGROUPSET_TRANSACTED', () => {
    it('should handle expected', () => {
      const action = {
        type: types.UI_SET_DATAGROUPSET_TRANSACTED,
        payload: {
          widgetId: 1,
          description: 'this description',
          type: 'this type'
        }
      };
      const outcome = reducer(initialState, action);
      expect(outcome.didTransactDatagroupset).toEqual(action.payload)
    });
  });

  describe('UI_CLEAR_DATAGROUPSET_TRANSACTED', () => {
    it('should handle initial state change', () => {
      const action = {
        type: types.UI_CLEAR_DATAGROUPSET_TRANSACTED
      };
      const outcome = reducer(initialState, action);
      expect(outcome.didTransactDatagroupset).toEqual({})
    });

    it('should handle subsequent state changes ', () => {
      const firstAction = {
        type: types.UI_SET_DATAGROUPSET_TRANSACTED,
        payload: {
          widgetId: 1,
          description: 'this description',
          type: 'this type'
        }
      };
      const firstOutcome = reducer(initialState, firstAction);

      const secondAction = {
        type: types.UI_CLEAR_DATAGROUPSET_TRANSACTED
      };
      const secondOutcome = reducer(firstOutcome, secondAction);
      expect(secondOutcome.didTransactDatagroupset).toEqual({})
    });
  });

});
