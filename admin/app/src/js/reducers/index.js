import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

import user from './user';
import leftDrawer from './leftDrawer';
import investors from './investors';
import loans from './loans';

const rootReducer = combineReducers({
  user,
  leftDrawer,
  investors,
  loans,
  routing,
});

export default rootReducer;
