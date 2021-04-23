import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../Home';
import Room from '../Room';

export default function BasicRouter() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/:roomId">
            <Room />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
