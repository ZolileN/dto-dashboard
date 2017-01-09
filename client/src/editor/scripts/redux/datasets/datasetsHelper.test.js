/*global describe,it,beforeEach*/

import expect from 'expect';

import {getHumanisedUnits} from './datasetsHelper';


describe('(Helpers) Datasets - datasetsHelper', () => {

  describe('getHumanisedUnits', () => {
    it('should return \'\' when provided n, s, or i', () => {
      expect(getHumanisedUnits('n')).toEqual('');
      expect(getHumanisedUnits('s')).toEqual('');
      expect(getHumanisedUnits('i')).toEqual('');
    });
    it('should return itself when provided %, or $', () => {
      expect(getHumanisedUnits('%')).toEqual('%');
      expect(getHumanisedUnits('$')).toEqual('$');
    });
    it('should return itself when provided any other value', () => {
      expect(getHumanisedUnits('sdsajdajhsgdjhas')).toEqual('sdsajdajhsgdjhas');
      expect(getHumanisedUnits('__*^Q#')).toEqual('__*^Q#');
    });
  });

});
