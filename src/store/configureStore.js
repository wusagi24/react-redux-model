import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';

import reducers from '../reducers';
import rootSsaga from '../sagas';

function configureStore(history) {
  const routerMW = routerMiddleware(history);
  const sagaMW = createSagaMiddleware();
  const middlewares = [
    routerMW,
    sagaMW,
  ];
  if (process.env.NODE_ENV !== 'production') {
    const createLogger = require('redux-logger').default; // eslint-disable-line global-require
    const loggerMW = createLogger();
    middlewares.push(loggerMW);
  }
  const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
  const store = createStoreWithMiddleware(reducers);
  sagaMW.run(rootSsaga);
  return store;
}

export default configureStore;
