import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// Middleware
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise'; // apply to Middleware

import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(
  promise
)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.querySelector('.container'));
