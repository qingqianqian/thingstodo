//import React, { Component } from 'react';
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Main from './Main';
import Music from './Music';
import Artist from './Artist';
import Edit from './Edit';

export default () =>

  <Switch>
    <Route exact path='/' component={Main} /> 
    <Route path='/music' component={Music} />
    <Route path='/artist/:name' component={Artist} />
    <Route path='/edit/:id' component={Edit} />
  </Switch>
