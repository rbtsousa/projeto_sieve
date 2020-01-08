import React from 'react';
import { StyledHeader, HR } from './styles.js'
import {Link} from 'react-router-dom'
export default function Header() {
  return (

    <StyledHeader>
      <span>Sieve</span>
      <HR color="#C4C4C4" ></HR>
      <ul>
        <li><Link to='/quemsomos'>Quem somos</Link></li>
        <li>Empresas</li>
        <li>Planos</li>
      </ul>
      <HR color="#C4C4C4"></HR>
      <button><Link to='/login'>Login</Link></button>
    </StyledHeader>

  );
}
