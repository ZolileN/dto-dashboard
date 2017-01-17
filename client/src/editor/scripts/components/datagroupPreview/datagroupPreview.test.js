
/* global describe,it */

import expect from 'expect';

import {formatValue} from './datagroupPreview';


describe('(Component) Datagroup Preview - datagroupPreview', () => {

  describe('formatValue', () => {
    it('should return null if no value provided', () => {
      expect(formatValue()).toBe(null);
      expect(formatValue(void 0)).toBe(null);
      expect(formatValue(null,'%')).toBe(null);
    });

  });

});
