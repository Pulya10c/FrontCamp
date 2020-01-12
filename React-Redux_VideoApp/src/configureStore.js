import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
// import logger from 'redux-logger';

import { createRootReducer } from './rootReducer';

export const history = createBrowserHistory();

const middleware = [thunk,
// logger,
routerMiddleware(history)];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  createRootReducer(history),
  composeEnhancers(applyMiddleware(...middleware))
);
