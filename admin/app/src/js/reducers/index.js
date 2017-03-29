import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

import User from './User';
import LeftDrawer from './LeftDrawer';

const rootReducer = combineReducers({
  User,
  LeftDrawer,
  routing,
});

export default rootReducer;
