import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../Home';

export default function BasicRouter() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
