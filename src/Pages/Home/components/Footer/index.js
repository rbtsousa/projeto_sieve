import React from 'react';
import { StyledFooter, Rodape, StyledIcons, HR } from './styles'
import { AiOutlineFacebook, AiOutlineInstagram } from 'react-icons/ai'
import { MdPhoneInTalk } from 'react-icons/md'
export default function Footer() {
  return (
    <>
      <StyledFooter>
        <StyledIcons>
          <div><MdPhoneInTalk color="#fff" size="30px" /><span>21 2687-7214</span></div>
          <div><AiOutlineFacebook color="#fff" size="45px" /><AiOutlineInstagram color="#fff" size="47px" /></div>
        </StyledIcons>
        <HR></HR>
        <Rodape>
          <div>
            <span>Projeto</span>
            <ul>
              <li>Quem Somos</li>
              <li>Politica de Privacidade</li>
              <li>Como funciona</li>
            </ul>
          </div>
          <hr></hr>
          <div>
            <span>Contato</span>
            <ul>
              <li>Fale Conosco</li>
              <li>Indique para um amigo</li>
              <li>Perguntas frequentes</li>
            </ul>
          </div>
          <hr></hr>
          <div>
            <span>Projeto</span>
            <ul>
              <li>Quem Somos</li>
              <li>Trabalhe Conosco</li>
            </ul>
          </div>
        </Rodape>
      </StyledFooter>
    </>
  );
}
