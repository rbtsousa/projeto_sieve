import {BrowserRouter,Switch,Route} from 'react-router-dom'
import React from 'react';
import Home from './Pages/Home/index';
import QuemSomos from './Pages/QuemSomos/index'
import StudentSpace from './Pages/StudentSpace/index';
import Formulario from './Pages/Formulario/index';
import Companies from './Pages/Companies/index';
import EvaluationForm from './Pages/Companies/Components/ EvaluationForm'

export default function Routes() {
  return (
    <BrowserRouter>

        <Route path="/" exact component={Home}/>
        <Route path="/areadoaluno/"  component={StudentSpace}/>
        <Route path="/areadaempresa/:id"  component={Companies}/>
        <Route path="/QuemSomos"  component={QuemSomos}/>
        <Route path="/form"  component={Formulario}/>
        <Route path="/EvaForm"  component={EvaluationForm}/>

    </BrowserRouter>
  );
}
