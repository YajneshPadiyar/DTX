import {applyMiddleware,createStore} from 'redux';
import { createLogger } from 'redux-logger'
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory';

import reducers from './../reducers';
import mySaga from '../sagas';

const sagaMiddleware = createSagaMiddleware();

export const history = createHistory();

const myRouterMiddleware = routerMiddleware(history);

const getMiddleware = () => {
  if (process.env.NODE_ENV === 'production') {
    return applyMiddleware(myRouterMiddleware, sagaMiddleware);
  } else {
    // Enable additional logging in non-production environments.
    return applyMiddleware(myRouterMiddleware, sagaMiddleware, createLogger())
    //return applyMiddleware(myRouterMiddleware, sagaMiddleware)
  }
};

export const store = createStore(
  reducers, composeWithDevTools(getMiddleware()));

  sagaMiddleware.run(mySaga);
