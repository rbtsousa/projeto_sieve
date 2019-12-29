import React from 'react';
import { ContainerLogin,LoginMenu,ContainerImg,Formulario,Inputs,Realysub } from './styles';
import {GoPerson} from 'react-icons/go';
import {FaLock} from 'react-icons/fa';





export default function LoginCard() {
  return (
    <>


    <ContainerLogin>
        <LoginMenu>
            <ContainerImg>
                <img src="https://i.imgur.com/Aaeevvn.png" alt="logo-sieve" />
            </ContainerImg>
                <Formulario>
                <form>
                  <Inputs>
                      <GoPerson size="28px"/> <input type="text" name="name" />
                  </Inputs>
                      <br/>
                        <br/>
                  <Inputs>
                      <FaLock size="28px"/>    <input type="email" name="email" />
                  </Inputs>
                    <br/>
                      <div>
                        <a href="www.google.com.br">Esqueceu sua senha ?</a>
                      </div>
                          <br/>
                            <div>
                              <input type="checkbox" name="check" /> <span>Mantenha-me conectado</span>
                            </div>
                              <br/>
                                  <br/>
                   <Realysub>
                        <input type="submit" value="Enviar" />
                   </Realysub>
                </form>
               </Formulario>
        </LoginMenu>
    </ContainerLogin>
    </>
  );
}
