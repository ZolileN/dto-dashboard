/*global describe,beforeAll,it */
import expect from 'expect';

import React from 'react';
import {createRenderer} from 'react-addons-test-utils';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import {mount} from 'enzyme';

import initialState from './../../../store/initialState';
import Page from './index';

const mockStore = configureStore();


describe('(Component) Dashboards Page', () => {

  it.skip('todo');

});
