import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import blogItemList from './blogItemList';

export default combineReducers({
  blogItemList,
  routing: routerReducer
});
