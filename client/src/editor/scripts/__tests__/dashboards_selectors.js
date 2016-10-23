/*global describe,it,beforeAll*/
import expect from 'expect';

import {
  getDashboardById,
  isDashboard
} from './../reducers/dashboards';
import fixtures from './fixtures/data';


describe('Dashboards Selectors', () => {

  const dashboards = fixtures.dashboards;
  const dashboard = dashboards[0];

  beforeAll(() => {
    if (!dashboard) {
      throw new Error('incorrect Dashboard fixture supplied');
    }
  });

  describe('getDashboardById', () => {
    let actual;
    beforeAll(() => {
      actual = getDashboardById(dashboards, dashboard.id);
    });

    it('should retrieve a Dashboard from an id', () => {
      expect(actual).toBe(dashboard);
    });

    it('should return an item that is of type Dashboard', () => {
      expect(isDashboard(actual)).toBe(true);
    });
  });

});
