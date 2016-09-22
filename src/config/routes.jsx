import React, { Component } from 'react';
import { Router, IndexRoute, Route, hashHistory } from 'react-router';
import Main from '../components/main.jsx';
import Home from '../components/home.jsx';
import Register from '../components/register.jsx';
import Login from '../components/login.jsx';
import Dashboard from '../components/dashboard.jsx';
import ToList from '../components/to_list.jsx';

const Routes = () => {
  return (
    <Router history={hashHistory}>
      <Route path="/" component={Main}>
        <IndexRoute component={Home} />
        <Route path="register" component={Register} />
        <Route path="login" component={Login} />
        <Route path="dashboard" component={Dashboard} />
        <Route path="list" component={ToList} />
      </Route>
    </Router>
  );
};

export default Routes;
