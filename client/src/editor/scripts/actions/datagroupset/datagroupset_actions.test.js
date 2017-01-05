/*global describe,it,beforeEach*/

import expect from 'expect';

import configureStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';

import {mockFetch, mockFetchError} from './../../../../test/utils/testUtils';

import api from './../../api';

const mockStore = configureStore([
  thunkMiddleware.withExtraArgument(api)
]);

import config from './../../config';

const rootUrl = config.API_BASE_URL;


import {createDatagroupset} from './index';

describe('(Actions) Datagroupset', () => {

  let store;

  let basicFormData = [{value: "222", ts: "2016-11-01T00:00:00.000Z", dataset_id: 20}];
  let basic200 = {"id":1019,"dataset_id":20,"ts":"2016-11-01T00:00:00.000Z","value":"222.0","created_at":"2017-01-04T21:53:58.024Z","updated_at":"2017-01-04T21:53:58.024Z"};
  let basic400 = {"code":"some code here","message":"some message here"};

  beforeEach(() => store = mockStore({
    currentUser: {
      token: 'dskjfjdshf'
    }
  }));

  it('createDatagroupset on Success (201) should return a Promise', () => {
    mockFetch(`${rootUrl}datasets/${20}/datapoints`, 201, JSON.stringify(basic200));
    expect(store.dispatch(createDatagroupset(basicFormData))).toBeA(window.Promise);
  });

  it('createDatagroupset on Success (201) think should resolve a success response per set provided', () => {
    mockFetch(`${rootUrl}datasets/${20}/datapoints`, 201, JSON.stringify(basic200));
    return store.dispatch(createDatagroupset(basicFormData))
      .then((data) => {
        expect(data.length).toBe(1, 'expect an array with a single value');
        expect(data[0].dataset_id).toBe(20, 'expect response to have same dataset_id');
        expect(data[0].value).toBe("222.0", 'expect response to have same value');
      })
      .catch((e) => {
        console.error(JSON.stringify(e));
        throw new Error('failed in promise');
      })
  });

  it('createDatagroupset on Input or Validation Error (400) should respond error', () => {
    mockFetchError(`${rootUrl}datasets/${20}/datapoints`, 400, JSON.stringify(basic400));
    return store.dispatch(createDatagroupset(basicFormData))
      .then(() => {
        console.warn('should never get here');
      })
      .catch((e) => {
        expect(e).toBeTruthy();
        // todo - check signature for server errors
        // todo - check signature for error message
      });
  });

  it('createDatagroupset on Not Found Error (404) should respond error', () => {
    mockFetchError(`${rootUrl}datasets/${20}/datapoints`, 404, JSON.stringify(basic400));
    return store.dispatch(createDatagroupset(basicFormData))
      .then(() => {
        console.warn('should never get here');
      })
      .catch((e) => {
        expect(e).toBeTruthy();
        // todo - check signature for server errors
        // todo - check signature for error message
      });
  });

  // todo - test for different variations of formData

});
