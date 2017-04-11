import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import musicList from './musicList';

const store = combineReducers({
  musicList,
  router: routerReducer,
});

export default store;
