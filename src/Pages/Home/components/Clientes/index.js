import React from 'react';
import { ContainerCl, HR, P } from './styles';

export default function Clientes() {
  return (
    <>
      <P>
        <span> Clientes e parceiros apaixonados por resultados poderosos</span>
      </P>
      <ContainerCl>
        <img className="firjan" src="https://i.imgur.com/pqPnwha.png" alt="firjan" />
        <hr size="70" color="#C4C4C4"></hr>
        <img className="ecotrash" src="https://i.imgur.com/DI8krNg.png" alt="ecotrash" />
        <hr size="70" color="#C4C4C4"></hr>
        <img className="recode" src="https://i.imgur.com/czVxrZT.png" alt="recode" />
        
      </ContainerCl>
      <HR color="#C4C4C4"></HR>
    </>
  );
}

