import React from 'react';
// import {Formik,Form,Field,ErrorMessage} from 'formik';
import { Container } from './styles';


export default function ReactForm() {
  return (

  <Container>

    <p>Dados Pessoais</p>

    <div class="login">
      <label htmlFor="nome">Nome<input type="text" placeholder="Digite seu nome" class="input"/></label>
      <label htmlFor="nome">Email<input type="email" placeholder="Digite seu email" class="input"/></label>
      <label htmlFor="nome">Senha<input type="password" placeholder="Digite sua senha" class="input"/></label>
    </div>

    <div class="login">
      <label htmlFor="">CPF<input minlength="11" maxlength="11" type="text" placeholder="Digite seu CPF" class="input"/></label>
      <label htmlFor="">CEP<input minlength="8" maxlength="8" type="text" placeholder="Digite seu CEP" class="input"/></label>
      <label htmlFor="">Endereço<input type="text" placeholder="Digite Endereço" class="input"/></label>
    </div>
    <div class="login">
      <label htmlFor="estado">Estado
          <select name="estado" id="estado">

              <option value="N">Selecione</option>
              <option value="RJ">Rio de Janeiro</option>
              <option value="RJ">São Paulo</option>
              <option value="RJ">Minas Gerais</option>
              <option value="RJ">Belo Horizonte</option>
              <option value="RJ">Espirito Santo</option>
              <option value="RJ">Rio Grande do Sul</option>

          </select>
        </label>
        <label htmlFor="estado">Sexo
            <select name="estado" id="estado">

                <option value="N">Selecione</option>
                <option value="RJ">Masculino</option>
                <option value="RJ">Feminino</option>


            </select>
          </label>
      <label htmlFor="">CEP<input type="text" placeholder="Digite seu email" class="input"/></label>
      <label htmlFor="">CPF<input type="text" placeholder="Digite seu email" class="input"/></label>
    </div>

    <hr></hr>

    <div class="btn">Enviar</div>
  </Container>

  );
}


