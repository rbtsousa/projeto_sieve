import React,{useRef}from 'react';
import { Form } from '@unform/web';
import Imput from '../components/Input';
import * as Yup from 'yup';
//import ReactSelect from '../components/ReactSelect'
import './styles.css'


export default function ReactForm() {
  const FormRef = useRef(null);

  async function handleSubmit(data, { reset }) {

    try {
      const schema = Yup.object().shape({

        name: Yup.string().required('O nome é obrigatório'),
        email: Yup.string().email('Digite um e-mail válido').required('O e-email é obrigatório'),
        password: Yup.string().required('A senha é obrigatória'),
        tel: Yup.string().required('Telefone é obrigatório'),
        cpf: Yup.string().required('Cpf é obrigatório').min(11, 'No minimo 11 caracteres'),
        Endereço: Yup.string().required('Endereço é obrigatório'),
        gender: Yup.string().required('O gênero e obrigatório'),
        state: Yup.string().required('O estado é obrigatório'),
        city: Yup.string().required('Cidade é obrigatória')
    })

    await schema.validate(data, {
      abortEarly: false,
    })


    console.log(data)
    reset()

    }catch(err){

      if ( err instanceof Yup.ValidationError){
        const errorMessages = {};

        err.inner.forEach(error => {
          errorMessages[error.path] = error.message;
        })

        FormRef.current.setErrors(errorMessages);
      }
    }
  }

  return (

      <div className ="container">

        <Form  ref={FormRef} onSubmit={handleSubmit}>

          <p>Dados Pessoais</p>

       <div className="createForm">
            <label htmlFor="nome">Nome<Imput  type="text" name="name" placeholder="Digite seu nome"/></label>
            <label htmlFor="nome">Email<Imput type="email" name="email" placeholder="Digite seu email" /></label>
            <label htmlFor="nome">Senha<Imput type="password" name="password" placeholder="Digite sua senha" /></label>
      </div>

      <div className="createForm">
            <label htmlFor="">Telefone<Imput name="tel" minLength="9" maxLength="11" type="text" placeholder="Digite seu telefone" /></label>
            <label htmlFor="">CPF<Imput name="cpf" minLength="8" type="text" placeholder="Digite seu CPF" /></label>
            <label htmlFor="">Endereço<Imput name="Endereço" type="text" placeholder="Digite Endereço" /></label>
      </div>
      <div className="createForm">
            <label htmlFor="">Gênero<Imput name="gender" type="text" placeholder="Digite seu gênero" /></label>
            <label htmlFor="">Estado<Imput name="state" type="text" placeholder="Digite seu estado" /></label>
            <label htmlFor="">Cidade<Imput  name="city" type="text" placeholder="Digite seu cidade" /></label>
      </div>


      <div className="buttons">
            <button type="submit" className="btn">Enviar</button>
            <button className="btn2">Cancelar</button>
       </div>

        </Form>
      </div>



  );
}


