
import React from 'react';
import ReactDOM, { render } from 'react-dom';
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from 'react-router-dom';


import Home from './pages/Home';
import HOC from './pages/HOC';
import ComponentPage from './pages/Component';
import PureComponentPage from './pages/PureComponent';
import PageNotFound from './pages/PageNotFound';

// 引入公共样式
import './css/common.css';


ReactDOM.render(
    <Router>
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/home">home</Link></li>
          <li><Link to="/HOC">HOC</Link></li>
          <li><Link to="/component">component</Link></li>
          <li><Link to="/PureComponent">PureComponent</Link></li>
        </ul>
        <hr />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/hoc" component={HOC} />
          <Route path="/component" component={ComponentPage} />
          <Route path="/PureComponent" component={PureComponentPage} />
          <Route path="/pageNotFond" component={PageNotFound} />
          <Redirect to="/pageNotFond" />
        </Switch>
      </div>
    </Router>
  ,
  document.getElementById('app')
);