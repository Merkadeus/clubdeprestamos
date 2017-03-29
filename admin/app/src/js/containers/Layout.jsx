import React from 'react';
import HeaderBar from '../components/header-bar';

const Layout = ({ children }) => (
  <div>
    <HeaderBar />
    { children }
  </div>
);

export default Layout;
