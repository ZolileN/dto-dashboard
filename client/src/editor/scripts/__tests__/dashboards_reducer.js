/*global describe,it,beforeAll*/
import expect from 'expect';

import dashboardsReducer, {
  isDashboard,
  getDashboardById
} from './../reducers/dashboards';
import fixtures from './fixtures/data';
import * as types from './../actions/_types';


describe('Dashboards Reducer', () => {

  const dashboards = fixtures.dashboards;
  const dashboard = dashboards[0];

  beforeAll(() => {
    if (!dashboard) {
      throw new Error('incorrect Dashboard fixture supplied');
    }
  });

  it('can handle an unknown issue', () => {
    let initState = [];
    let nextState = dashboardsReducer(initState, {type:'UNKNOWN', payload:{id:1}});
    expect(nextState).toBe(initState);  // toBe expects the *exact same* state
  });

  describe('Update an existing Dashboard', () => {
    let expected,
      nextState;

    beforeAll(() => {
      expected = {...dashboard, name:'boohoo'};
      nextState = dashboardsReducer(dashboards, {
        type: types.UPDATE_DASHBOARD,
        payload: expected
      });
    });

    it.skip('the updated record should have the correct type', () => {
      expect(isDashboard(expected)).toBe(true);
    });
    it.skip('the state should show the correct dashboard was updated', () => {
      expect(nextState).toContain(expected);
    });
    it.skip('an updated record should store the correct property change', () => {
      expect(getDashboardById(nextState, expected.id).name).toBe(expected.name);
    });
    it.skip('the count of dashboards on state should remain unchanged', () => {
      expect(nextState.length).toEqual(dashboards.length);
    });
  });

  describe('Update a non-existing Dashboard', () => {
    let fakeItem,
      nextState;

    beforeAll(() => {
      fakeItem = {id:'3746527345372shgadhasfd2'};
      nextState = dashboardsReducer(dashboards, {
        type: types.UPDATE_DASHBOARD,
        payload: fakeItem
      });
    });

    it.skip('attempt to update a non existing record should fail', () => {
      expect(nextState.map((d) => {
        return d.id;
      }).includes(fakeItem.id)).toBe(false);
    });
    it.skip('the count of dashboards on state should remain unchanged', () => {
      expect(nextState.length).toEqual(dashboards.length);
    })
  });

  describe('Update an existing Dashboard with an object that is not of type Dashboard', () => {
    it.skip('the update should be rejected', () => {});
  });

});
