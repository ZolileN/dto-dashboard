/*global describe,it*/

import expect from 'expect';

import {
  setLastViewedWidget,
  setLastDatagroupsetTransaction
} from './uiActions';


describe('(Actions) UI - uiActions', () => {

  describe('setLastViewedWidget', () => {
    it('should set the correct properties from a payload', () => {
      const props = {widgetId:1};
      expect(setLastViewedWidget(props).payload).toEqual(props);
    });
  });

  describe('setLastDatagroupsetTransaction', () => {
    it('should set the correct properties from a payload', () => {
      const props = {widgetId:1,description:'ca',type:'create'};
      expect(setLastDatagroupsetTransaction(props).payload).toEqual(props);
    });
  });

});
