let win = typeof global === 'undefined' ? window : global;

import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';

import api from './../api';
import rootReducer from './../reducers';


export default function configureStore(bootState, history, debug = __DEV__) {
  const middlewares = [
    thunkMiddleware.withExtraArgument(api),
    routerMiddleware(history)
  ];


  let createStoreWithMiddleware = compose(
    applyMiddleware(...middlewares),
    debug && win.__REDUX_DEVTOOLS_EXTENSION__ ? win.__REDUX_DEVTOOLS_EXTENSION__() : f => f
  );
  const store = createStoreWithMiddleware(createStore)(
    rootReducer, bootState
  );

  // Make reducers hot reloadable
  if (module.hot) {
    module.hot.accept('./../reducers', () => {
      const nextRootReducer = require('./../reducers');
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
