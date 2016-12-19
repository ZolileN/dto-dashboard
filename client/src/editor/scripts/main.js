import React from 'react';
import { render } from 'react-dom';
import { merge } from 'lodash';
import { hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import configureStore from './store/configureStore';
import initialState from './store/initialState';


const bootState = merge(initialState, window.__STATE__);
delete window.__STATE__;
const store = configureStore(bootState, hashHistory);

const history = syncHistoryWithStore(hashHistory, store);


var Root;

if (process.env.NODE_ENV === 'production') {
  try {
    Root = require('./containers/root').default;
  } catch(e) {
    Root = require('./containers/errorRoot').default;
  }
} else {
  Root = require('./containers/root').default;
}


render(
  <Root store={store} history={history} />,
  document.getElementById('editor_index')
);
