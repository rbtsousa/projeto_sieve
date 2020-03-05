import React,{useRef}from 'react';
import { Form } from '@unform/web';
import {useDispatch} from 'react-redux'
import Imput from '../components/Input';
import * as Yup from 'yup';
//import ReactSelect from '../components/ReactSelect'
import './styles.css'
import {signUpRequest} from '../../../store/module/auth/action'

export default function ReactForm() {
  const FormRef = useRef(null);
  const dispatch = useDispatch()

  async function handleSubmit({name,email,password,gender,age,institution}, { reset }) {

    try {
      const schema = Yup.object().shape({

        name: Yup.string().required('O nome é obrigatório'),
        email: Yup.string().email('Digite um e-mail válido').required('O e-email é obrigatório'),
        password: Yup.string().required('A senha é obrigatória'),
        institution: Yup.boolean().required('Telefone é obrigatório'),
        //cpf: Yup.string().required('Cpf é obrigatório').min(11, 'No minimo 11 caracteres'),
        //Endereço: Yup.string().required('Endereço é obrigatório'),
        gender: Yup.string().required('O gênero e obrigatório'),
        age: Yup.string().required('O idade é obrigatório'),
        //city: Yup.string().required('Cidade é obrigatória')
    })

    await schema.validate({name,email,password,gender,age,institution}, {
      abortEarly: false,
    })


    dispatch(signUpRequest(name,email,password,gender,age,institution))
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
            <label htmlFor="">Você é um instituição?<Imput name="institution"  maxLength="11" type="boolean" placeholder="true/false" /></label>
            <label htmlFor="">CPF<Imput name="cpf" minLength="8" type="text" placeholder="Digite seu CPF" /></label>
            <label htmlFor="">Endereço<Imput name="Endereço" type="text" placeholder="Digite Endereço" /></label>
      </div>
      <div className="createForm">
            <label htmlFor="">Gênero<Imput name="gender" type="text" placeholder="Digite seu gênero" /></label>
            <label htmlFor="">idade<Imput name="age" type="number" placeholder="digite sua idade" /></label>
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


