import {BrowserRouter,Switch,Route} from 'react-router-dom'
import React from 'react';
import Home from './Pages/Home/index';
import LoginCard from './Pages/Login/index';
import StudentSpace from './Pages/StudentSpace/index';



export default function Routes() {
  return (
    <BrowserRouter>
        <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/login"  component={LoginCard}/>
        <Route path="/areadoaluno"  component={StudentSpace}/>
        </Switch>
    </BrowserRouter>
  );
}
