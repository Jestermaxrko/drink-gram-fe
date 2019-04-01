import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import MainLayoutPage from './modules/MainLayout';

const Routes = (
  <BrowserRouter basename="/">
    <Switch>
      <Route path='/' component={MainLayoutPage} />
    </Switch>
  </BrowserRouter>
);

export default Routes;