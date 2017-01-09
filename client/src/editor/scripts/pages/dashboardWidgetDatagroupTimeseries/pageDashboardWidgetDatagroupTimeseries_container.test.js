/*global describe,beforeAll,it */
import expect from 'expect';

import React from 'react';
import {createRenderer} from 'react-addons-test-utils';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import {mount} from 'enzyme';

import initialState from './../../redux/initialState';
import Container from './pageDashboardWidgetDatagroupTimeseries_container';

const mockStore = configureStore();


describe('(Component) Dashboard Widget Datagroup Timeseries Page - pageDashboardWidgetDatagroupTimeseries_container', () => {

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

  // todo - need to test the rootReducer datagroupset stuff first
  it.skip('should render as a connected component without exploding', () => {
    const instance = buildSubject(
      {
      },
      {
        params: {
          dashboard_id:1,
          datagroup_key:'16-01',
          widget_id:1
        },
        dashboard: {id:1},
        widget: {id:1},
        datagroupsetSlice: {
          datapoint: {},
          dataset: {}
        }
      }
    );
    expect(instance.exists()).toBe(true);
  });

});
