/*global describe,it,beforeAll*/
import expect from 'expect';
import {
  getWidgetById,
  getWidgetsByDashboardId,
  isWidget
} from './../../reducers/widgets';
import fixtures from './../../_fixtures/data';


describe('Widgets Selectors', () => {

  const widgets = fixtures.widgets;
  const widget = widgets[4];
  const dashboards = fixtures.dashboards;
  const dashboard = dashboards[0];

  beforeAll(() => {
    if (!widget) {
      throw new Error('incorrect Widget fixture supplied');
    }
    if (!dashboard) {
      throw new Error('incorrect Dashboard fixture supplied');
    }
  });

  describe('getWidgetById', () => {
    let actual;
    beforeAll(() => {
      actual = getWidgetById(widgets, widget.id);
    });

    it('should retrieve a Widget from an id', () => {
      expect(actual).toBe(widget);
    });

    it('should retrieve the correct Widget', () => {
      expect(actual.name).toBe(widget.name);
    });

    it('should return an item that is of type Widget', () => {
      expect(isWidget(actual)).toBe(true);
    });
  });

  describe('getWidgetsByDashboardId', () => {
    let actual;
    beforeAll(() => {
      actual = getWidgetsByDashboardId(widgets, dashboard.id);
    });

    it('should retrieve a collection of items', () => {
      expect(actual.length).toBeTruthy();
    });

    it('should retrieve a collection of Widget items', () => {
      expect(actual.every((i) => {
        return isWidget(i);
      })).toBe(true);
    });
  });

});
