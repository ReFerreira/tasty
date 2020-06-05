import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import Main from '../pages/Main';
import Order from '../pages/Order';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignUp} />
      <Route path="/main" component={Main} isPrivate />
      <Route path="/order" component={Order} isPrivate />
    </Switch>
  );
}
