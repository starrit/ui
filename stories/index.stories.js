import React from 'react';
import {storiesOf} from '@storybook/react';
import Shows from '../src/app/containers/Shows';
import reducers from '../src/app/reducers/index.js';
import {combineReducers, createStore} from 'redux';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';

const store = createStore(
  combineReducers(reducers),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

storiesOf('Shows', module).add('Default', () => (
  <Provider store={store}>
    <Router>
      <Shows />
    </Router>
  </Provider>
));
