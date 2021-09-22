import React from 'react';
import { Route, Switch } from 'react-router-dom';
import App from '../App';
import NavBar from '../components/NavBar';
import About from '../pages/About';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import User from '../pages/User';
import NavRouter from './NavRouter';

const Routes = () => (
  <Switch>
    <NavRouter path="/about">
      <About />
    </NavRouter>
    <NavRouter path="/login">
      <Login />
    </NavRouter>
    <NavRouter path="/signup">
      <SignUp />
    </NavRouter>
    <NavRouter path="/user">
      <User />
    </NavRouter>
    <Route path="/">
      <NavBar />
      <App />
    </Route>
  </Switch>
);

export default Routes;
