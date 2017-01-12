/*global describe,it,beforeEach*/

import expect from 'expect';
import {isArray, without} from 'lodash'

import reducer, {
  isDatagroupset,
  isDatagroupsetSlice,
  getDatagroupset,
  getDatagroupsets,
  getDatagroupsetSlice,
  getDatagroupsetSlices,
  filterDatagroupsetByHeroWidget,
  filterDatagroupsetsByBtlWidgets
} from './rootReducer';
import initialState from './../initialState';
import {types as datagroupsetActionTypes} from './../datagroupset/datagroupsetActions';

import fixtures from './../../../../test/fixtures/jbuilder-all';


describe('(Reducers) Root - rootReducer', () => {

  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toInclude(initialState)
  });

  it('should see no state change if action is invalid', () => {
    const output = reducer(initialState, {type:'PAT THE KITTEH',payload:{}});
    expect(output).toEqual(initialState);
  });

});


describe('(Reducers) Datagroupset', () => {

  it('should handle UPDATE_DATAGROUPSET', () => {
    let state = {...initialState, ...{
      datapoints: [
        {id:1},
      ],
      datasets: [
        {id:1,datapoints:[]},
        {id:2,datapoints:[1]}
      ]
    }};

    const action = {
      type: datagroupsetActionTypes.UPDATE_DATAGROUPSET,
      payload: {
        datapoint: {
          id:2,
          value:'cat datapoint'
        },
        dataset: {
          id:2,
          datapoint_id:2
        }
      }
    };

    const output = reducer(state, action);

    expect(output.datapoints[1].value).toBe('cat datapoint');
    expect(output.datasets[1].datapoints).toEqual([1,2]);
  });


  describe('(Helpers)', () => {
    describe('isDatagroupset', () => {
      it('should return true if the correct record is passed', () => {
        const sampleCorrectSimple = { type: 'simple',
          widget: {},
          groups: [],
          hasHead: false,
          headKey: '2016-12',
          hasRecent: null,
          recentKey: null };
        const sampleCorrectTimeSeries = { type: 'time-series',  // todo - improve this sample
          widget: {id:1},
          groups: [{dataset:{id:1}, datapoints:[]}],
          hasHead: false,
          headKey: '2016-12',
          hasRecent: null,
          recentKey: null };

        expect(isDatagroupset(sampleCorrectSimple)).toBe(true);
        expect(isDatagroupset(sampleCorrectTimeSeries)).toBe(true);
      });

      it('should return false if the incorrect record is passed', () => {
        const sampleIncorrect = fixtures.dashboards[0];
        expect(isDatagroupset(sampleIncorrect)).toBe(false);
      });
    });

    describe('isDatagroupsetSlice', () => {
      it.skip('todo');
    });
  });


  describe('(Selectors)', () => {

    describe('getDatagroupset', () => {
      it('should return an empty record if no widget is provided', () => {
        const datagroupset = getDatagroupset(fixtures, {});
        expect(isDatagroupset(datagroupset)).toBe(true);
        expect(isArray(datagroupset.groups)).toBe(true);
      });

      it('should return empty this.groups if widget does not have datasets', () => {
        let datagroupset = getDatagroupset(fixtures, {id:1,datasets:[]});
        expect(datagroupset.groups.length).toEqual(0);
      });

      it('should return empty this.groups if widget has an invalid dataset', () => {
        let datagroupset = getDatagroupset(fixtures, {id:1,datasets:[9999999999999]});
        expect(datagroupset.groups.length).toEqual(1);
        expect(without(datagroupset.groups, null).length).toEqual(0);
      });

      it('should return empty this.groups if widget has an invalid dataset of datasets', () => {
        let datagroupset = getDatagroupset(fixtures, {id:1,datasets:[55,9999999999999]});
        expect(datagroupset.groups.length).toEqual(2);
        expect(without(datagroupset.groups, null).length).toEqual(1);
      });

      it.skip('test head key and recent keys');

      describe('type:simple', () => {
        // todo - api should provide "time type" instead of this assumption
        it('should return a datagroupset with type:simple when supplied a widget without datasets', () => {
          const datagroupset = getDatagroupset(fixtures, {id:1,datasets:[]});
          expect(datagroupset.type).toEqual('simple');
        });
      });

      describe('type:time-series', () => {
        // todo - api should provide "time type" instead of this assumption
        it('should return a datagroupset with type:time-series when supplied a widget with valid datasets', () => {
          const datagroupset = getDatagroupset(fixtures, {id:1,datasets:[55,56]});
          expect(datagroupset.type).toEqual('time-series');
        });
      });
    });

    describe('getDatagroupsets', () => {
      it('should throw if widgets param is not Array', () => {
        expect(function () {
          getDatagroupsets(fixtures, {})
        }).toThrow();
      });
      it('should return array of datagroupsets', () => {
        const result = getDatagroupsets(fixtures, [fixtures.widgets[1]]);
        expect(isDatagroupset(result[0])).toBe(true);
        expect(isArray(result)).toBe(true);
      });
    });

    describe('getDatagroupsetSlice', () => {
      it('should return expected datagroupset type', () => {
        const datagroupset = getDatagroupset(fixtures, fixtures.widgets[1]);
        const datagroupsetSlice = getDatagroupsetSlice(datagroupset, '2016-11');
        expect(isDatagroupsetSlice(datagroupsetSlice)).toBe(true);
      });
    });

    describe('getDatagroupsetSlices', () => {
      it.skip('should return type Array', () => {
        const datagroupset1 = getDatagroupset(fixtures, fixtures.widgets[1]);
        const datagroupset2 = getDatagroupset(fixtures, fixtures.widgets[2]);
        const datagroupset3 = getDatagroupset(fixtures, fixtures.widgets[3]);
        expect(isArray(getDatagroupsetSlices([datagroupset1, datagroupset2, datagroupset3]))).toBe(true);
      });
    });

    describe('filterDatagroupsetByHeroWidget', () => {
      it.skip('should for a group of datagroupsets, only return the datagroupset for hero widget', () => {});
    });

    describe('filterDatagroupsetsByBtlWidgets', () => {
      it.skip('should for a group of datagroupsets return all the below the line charts', () => {});
    });
  });

});
