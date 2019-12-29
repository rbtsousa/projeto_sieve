import {BrowserRouter,Switch,Route} from 'react-router-dom'
import React from 'react';
import Home from './Pages/Home/index';
import Login from './Pages/Login/index';
import StudentSpace from './Pages/StudentSpace/index';



export default function Routes() {
  return (
    <BrowserRouter>
        <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/login"  component={Login}/>
        <Route path="/areadoaluno"  component={StudentSpace}/>
        </Switch>
    </BrowserRouter>
  );
}
