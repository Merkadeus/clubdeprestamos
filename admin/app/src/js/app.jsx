import React from 'react';
import { render } from 'react-dom';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Root from './containers/Root';
import store from './store/configureStore';

const history = syncHistoryWithStore(browserHistory, store);

injectTapEventPlugin();

render(
  <Root store={ store } history={ history } />,
  document.getElementById('root')
);
