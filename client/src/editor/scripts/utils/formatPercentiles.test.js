
/* global describe,it */

import expect from 'expect';

import {formatPercentile2dp} from './formatPercentiles';


describe(`(Util) Format Percentiles - formatPercentiles`, () => {

  describe('formatPercentile2dp', () => {
    it('should return string with any number of non decimal integers followed by 2 decimal integers', () => {
      const formatted = formatPercentile2dp(2);
      expect(/\d+?(\.\d\d$)/.test(formatted)).toBe(true);
    });
  });

});
