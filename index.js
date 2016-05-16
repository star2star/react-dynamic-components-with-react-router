import React from 'react';
import ReactDOM, {server } from 'react-dom';
import { Router, Route, browserHistory, hashHistory, IndexRoute } from 'react-router';
// // and the Home component
import Home from './modules/Home';
import App from './modules/App';
import About from './modules/About';
import Repos from './modules/Repos';
import Applications from './modules/Applications';
import Child from './modules/Child';
import Repo from './modules/Repo';


ReactDOM.render((
  <Router history={hashHistory}>
  <Route path="/" component={App}>
    {/* add the routes here */}
    <Route path="/apps" component={Applications}>
      <Route path="/apps/:appName" component={Child}/>
    </Route>
    <Route path="/about" component={About}/>
  </Route>
  </Router>
), document.getElementById('app'))
