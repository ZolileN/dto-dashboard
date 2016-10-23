/*global describe,it,beforeAll,afterEach*/
import expect from 'expect';

import uiReducer from './../reducers/ui';
import {
  editFormAtDashboardPage,
  editFormAtDashboardWidgetPage,
  editFormAtDatasetPage,
  editFormAtDatasetDatapointPage,
  editFormAtDatasetDatapointCreatePage
} from './../actions/ui';
import fixtures from './fixtures/data';
import initState from './../store/initialState';


describe('Ui Reducer', () => {

  const ui = fixtures.ui;

  const testSetIseditingOnce = (domain, actionCreator, val) => {
    let actual = uiReducer(ui, actionCreator(val));
    expect(Object.keys(actual).length).toEqual(Object.keys(ui).length, 'verify that the state shape remains in tact');
    expect(actual[domain]).toExist();
    expect(actual[domain].isEditing).toBe(true);
  };
  const testSetIseditingTwice = (domain, actionCreator, val1, val2) => {
    let actual = uiReducer(ui, actionCreator(val1));
    actual = uiReducer(ui, actionCreator(val2));
    expect(actual[domain].isEditing).toBe(val2);
  };


  it('can handle an unknown issue', () => {
    let nextState = uiReducer(initState.ui, {type:'UNKNOWN', payload:{id:1}});
    expect(nextState).toBe(initState.ui);  // toBe expects the *exact same* state
  });

  describe('Dashboard Page', () => {
    it('should set pageDashboard isEditing to true', () => {
      testSetIseditingOnce('pageDashboard', editFormAtDashboardPage, true);
    });
    it('should set pageDashboard isEditing to true after setting to false', () => {
      testSetIseditingTwice('pageDashboard', editFormAtDashboardPage, true, false);
    });
  });

  describe('DashboardWidget Page', () => {
    it('should set pageDashboardWidget isEditing to true', () => {
      testSetIseditingOnce('pageDashboardWidget', editFormAtDashboardWidgetPage, true);
    });
    it('should set pageDashboardWidget isEditing to true after setting to false', () => {
      testSetIseditingTwice('pageDashboardWidget', editFormAtDashboardWidgetPage, true, false);
    });
  });

  describe('Dataset Page', () => {
    it('should set pageDataset isEditing to true', () => {
      testSetIseditingOnce('pageDataset', editFormAtDatasetPage, true);
    });
    it('should set pageDataset isEditing to true after setting to false', () => {
      testSetIseditingTwice('pageDataset', editFormAtDatasetPage, true, false);
    });
  });

  describe('DatasetDatapoint Page', () => {
    it('should set pageDatasetDatapoint isEditing to true', () => {
      testSetIseditingOnce('pageDatasetDatapoint', editFormAtDatasetDatapointPage, true);
    });
    it('should set pageDatasetDatapoint isEditing to true after setting to false', () => {
      testSetIseditingTwice('pageDatasetDatapoint', editFormAtDatasetDatapointPage, true, false);
    });
  });

  describe('DatasetDatapointCreate Page', () => {
    it('should set pageDatasetDatapointCreate isEditing to true', () => {
      testSetIseditingOnce('pageDatasetDatapointCreate', editFormAtDatasetDatapointCreatePage, true);
    });
    it('should set pageDatasetDatapointCreate isEditing to true after setting to false', () => {
      testSetIseditingTwice('pageDatasetDatapointCreate', editFormAtDatasetDatapointCreatePage, true, false);
    });
  });

});
