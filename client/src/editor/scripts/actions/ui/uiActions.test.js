/*global describe,it*/

import expect from 'expect';

import {setDatagroupsetTransacted, clearDatagroupsetTransacted} from './uiActions';


describe('(Actions) UI - uiActions', () => {

  describe('setDatagroupsetTransacted', () => {
    it('should set the correct properties', () => {
      const props = {widgetId:1, description:'elo', type:'first'};
      expect(setDatagroupsetTransacted(props).payload).toEqual(props);
    });
  });

  describe('clearDatagroupsetTransacted', () => {
    it('should set the correct properties', () => {
      const props = {};
      expect(clearDatagroupsetTransacted(props).payload).toEqual();
    });
  });

});
