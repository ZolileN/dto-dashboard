
/* global describe,it */

import React from 'react';
import expect from 'expect';
import {createRenderer} from 'react-addons-test-utils';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import {mount} from 'enzyme';

const mockStore = configureStore();

import initialState from './../../../redux/initialState';
import Container from './formCreateDatagroupset_container';


describe('(Container) Form Create Datagroupset - formCreateDatagroupset_container', () => {

  const buildSubject = (mergeWithState = {}, props = {}) => {
    const ConnectedApp = () => (
      <Provider store={mockStore({...initialState, ...mergeWithState})}>
        <Container {...props} />
      </Provider>
    );
    // create a *deep* render of the Container
    return mount(<ConnectedApp />);
  };

  it('should render as a normal component without exploding', () => {
    // create a *shallow* render of the page
    const wrapper = createRenderer(<Container />, {context: {store: mockStore()}});
    expect(wrapper).toBeTruthy();
  });

  it('should render as a connected component without exploding', () => {
    const instance = buildSubject(
      {},
      {
        formModel: {  // datagroupsetSlice
          type: 'time-series',
          widget: {id:1},
          groups: [
            {dataset: {}, datapoints: []}
          ],
          hasHead: false,
          headKey: '2016-12',
          hasRecent: null,
          recentKey: null,
          sliceKey: '2016-11',         // key requested at slice time
          slicePrevKey: '2016-10',
          sliceNextKey: '2016-12',
          sliceLastUpdated: '2016-12'
        },
        formMetadata: {},
        canSubmit: true,
        dashboard_id: 4
      }
    );
    expect(instance.exists()).toBe(true);
  });

});
