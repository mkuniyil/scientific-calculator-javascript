import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { Provider } from "react-redux";
import { applyMiddleware, createStore, compose } from "redux";
import reducer from "./reducers/appReducers";
import { createLogger } from "redux-logger";

let middlewares = [];
middlewares.push(
  createLogger({
    timestamp: true
  })
);

const store = compose(applyMiddleware(...middlewares))(createStore)(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
