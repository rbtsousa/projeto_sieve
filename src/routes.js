import {BrowserRouter,Route} from 'react-router-dom'
import React from 'react';
import Home from './Pages/Home/Index';





export default function routes() {
  return (
    <BrowserRouter>
    <Route patch='/' component={Home}/>
    </BrowserRouter>
  );
}
