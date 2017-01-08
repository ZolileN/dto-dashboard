/*global describe,beforeAll,it */
import expect from 'expect';

import React from 'react';
import {createRenderer} from 'react-addons-test-utils';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import {mount} from 'enzyme';

import initialState from './../../../store/initialState';
import Container from './pageDashboardWidgets_container';

const mockStore = configureStore();


describe('(Container) Dashboard Widgets Page', () => {

  it('should render as a normal component without exploding', () => {
    // create a *shallow* render of the page
    const wrapper = createRenderer(<Container />, {context: {store: mockStore()}});
    expect(wrapper).toBeTruthy();
  });

  it('should render as a mounted connected component without exploding', () => {

    const mockedState = {
      ...initialState,
      dashboards: [
        {id:1}
      ]
    };
    const mockedOwnProps = {
      params: {
        dashboard_id:1,
        datagroup_key:'16-01'
      }
    };

    const ConnectedApp = () => (
      <Provider store={mockStore(mockedState)}>
        <Container {...mockedOwnProps} />
      </Provider>
    );

    // create a *deep* render of the Container
    const wrapper = mount(<ConnectedApp />);
    expect(wrapper).toBeTruthy();
  });

});
