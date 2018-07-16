import React from 'react';

import { storiesOf } from '@storybook/react';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from 'app/layout/AppHeader/';
import reducers from 'AppReducers';
import userActions from 'AppActions/user';

const store = createStore(combineReducers(reducers), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

storiesOf('Header', module)
  .add('Before Login', () => (
    <Router>
      <Header />
    </Router>
  ))
  .add('After Login', () => (
    <Router>
      <Header user={{name: 'Brian S.'}} />
    </Router>
  ));
