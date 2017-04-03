import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

import user from './user';
import leftDrawer from './leftDrawer';
import investors from './investors';
import loans from './loans';
import general from './general';
import dataTableData from './dataTables';

const rootReducer = combineReducers({
  user,
  leftDrawer,
  investors,
  loans,
	general,
	dataTableData,
  routing,
});

export default rootReducer;
