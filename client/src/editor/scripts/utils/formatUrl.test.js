
/* global describe,it */

import expect from 'expect';

import {
  getDashboardUrl,
  getDashboardWidgetsUrl,
  getDashboardWidgetDatagroupSimpleUrl,
  getDashboardWidgetDatagroupTimeSeriesUrl,
  getDashboardWidgetDescriptionsUrl,
  getServiceDashboardUrl,
  getServiceDashboardUrlAnchor
} from './formatUrl';


describe(`(Util) Format Url - formatUrl`, () => {

  describe('getDashboardUrl', () => {
    it('should return null if no param is provided', () => {
      expect(getDashboardUrl()).toBe(null);
    });
    it('should return correctly formatted url when dashboardId is provided', () => {
      const url1 = getDashboardUrl('324');
      const url2 = getDashboardUrl(324);
      expect(/\/dashboards\/324$/.test(url1)).toBe(true);
      expect(/\/dashboards\/324$/.test(url2)).toBe(true);
    });
  });

  describe('getDashboardWidgetsUrl', () => {
    it('should return null if no param is provided', () => {
      expect(getDashboardWidgetsUrl()).toBe(null);
    });
    it('should return correctly formatted url when dashboardId is provided', () => {
      const url = getDashboardWidgetsUrl('324');
      expect(/\/dashboards\/324\/widgets$/.test(url)).toBe(true);
    });
  });

  describe('getDashboardWidgetDatagroupSimpleUrl', () => {
    it('should return null if no param is provided', () => {
      expect(getDashboardWidgetDatagroupSimpleUrl()).toBe(null);
    });
    it('should return correctly formatted url when dashboardId and widgetId are provided', () => {
      const url = getDashboardWidgetDatagroupSimpleUrl(324, 12);
      expect(/\/dashboards\/324\/widgets\/12\/datagroup-simple/.test(url)).toBe(true);
    });
  });

  describe('getDashboardWidgetDatagroupTimeSeriesUrl', () => {
    it('should return null if no param is provided', () => {
      expect(getDashboardWidgetDatagroupTimeSeriesUrl()).toBe(null);
    });
    it('should return correctly formatted url when dashboardId and widgetId and dataroupKey are provided', () => {
      const url = getDashboardWidgetDatagroupTimeSeriesUrl('324', 12, '16-10');
      expect(/\/dashboards\/324\/widgets\/12\/datagroup-timeseries\/16-10/.test(url)).toBe(true);
    });
  });

  describe('getDashboardWidgetDescriptionsUrl', () => {
    it('should return null if no param is provided', () => {
      expect(getDashboardWidgetDescriptionsUrl()).toBe(null);
    });
    it('should return correctly formatted url when dashboardId and widgetId are provided', () => {
      const url = getDashboardWidgetDescriptionsUrl(324, 12);
      expect(/\/dashboards\/324\/widgets\/12\/descriptions/.test(url)).toBe(true);
    });
  });

  describe('getServiceDashboardUrl', () => {
    it('should return null if no param is provided', () => {
      expect(getServiceDashboardUrl()).toBe(null);
    });
    it('should return correctly formatted url when dashboardId and dashboardName are provided', () => {
      const url = getServiceDashboardUrl(3, 'myGov');
      expect(/\/dashboards\/3-mygov/.test(url)).toBe(true);
    });
    it.skip('test regex parsing');
  });

  describe('getServiceDashboardUrlAnchor', () => {
    it('should return null if no param is provided', () => {
      expect(getServiceDashboardUrlAnchor()).toBe(null);
    });
    it('should return correctly formatted url when dashboardId is provided', () => {
      const url = getServiceDashboardUrlAnchor(3, 'myGov', 'Best Chart Ever');
      expect(/\/dashboards\/3-mygov#best-chart-ever/.test(url)).toBe(true);
    });
    it.skip('test regex parsing');
  });

});








