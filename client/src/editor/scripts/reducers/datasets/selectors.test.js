/*global describe,it,beforeAll*/
import expect from 'expect';

import {
  getDatasetById,
  getDatasetsByIds,
  isDataset
} from './../../reducers/datasets';
import fixtures from './../../_fixtures/data';


describe('Datsets Selectors', () => {

  const datasets = fixtures.datasets;
  const dataset = datasets[4];
  const widgets = fixtures.widgets;
  const widget = widgets[4];

  beforeAll(() => {
    if (!dataset) {
      throw new Error('incorrect Dataset fixture supplied');
    }
    if (!widget || !widget.datasets.length) {
      throw new Error('incorrect Widget fixture supplied')
    }
  });

  describe('getDatasetById', () => {
    let actual;
    beforeAll(() => {
      actual = getDatasetById(datasets, dataset.id);
    });

    it.skip('should retrieve a Dataset from an id', () => {
      expect(actual).toBe(dataset);
    });

    it.skip('should return an item that is of type Dataset', () => {
      expect(isDataset(actual)).toBe(true);
    });
  });


  describe('getDatasetsByIds', () => {
    let actual;
    beforeAll(() => {
      actual = getDatasetsByIds(datasets, widget.datasets);
    });

    it.skip('should retrieve a collection of Dataset items from an array of ids', () => {
      expect(actual.every((i) => {
        return isDataset(i);
      })).toBe(true);
    });

    it.skip('should return an empty collection when supplied with incorrect ids', () => {
      expect(getDatasetsByIds(datasets, ['asa','hdjfgfjsdh'])).toEqual([]);
    });
  });

});
