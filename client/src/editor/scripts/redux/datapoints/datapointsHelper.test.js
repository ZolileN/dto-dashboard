/*global describe,it,beforeEach*/

import expect from 'expect';
import isNumber from 'lodash/isNumber';


import {
  getDateKey,
  getHeadKey,
  getNextKey,
  getPrevKey,
  getNumMonthsBetweenHeadKeyAndRecentKey,
  computeLabel
} from './datapointsHelper';


describe('(Helpers) Datapoint - datapointsHelper', () => {

  describe('getDateKey', () => {
    it.skip('CHECK THIS IS ACTUALLY WHAT WE WANT');
    // /**
    //  * Humanised date keys such as January 2016 will be "2016-01"
    //  * @param date
    //  */
    // export const getDateKey = date => {
    //   let todayMonthKey = new Date().getMonth() + 1;
    //   todayMonthKey = String(todayMonthKey).length === 1 ? `0${todayMonthKey}` : todayMonthKey;
    //   const todayYearKey = new Date().getFullYear();
    //   return "" + todayYearKey + "-" + todayMonthKey;
    // };
  });

  describe('getHeadKey', () => {
    const key = getHeadKey();

    it('should return a date in the format YYYY-MM', () => {
      expect(/20\d\d-\d\d/.test(key)).toBe(true);
    });

    it('last two digits should return a month index for previous to today', () => {
      let todayMonthIndex = new Date().getMonth();
      let keyMonthIndex = Number(key.slice(-2));
      expect(keyMonthIndex).toBe(todayMonthIndex === 0 ? 12 : todayMonthIndex - 1);
    });

    it('first four digits should return year from month previous to today', () => {
      let todayMonthIndex = new Date().getMonth();
      let todayYear = new Date().getFullYear();
      let keyYear = Number(key.slice(0, 4));
      expect(keyYear).toBe(todayMonthIndex === 0 ? todayYear - 1 : todayYear);
    });
  });

  describe('getNextKey', () => {
    it('should return key in the format \"YYYY-MM\"', () => {
      const headKey = '2016-12';
      const recentKey = '2015-09';
      const nextKey = getNextKey(headKey, recentKey);
      expect(/20\d\d-\d\d/.test(nextKey)).toBe(true);
    });

    it('should return the month after nextKey', () => {
      const headKey = '2016-01';
      const recentKey = '2015-12';
      const nextKey = getNextKey(headKey, recentKey);
      expect(nextKey).toEqual('2016-01');
    });

    it('should return null if recentKey is equal to headKey', () => {
      const headKey = '2016-01';
      const recentKey = '2015-12';
      const nextKey = getNextKey(headKey, recentKey);
      expect(nextKey).toEqual('2016-01');
      const nextNextKey = getNextKey(headKey, nextKey);
      expect(nextNextKey ).toEqual(null);
    });

    it('should throw if recentKey is newer than headKey', () => {
      const headKey = '2016-01';
      const recentKey = '2016-02';
      expect(function () {
        getNextKey(headKey, recentKey)
      }).toThrow();
    });
  });

  describe('getPrevKey', () => {
    const recentKey = '2015-09';
    const prevKey = getPrevKey(recentKey);

    it('should return key in the format \"YYYY-MM\"', () => {
      expect(/20\d\d-\d\d/.test(prevKey)).toBe(true);
    });

    it(`last two digits should return a month index previous to today's`, () => {
      let prevKeyMonthIndex = Number(prevKey.slice(-2));
      let recentKeyIndex = Number(recentKey.slice(-2));
      expect(prevKeyMonthIndex).toBe(recentKeyIndex === 0 ? 12 : recentKeyIndex - 1);
    });

    it(`first four digits should return year previous from today's`, () => {
      let prevKeyYear = Number(prevKey.slice(0, 4));
      let recentKeyMonth = new Date(recentKey).getMonth();
      let recentKeyYear = Number(recentKey.slice(0, 4));
      expect(prevKeyYear).toBe(recentKeyMonth === 0 ? recentKeyYear - 1 : recentKeyYear);
    });
  });

  describe('getNumMonthsBetweenHeadKeyAndRecentKey', () => {
    const recentKey = '2016-11';

    it('should return a number', () => {
      const num = getNumMonthsBetweenHeadKeyAndRecentKey(recentKey);
      expect(isNumber(num)).toBe(true);
    });

    it('should return 2 if recentKey was 2 months from now', () => {
      const todayMonth = new Date().getMonth();
      const todayYear = new Date().getFullYear();

      let recentMonth;
      let recentYear;

      if (todayMonth === 0) {
        recentMonth = 10;
        recentYear = todayYear - 1;
      } else if (todayMonth === 1) {
        recentMonth = 11;
        recentYear = todayYear - 1;
      }

      const recentKey = '' + recentYear + '-' + (String(recentMonth.length > 1) ? recentMonth : "0" + recentMonth);
      const num = getNumMonthsBetweenHeadKeyAndRecentKey(recentKey);
      expect(num).toEqual(2);
    });
  });

  describe('computeLabel', () => {
    it('should return key in the format \"YYYY-MM\"', () => {
      const computed = computeLabel(new Date().getTime());
      expect(/20\d\d-\d\d/.test(computed)).toBe(true);
    });
  });

});
