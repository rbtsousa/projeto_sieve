import React from 'react';
import { ContainerCl,HR,P } from './styles';

export default function Clientes() {
  return (
    <>
      <P>
      <span> Clientes apaixonados e resultados poderosos</span>
      </P>
      <ContainerCl>
          <img class= "senac"src="https://i.imgur.com/bSKh74L.png" alt="senac"/>
          <hr size= "70" color= "#C4C4C4"></hr>
                     <img class="firjan" src="https://i.imgur.com/cWx3BK3.png" alt="firjan"/>
                          <hr size= "70" color= "#C4C4C4"></hr>
                             <img class= "recode"src="https://i.imgur.com/ws6ESdv.png" alt="recode"/>
      </ContainerCl>
                       <HR color= "#C4C4C4"></HR>
    </>
  );
}

