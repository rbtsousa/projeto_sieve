import React from 'react';
import {useDispatch} from 'react-redux'
import {signInRequest} from '../../store/module/auth/action'
import {Form,Input} from '@rocketseat/unform'
import {  LoginMenu, ContainerImg, Formulario, Inputs, Realysub,ContainerLogin } from './styles';
import { GoPerson } from 'react-icons/go';
import { FaLock } from 'react-icons/fa';
import {Link} from 'react-router-dom'



export default function LoginCard() {
  const dispatch = useDispatch()


  async function handleSubmit({email,password}){
    dispatch(signInRequest(email,password))
    
  }


  return (
      <ContainerLogin>

        <LoginMenu>
          <ContainerImg>
            <img src="https://i.imgur.com/Aaeevvn.png" alt="logo-sieve" />
          </ContainerImg>
          <Formulario>
            <Form onSubmit={handleSubmit}>
              <Inputs>
                <GoPerson size="28px" /> <Input name="email" type="email" />
              </Inputs>
              <br />
              <br />
              <Inputs>
                <FaLock size="28px" /> <Input name="password"  type="password" />
              </Inputs>
              <br />
              <div>
                <a href="www.google.com.br">Esqueceu sua senha ?</a>
              </div>
              <br />
              <Realysub>
                <button  className="Login" type="submit" >Login</button>
                <Link to="/form"><button className="Register">Cadastro</button></Link>
              </Realysub>
            </Form>
          </Formulario>
        </LoginMenu>
       </ContainerLogin>

  );
}

