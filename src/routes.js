import {BrowserRouter,Switch,Route} from 'react-router-dom'
import React from 'react';
import Home from './Pages/Home/Index';
import LoginCard from './Pages/Login/LoginCard';





export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route patch="/" exact component={Home}/>
        <Route patch="/Login" component={LoginCard}/>
      </Switch>
    </BrowserRouter>
  );
}
