// import './App.css';
import Login from './component/Login';
import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom';
import Join from './component/Join';
import Navigation from 'component/Nevigation';
import styled from 'styled-components';

const App = () => (
  <>
  <Navigation/>
  <Switch>
    <Route exact path='/' component= {Login}/>
    <Redirect from='/login' to ={'/'}/>
    <Route exact path='/join' component={Join}/>
  </Switch>
  </>
)

export default App;
