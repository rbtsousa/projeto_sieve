import React from 'react';
import {ContainerCards,Card,ContainerImg} from './styles'
export default function Cards() {
  return (
    <>
    <ContainerCards>
        <Card>
            <ContainerImg>
            <img src="https://i.imgur.com/vfDHYFj.png" alt="" />
            </ContainerImg>
            <div>
            <h2>Aumenta a produtividade</h2>
            <p>Com um sistema totalmente automatizado, a sieve busca por meio das tecnologias realizar uma peneira entre os candidatos.</p>
            </div>
            <a href="http://www.mozilla.com/">Saiba mais</a>
        </Card>
        <Card>
            <ContainerImg>
            <img src="https://i.imgur.com/1jLmjup.png" alt="" />
            </ContainerImg>
            <div>
            <h2>Inscritos Capacitados</h2>
            <p>Testes de capacitação técnicos que visam classificar os candidatos de acordo com seu conhecimento.</p>
            </div>
            <a href="http://www.mozilla.com/">Saiba mais</a>
        </Card>
            
        <Card>
            <ContainerImg>
            <img src="https://i.imgur.com/1QoIeKR.png" alt=""/>
            </ContainerImg>
            <div>
            <h2>Valor  Acessivel</h2>
            <p>Valores competitivos que diminuem os gastos com os processos seletivos.</p>
            </div>
            <a href="http://www.mozilla.com/">Saiba mais</a>
        </Card>
    </ContainerCards>
    <hr></hr>
    </>
  );
}
