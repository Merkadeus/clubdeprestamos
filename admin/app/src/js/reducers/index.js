import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

import kiosk from './kiosk';

const rootReducer = combineReducers({
  kiosk,
  routing,
});

export default rootReducer;
