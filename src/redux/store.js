/* global __DEV__ */

import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import logger from 'redux-logger';
import reducers from './modules/reducers';

const middlewares = [ReduxThunk].concat(__DEV__ ? logger() : []);
const store = createStore(
  reducers,
  applyMiddleware(...middlewares)
);

export default store;
