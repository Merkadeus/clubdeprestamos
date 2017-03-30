import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Layout from './containers/Layout';
import LoginPage from './containers/LoginPage';
import Dashboard from './containers/Dashboard';

export default (
  <Route path="/" component={ Layout }>
    <IndexRoute component={ LoginPage } />
    <Route path="/dashboard" component={ Dashboard } />
  </Route>
);
