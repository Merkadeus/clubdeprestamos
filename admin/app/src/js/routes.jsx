import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Layout from './containers/Layout';
import LoginPage from './containers/LoginPage';
import Dashboard from './containers/Dashboard';
import Investors from './containers/Investors';

export default (
  <Route path="/" component={ Layout }>
    <IndexRoute component={ LoginPage } />
    <Route path="/dashboard" component={ Dashboard }>
			<Route path="/dashboard/investors" component={ Investors } />
		</Route>
  </Route>
);
