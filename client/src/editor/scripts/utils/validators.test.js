
/*global describe,it,beforeEach*/

import expect from 'expect';

import {
  required,
  notRequired, 
  emptyOrNumeric, 
  emptyOrSeconds, 
  emptyOrPercentile, 
  emptyOrMoney,
} from './validators';


describe('(Utils) - form validators - validators', () => {

  describe('required', () => {
    it('should return valid if a value is provided', () => {
      expect(required('sdsd')).toBe(true);   
      expect(required(1111)).toBe(true);   
    });
    it('should return invalid if no value is provided', () => {
      expect(required()).toBe(false);
    });
  });

  describe('emptyOrNumeric', () => {
    it('should return valid if no value is provided', () => {
      expect(emptyOrNumeric()).toBe(true);
    });
    it('should return valid if a Number value is provided', () => {
      expect(emptyOrNumeric(123213)).toBe(true);
    });
    it('should return valid if a Number String value is provided', () => {
      expect(emptyOrNumeric('1232123')).toBe(true);
    });
    it('should return invalid if a String of text is provided', () => {
      expect(emptyOrNumeric('safasf')).toBe(false);
    });
    it('should return invalid if a mixed String of text and Numbers are provided', () => {
      expect(emptyOrNumeric('233jdgsfh')).toBe(false);
    });
  });

  describe('emptyOrSeconds', () => {
    it('should return valid if no value is provided', () => {
      expect(emptyOrSeconds()).toBe(true);
    });
    it('should return valid if a Number value is provided', () => {
      expect(emptyOrSeconds(123213)).toBe(true);
    });
    it('should return valid if a Number String value is provided', () => {
      expect(emptyOrSeconds('1232123')).toBe(true);
    });
    it('should return invalid if a String of text is provided', () => {
      expect(emptyOrSeconds('safasf')).toBe(false);
    });
    it('should return invalid if a mixed String of text and Numbers are provided', () => {
      expect(emptyOrSeconds('233jdgsfh')).toBe(false);
    });
  });

  describe('emptyOrPercentile', () => {
    it('should return valid if no value is provided', () => {
      expect(emptyOrPercentile()).toBe(true);
    });
    it('should return valid if a Number between 0 and 100 is provided as Number', () => {
      expect(emptyOrPercentile(10)).toBe(true);
      expect(emptyOrPercentile(10.2)).toBe(true);
      expect(emptyOrPercentile(99)).toBe(true);
      expect(emptyOrPercentile(100)).toBe(true);
      expect(emptyOrPercentile(0)).toBe(true);
    });
    it('should return valid if a Number between 0 and 100 is provided as String', () => {
      expect(emptyOrPercentile('10')).toBe(true);
      expect(emptyOrPercentile('10.2')).toBe(true);
      expect(emptyOrPercentile('99')).toBe(true);
      expect(emptyOrPercentile('100')).toBe(true);
      expect(emptyOrPercentile('0')).toBe(true);
    });
    it('should return invalid if a Number less than 0 is provided', () => {
      expect(emptyOrPercentile(-1)).toBe(false);
      expect(emptyOrPercentile('-1')).toBe(false);
    });
    it('should return invalid if a Number greater than 100 is provided', () => {
      expect(emptyOrPercentile(120)).toBe(false);
      expect(emptyOrPercentile('102')).toBe(false);
    });
    it('should return invalid if a text String is provided', () => {
      expect(emptyOrPercentile('cat')).toBe(false);
      expect(emptyOrPercentile('__(@#*)')).toBe(false);
      expect(emptyOrPercentile('null')).toBe(false);
    });
  });

  describe('emptyOrMoney', () => {
    it('should return valid if no value is provided', () => {
      expect(emptyOrMoney()).toBe(true);
    });
    it('should return valid if a plain Number is provided', () => {
      expect(emptyOrMoney(23)).toBe(true);
      expect(emptyOrMoney(23.23)).toBe(true);
    });
    it('should return valid if a Number as a String is provided', () => {
      expect(emptyOrMoney('21321')).toBe(true);
      expect(emptyOrMoney('21321.20')).toBe(true);
    });
    it('should invalidate if a Number is provided to only a single deciaml point', () => {
      expect(emptyOrMoney('21321.2')).toBe(false);
      expect(emptyOrMoney(32.2)).toBe(false);
    });
    it('should return valid if a Number is provided with thousands comma', () => {
      expect(emptyOrMoney('1,000')).toBe(true);
    });
    it('should return valid if a Number is provided with a dollar sign in prefix', () => {
      expect(emptyOrMoney('$234')).toBe(true);
    });
  });

});

