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

  let formDataBasic = [{value: "222", ts: "2016-11-01T00:00:00.000Z", dataset_id: 20}];
  let responseBasic = {"id":1019,"dataset_id":20,"ts":"2016-11-01T00:00:00.000Z","value":"222.0","created_at":"2017-01-04T21:53:58.024Z","updated_at":"2017-01-04T21:53:58.024Z"};

  beforeEach(() => store = mockStore({
    currentUser: {
      token: 'dskjfjdshf'
    }
  }));

  it('createDatagroupset should return a Promise', () => {
    mockFetch(`${rootUrl}datasets/${20}/datapoints`, 201, JSON.stringify(responseBasic));
    expect(store.dispatch(createDatagroupset(formDataBasic))).toBeA(window.Promise);
  });

  it('createDatagroupset should dispatch an action per set provided', () => {
    mockFetch(`${rootUrl}datasets/${20}/datapoints`, 201, JSON.stringify(responseBasic));
    return store.dispatch(createDatagroupset(formDataBasic))
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

  // mockError

  // test for different variations of formData

});
