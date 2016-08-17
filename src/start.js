/* global document */

// react declaration
import React from 'react';
import ReactDOM from 'react-dom';

// redux declaration
import { Provider } from 'react-redux';
import store from './redux/store';

// component declaration
import App from './components/app';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('#app')
);
