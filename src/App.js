// import './App.css';
import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom';
import { Navigation, Day } from 'common/index';
import { Join, Login,FindID,FindFw} from 'user/index';
import { Checklist } from 'survey/index';
import { Diary } from 'diary/index';
import { Admin } from'admin/index'
import {Calendar} from 'calender/index'

const App = () => (
  <>
  <Navigation/>
  <Switch>
    <Route exact path='/' component= {Login}/>
    <Redirect from='/login' to ={'/'}/>
    <Route exact path='/join' component={Join}/>
    <Route exact path='/checklist' component={Checklist}/>
    <Route exact path='/dairy' component={Diary}/>
    <Route exact path='/admin' component={Admin}/>
    <Route exact path='/calendar' component={Calendar}/>
    <Route exact path='/findID' component={FindID}/>
    <Route exact path='/findFw' component={FindFw}/>
    <Route exact path='/day' component={Day}/>
  </Switch>
  </>
)

export default App;
