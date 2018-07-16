import React from "react";
import { storiesOf } from "@storybook/react";
import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import reducers from "../src/app/reducers/index.js";
import SearchBox from "../src/app/components/SearchBox";

const store = createStore(
    combineReducers(reducers),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

storiesOf("Search Box", module)
  .add("Default", () => (
    <Provider store={store}>
      <Router><SearchBox /></Router>
    </Provider>
  ));
