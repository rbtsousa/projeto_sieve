import {BrowserRouter,Route} from 'react-router-dom'
import React from 'react';
import Home from './Pages/Home/index';
import QuemSomos from './Pages/QuemSomos/index'
import StudentSpace from './Pages/StudentSpace/index';
import Formulario from './Pages/Formulario/index';
import Companies from './Pages/Companies/index';
import EvaluationForm from './Pages/Companies/Components/ EvaluationForm';
import NewCurse from './Pages/Companies/Components/NewCurse'

export default function Routes() {
  return (
    <BrowserRouter>

        <Route path="/" exact component={Home}/>
        <Route path="/areadoaluno/"  component={StudentSpace}/>
        <Route path="/areadaempresa/"  component={Companies}/>
        <Route path="/quemsomos"  component={QuemSomos}/>
        <Route path="/form"  component={Formulario}/>
        <Route path="/evaform"  component={EvaluationForm}/>
        <Route path="/newcurse"  component={NewCurse}/>

    </BrowserRouter>
  );
}
