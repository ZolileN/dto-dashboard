/*global describe,it*/

import expect from 'expect';

import reducer from './uiReducer';
import * as types from './../../actions/types';

import initialStoreState from './../.././store/initialState';
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

      expect(outcome).toEqual({
        didTransactDatagroupset: action.payload
      })
    });
  });

  describe('UI_CLEAR_DATAGROUPSET_TRANSACTED', () => {
    it('should handle initial state change', () => {
      const action = {
        type: types.UI_CLEAR_DATAGROUPSET_TRANSACTED
      };
      const outcome = reducer(initialState, action);
      expect(outcome).toEqual(initialState)
    });

    it('should handle subsequent state changes ', () => {
      const state = {
        didTransactDatagroupset: {
          widgetId: 1,
          description: 'this description',
          type: 'this type'
        }
      };
      const action = {
        type: types.UI_CLEAR_DATAGROUPSET_TRANSACTED
      };
      const outcome = reducer(state, action);
      expect(outcome).toEqual(initialState)
    });
  });



  //UI_CLEAR_DATAGROUPSET_TRANSACTED

});
