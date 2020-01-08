import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from 'connected-react-router'

import ErrorBoundary from "components/ErrorBoundary";
import App from "./App";
import { store, history } from "./configureStore";
import "./style.scss";

ReactDOM.render(
  <ErrorBoundary>
    <Provider store={store}>
      <App />
    </Provider>
  </ErrorBoundary>,
  document.getElementById("root")
);
