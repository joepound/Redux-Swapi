import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

// needed dependancies
// applyMiddleware from redux
// logger from redux-logger
// thunk from redux-thunk
// rootReducer from ./reducers

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

import rootReducer from "./reducers";

const store = createStore(
  rootReducer,
  applyMiddleware(thunk, logger)
  /* applyMiddleware goes here */
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
