/*global describe,it*/

import expect from 'expect';

import {isDashboard, getDashboardById} from './dashboardsReducer';
import fixtures from './../../_fixtures/data';


describe('(Reducers) Dashboard', () => {
  const dashboards = fixtures.dashboards;
  const dashboard = dashboards[0];

  describe('(Helpers)', () => {
    describe('isDashboard', () => {
      it('should correctly verify type is Dashboard', () => {
        expect(isDashboard(dashboard)).toEqual(true);
      });
      it('should correctly verify type is not Dashboard', () => {
        expect(isDashboard(fixtures.widgets[0])).toEqual(false);
        expect(isDashboard({})).toEqual(false);
      });
    });
  });

  describe('(Selectors)', () => {
    describe('getDashboardById', () => {
      const state = [{id:1},{id:2}];
      it('should return the correct dashboard when supplied id as Number', () => {
        const record = getDashboardById(state, 1);
        expect(record).toBeTruthy();
        expect(record.id).toEqual(1);
      });
      it('should return the correct dashboard when supplied id as String', () => {
        const record = getDashboardById(state, '1');
        expect(record).toBeTruthy();
        expect(record.id).toEqual(1);
      });
      it('should return undefined if no dashboard is found', () => {
        const record = getDashboardById(state, 100);
        expect(record).toEqual(void 0);
      });
      it('should throw if state provided is not correct type', () => {
        expect(() => {
          getDashboardById({}, 1);
        }).toThrow();
      });
    });
  });
});
