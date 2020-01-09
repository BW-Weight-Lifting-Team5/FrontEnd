import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import Login from './components/Login'
import Register from './components/Register'

import PrivateRoute from './components/PrivateRoute'
import Exercises from './components/Exercises'
import Workouts from './components/Workouts'

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
      {/* <Route path='/' component={Exercises} /> */}

        <nav>
                <Link to="/login">Login    </Link>
                <Link to="/register">Register</Link>

        </nav>
        <Switch>
          {/* <PrivateRoute path='/exercises' component={Exercises} /> */}
          <Route path='/exercises' component={Exercises} />
          <Route path='/workouts' component={Workouts} />

          <Route path='/register' component={Register} />

          <Route path='/login' component={Login} />
          <Route exact path='/' component={Login} />

        </Switch>
      </div>
    </Router>
  );
}

export default App;
