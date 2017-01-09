/*global describe,beforeAll,it */
import expect from 'expect';

import React from 'react';
import {createRenderer} from 'react-addons-test-utils';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import {mount} from 'enzyme';

import initialState from './../../redux/initialState';
import Container from './pageDashboardWidgets_container';

const mockStore = configureStore();


describe('(Container) Dashboard Widgets Page - pageDashboardWidgets_container', () => {

  const buildSubject = (mergeWithState = {}, ownProps = {}) => {
    const ConnectedApp = () => (
      <Provider store={mockStore({...initialState, ...mergeWithState})}>
        <Container {...ownProps} />
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

  it('should render as a mounted connected component without exploding', () => {
    const instance = buildSubject(
      {
        dashboards: [{id:1}]
      },
      {
      params: {
        dashboard_id:1,
        datagroup_key:'16-01'
      }
    });
    expect(instance.exists()).toBe(true);
  });

});
