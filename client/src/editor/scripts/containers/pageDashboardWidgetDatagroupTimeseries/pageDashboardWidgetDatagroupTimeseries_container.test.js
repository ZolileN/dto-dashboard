/*global describe,beforeAll,it */
import expect from 'expect';

import React from 'react';
import {createRenderer} from 'react-addons-test-utils';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import {mount} from 'enzyme';

import initialState from './../../store/initialState';
import Container from './index';

const mockStore = configureStore();


describe('(Component) Dashboard Widget Datagroup Timeseries Page', () => {

  it('should render as a normal component without exploding', () => {
    // create a *shallow* render of the page
    const wrapper = createRenderer(<Container />, {context: {store: mockStore()}});
    expect(wrapper).toBeTruthy();
  });

  // todo - the connect is very busy and a lot of deps from connect at client/src/editor/scripts/components/pages/dashboardWidgetDatagroupTimeseries.js

  it.skip('should render as a mounted connected component without exploding', () => {

    const mockedState = {
      ...initialState,
      dashboards: [
        {id:1}
      ],
      datasets: [
        {id:1}
      ],
      widgets: [
        {id:1,type:'a',units:'a'}
      ]
    };

    const mockedOwnProps = {
      params: {
        dashboard_id:1,
        datagroup_key:'16-01',
        widget_id:1
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
