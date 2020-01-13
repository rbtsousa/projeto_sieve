import React from 'react';
// import {Formik,Form,Field,ErrorMessage} from 'formik';
import { Container } from './styles';


export default function ReactForm() {
  return (

  <Container>

    <p>Dados Pessoais</p>

    <div class="login">
      <input type="text" placeholder="Digite seu nome" class="input"/>
      <input type="text" placeholder="Digite seu email" class="input"/>
      <input type="text" placeholder="Digite seu email" class="input"/>
    </div>
    <br/>
    <div class="login">
      <input type="text" placeholder="Digite seu nome" class="input"/>
      <input type="text" placeholder="Digite seu email" class="input"/>
      <input type="text" placeholder="Digite seu email" class="input"/>
    </div>


    <div class="btn">Enviar</div>
  </Container>

  );
}


