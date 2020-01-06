import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import Login from './components/Login'
import PrivateRoute from './components/PrivateRoute'
import Exercises from './components/Exercises'


import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
      {/* <Route path='/' component={Exercises} /> */}


        <Switch>
          <PrivateRoute path='/exercises' component={Exercises} />
          <Route exact path='/' component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
