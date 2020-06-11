import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import Screen from './containers/Screen';
import Provide from './stores';
import './App.css';


function App() {
  return (
    <Router>
      <div>
        <div>
          <span className="page-link"><Link to="/">Home</Link></span>
        </div>
        <Switch>
          <Route exact path="/" component={Screen} />
        </Switch>
      </div>
    </Router>
  );
}

export default Provide(App);
