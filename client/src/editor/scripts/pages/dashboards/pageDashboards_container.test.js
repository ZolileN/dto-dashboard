/*global describe,beforeAll,it */
import expect from 'expect';

import React from 'react';
import {createRenderer} from 'react-addons-test-utils';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import {mount} from 'enzyme';

import initialState from './../../redux/initialState';
import Container from './pageDashboards_container';
import {DashboardItem} from './pageDashboards_component';
import fixtures from './../../../../test/fixtures/jbuilder-all';

const mockStore = configureStore();


describe('(Component) Dashboards Page - pageDashboards_container', () => {

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
    const instance = buildSubject();
    expect(instance.exists()).toBe(true);
  });

  it('should render the number of dashboard items that are provided', () => {
    const dashboards = fixtures.dashboards;
    const dashLen = dashboards.length;
    const instance = buildSubject({dashboards});
    const items = instance.find(DashboardItem);
    expect(items.length).toEqual(dashLen);
  });

});
