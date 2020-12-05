import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Pages
import Home from './pages/Home';

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/notes" component={() => <h1>App notes</h1>} />
    </Switch>
  </Router>
);

export default Routes;
