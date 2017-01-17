
/* global describe,it */

import expect from 'expect';

import {formatCurrency2dp} from './formatCurrency';


describe(`(Util) Format Currency - formatCurrency`, () => {

  describe('formatCurrency2dp', () => {
    it('should return string with any number of non decimal integers followed by 2 decimal integers', () => {
      const formatted = formatCurrency2dp(2);
      expect(/\d+?(\.\d\d$)/.test(formatted)).toBe(true);
    });
  });

});
