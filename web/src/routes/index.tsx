import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import LandingPage from '../pages/LandingPage';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Route component={LandingPage} path="/" exact />
    </BrowserRouter>
  );
}

export default AppRoutes;