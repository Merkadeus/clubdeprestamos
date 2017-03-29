import React from 'react';
import Header from '../components/Header';

import '../../style/index.scss';
const Layout = ({ children }) => (
  <div>
    <Header />
    <div className="layout">
      { children }
    </div>
  </div>
);

export default Layout;
