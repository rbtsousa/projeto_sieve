import React from 'react';
import {Formik,Form,Field,ErrorMessage} from 'formik';
import { Container } from './styles';


export default function ReactForm() {
  return (

    <Container>
      <Formik>
          <Form >
              <h1>Dados Pessoais</h1>
          <div>
            <span>Nome</span>
            <br/>
                <Field className=""type="text" name="nome" placeholder= "Digite seu nome completo"  />

            <span>Email</span>
            <br/>
                <Field className="" type="email" name="email" placeholder= "Digite um email válido" />

            <span>Senha</span>
            <br/>
                <Field className="" type="password" name="password" placeholder= "Digite sua senha" />

            <span>CPF</span>
            <br/>
                <Field className="" type="number" name="CPF" placeholder= "Digite seu cpf" />

             <span>CEP</span>
             <br/>
                <Field className="" type="number" name="CEP" placeholder= "Digite seu CEP" />

          </div>
          </Form>
      </Formik>
      <Formik>
          <Form >
              <h1>Dados Sociais</h1>
          <div>
            <span>Nome</span>
            <br/>
                <Field className=""type="text" name="nome" placeholder= "Digite seu nome completo"  />

            <span>Email</span>
            <br/>
                <Field className="" type="email" name="email" placeholder= "Digite um email válido" />

            <span>Senha</span>
            <br/>
                <Field className="" type="password" name="password" placeholder= "Digite sua senha" />

            <span>CPF</span>
            <br/>
                <Field className="" type="number" name="CPF" placeholder= "Digite seu cpf" />

          </div>
          </Form>
      </Formik>
      <Formik>
          <Form >
              <h1>Dados Profissionais</h1>
          <div>
            <span>Nome</span>
                <Field className=""type="text" name="nome" placeholder= "Digite seu nome completo"  />

            <span>Email</span>
                <Field className="" type="email" name="email" placeholder= "Digite um email válido" />

            <span>Senha</span>
                <Field className="" type="password" name="password" placeholder= "Digite sua senha" />

            <span>CPF</span>
                <Field className="" type="number" name="CPF" placeholder= "Digite seu cpf" />

          </div>
          </Form>
      </Formik>
  </Container>

  );
}


