/*global describe,beforeAll,it */
import React from 'react';
import {createRenderer} from 'react-addons-test-utils';
import expect from 'expect';
import configureStore from 'redux-mock-store';

import Page from './index';

const mockStore = configureStore();

const wrapper = createRenderer(<Page />, {context: {store: mockStore()}});


describe('(Component) Dashboards Page', () => {
  it('renders without exploding', () => {
    expect(wrapper).toBeTruthy();
  });
});
