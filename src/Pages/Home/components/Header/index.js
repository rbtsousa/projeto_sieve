import React from 'react';
import {StyledHeader,HR} from './styles.js'

export default function Header() {
  return (
    
    <StyledHeader>
    <span>Sieve</span>
    <HR color= "#C4C4C4" ></HR>
    <ul>
        <li>Quem Somos</li>
        <li>Empresas</li>
        <li>Planos</li>
    </ul>
    <HR color= "#C4C4C4"></HR>
    <button>Login</button>
    </StyledHeader>
    
  );
}
