import expect from 'expect';
import { isObject } from 'lodash';

import { getDashboardById } from './../reducers/dashboards';
import fixtureData from './fixtures/data';


/**
 * @param dashboard {Object}
 * @return {boolean}
 */
let isDashboardType = (dashboard) => {
  // item is an object
  if (isObject(dashboard) === false) {
    return false;
  }
  // item matches keys unique to dashboard so assume is dashboard
  let dashboardKeys = Object.keys(dashboard);
  return ['name', 'target_users', 'url'].every((k) => dashboardKeys.includes(k));
};


describe('dashboards selectors', () => {

  let state = fixtureData.dashboards;
  let fixture = state[0];

  it(`getDashboardById can retrieve a dashboard by id`, () => {
    let dashboard = getDashboardById(state, fixture.id);

    let actual1 = dashboard.id;
    let expected1 = fixture.id;
    expect(actual1).toBe(expected1, 'retrieves the correct dashboard');

    let actual2 = isDashboardType(dashboard);
    let expected2 = true;
    expect(actual2).toEqual(expected2, 'item is of type dashboard');
  });

});
