import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Cart from '../pages/cart';
import Checkout from '../pages/checkout';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" component={Cart} />
    <Route path="/checkout" component={Checkout} />
  </Switch>
);

export default Routes;
