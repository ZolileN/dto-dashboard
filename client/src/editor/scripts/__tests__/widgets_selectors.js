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
    let actual = getWidgetsByDashboardId(state, dashId);

    let actual1 = actual.length;
    expect(actual1).toExist('returns a collection of widget');

    if (actual.length) {
      let actual2 = isWidgetType(actual[0]);
      let expected2 = true;
      expect(actual2).toEqual(expected2, 'collection item is of type widget');
    }
  });

  it(`getWidgetById can retrieve a widget by id`, () => {
    let actual = getWidgetById(state, fixture.id);

    let actual1 = actual.id;
    let expected1 = fixture.id;
    expect(actual1).toEqual(expected1, 'retrieves the correct widget');

    let actual2 = isWidgetType(actual);
    let expected2 = true;
    expect(actual2).toEqual(expected2, 'item is of type widget');
  });

});
