import expect from 'expect';
import { isObject } from 'lodash';

import {
  getWidgetsByDashboardId,
  getWidgetById
} from './../reducers/widgets';
import fixtureData from './fixtures/data';


/**
 * @param widget {Object}
 * @return {boolean}
 */
const isWidgetType = (widget) => {
  // item is an object
  if (isObject(widget) === false) {
    return false;
  }
  // item matches keys unique to widget so assume is widget
  let widgetKeys = Object.keys(widget);
  return ['row', 'pos', 'type', 'size', 'units'].every((k) => widgetKeys.includes(k));
};


describe('widgets selectors', () => {

  let state = fixtureData.widgets;
  let dashboardFixture = fixtureData.dashboards[0];
  let fixture = state[0];

  it(`getWidgetsByDashboardId can retrieve a collection of widget by its' dashboard id`, () => {
    let dashId = dashboardFixture.id;
    let expectedWidgets = getWidgetsByDashboardId(state, dashId);
    expect(expectedWidgets.length).toExist('returns a collection of widget');

    if (expectedWidgets.length) {
      let firstWidget = expectedWidgets[0];
      expect(isWidgetType(firstWidget)).toBe(true, 'collection item is of type widget');
    }
  });

  it(`getWidgetById can retrieve a widget by id`, () => {
    let expectedWidget = getWidgetById(state, fixture.id);
    expect(expectedWidget.id).toBe(fixture.id, 'retrieves the correct widget');
    expect(isWidgetType(expectedWidget)).toBe(true, 'item is of type widget');
  });

});
