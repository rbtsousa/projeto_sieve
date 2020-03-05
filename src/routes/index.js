import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import Route from './Route'
import Home from '../Pages/Home/index';
import QuemSomos from '../Pages/QuemSomos/index'
import StudentSpace from '../Pages/StudentSpace/index';
import Formulario from '../Pages/Formulario/index';
import Companies from '../Pages/Companies/index';
import EvaluationForm from '../Pages/Companies/Components/ EvaluationForm'

export default function Routes() {
  return (
    <BrowserRouter>

        <Route path="/" exact component={Home}/>
        <Route path="/areadoaluno" isPrivate component={StudentSpace}/>
        <Route path="/areadaempresa" isPrivate  component={Companies}/>
        <Route path="/QuemSomos"  component={QuemSomos}/>
        <Route path="/form"  component={Formulario}/>
        <Route path="/EvaForm"  component={EvaluationForm}/>

    </BrowserRouter>
  );
}
