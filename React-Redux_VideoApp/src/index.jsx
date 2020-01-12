import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import ErrorBoundary from "components/ErrorBoundary";
import App from "./App";
import { store } from "./configureStore";
import "./style.scss";

ReactDOM.render(
  <ErrorBoundary>
    <Provider store={store}>
      <App />
    </Provider>
  </ErrorBoundary>,
  document.getElementById("root")
);
