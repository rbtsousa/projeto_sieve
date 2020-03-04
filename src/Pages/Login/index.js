import React,{useState} from 'react';
import {  LoginMenu, ContainerImg, Formulario, Inputs, Realysub,ContainerLogin } from './styles';
import { GoPerson } from 'react-icons/go';
import { FaLock } from 'react-icons/fa';
import {Link} from 'react-router-dom'
import api from '../../services/api'


export default function LoginCard(history) {
  const [email,setEmail] = useState('')
  const[password,setPassword] = useState('')


  async function handleSubmit(e){
      e.preventDefault();
      try {
        await api.post('/autentication',{email,password})
      } catch (error) {
        return console.log("error",error)
      }
      history.push('/')
  }


  return (
      <ContainerLogin>

        <LoginMenu>
          <ContainerImg>
            <img src="https://i.imgur.com/Aaeevvn.png" alt="logo-sieve" />
          </ContainerImg>
          <Formulario>
            <form onSubmit={handleSubmit}>
              <Inputs>
                <GoPerson size="28px" /> <input value={email} onChange={e=>setEmail(e.target.value)}type="email" name="email" />
              </Inputs>
              <br />
              <br />
              <Inputs>
                <FaLock size="28px" /> <input value={password} onChange={e=>setPassword(e.target.value)} type="password" name="password" />
              </Inputs>
              <br />
              <div>
                <a href="www.google.com.br">Esqueceu sua senha ?</a>
              </div>
              <br />
              <div>
                <input type="checkbox" name="check" /> <span>Mantenha-me conectado</span>
              </div>
              <br />
              <br />
              <Realysub>
                <button  className="Login" type="submit" >Login</button>
                <Link to="/form"><button className="Register">Cadastro</button></Link>
              </Realysub>
            </form>
          </Formulario>
        </LoginMenu>
       </ContainerLogin>

  );
}

