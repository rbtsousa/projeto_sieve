import {BrowserRouter,Switch,Route} from 'react-router-dom'
import React from 'react';
import Home from './Pages/Home/index';
import Login from './Pages/Login/index';
import QuemSomos from './Pages/QuemSomos/index'
import StudentSpace from './Pages/StudentSpace/index';
import Formulario from './Pages/Formulario/index';
import Companies from './Pages/Companies/index';

export default function Routes() {
  return (
    <BrowserRouter>
        <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/login"  component={Login}/>
        <Route path="/areadoaluno"  component={StudentSpace}/>
        <Route path="/areadaempresa"  component={Companies}/>
        <Route path="/QuemSomos"  component={QuemSomos}/>
        <Route path="/form"  component={Formulario}/>
        </Switch>
    </BrowserRouter>
  );
}
