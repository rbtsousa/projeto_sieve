import React from 'react';
import {StyledHeader} from './styles.js'

export default function Header() {
  return (
    
    <StyledHeader>
    <span>Sieve</span>
    <hr background-color= "#C4C4C4" ></hr>
    <ul>
        <li>Quem Somos</li>
        <li>Empresas</li>
        <li>Planos</li>
    </ul>
    <hr background-color= "#C4C4C4"></hr>
    <button>Login</button>
    </StyledHeader>
    
  );
}
