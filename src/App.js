// import './App.css';
import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom';
import { Navigation } from 'common/index';
import { Join, Login} from 'user/index';
import { Checklist } from 'survey/index';

const App = () => (
  <>
  <Navigation/>
  <Switch>
    <Route exact path='/' component= {Login}/>
    <Redirect from='/login' to ={'/'}/>
    <Route exact path='/join' component={Join}/>
    <Route exact path='/checklist' component={Checklist}/>
  </Switch>
  </>
)

export default App;
