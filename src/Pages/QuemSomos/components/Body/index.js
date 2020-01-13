import React from 'react';
import { Largepanel,BigBox,Footer } from './styles';

export default function Body() {

  return (
    <>
    <Largepanel>
      <hr className="hr-2"></hr>
      <div>
      <h1>Sobre</h1>
      <hr></hr>
      </div>
      <BigBox>
          <p>
          <strong>Missão</strong>: Levar educação e capacitação tecnológica a pessoas em vulnerabilidade economica.
          <br/>
          <br/>
          <strong>Visão</strong>:  Qualificar Jovens de baixa renda pelo Brasil.
          <br/>
          <br/>

          <strong>Valores</strong>: Visamos levar qualificação na área de tecnologia para quem não tem acesso.

          </p>
          <p>
            A plataforma sieve surgiu com a idéia de diminuir alem dos custos, o tempo gasto
            com um processo seletivo para cursos gratuitos.
            <br/>
            A plataforma sieve surgiu com a idéia de diminuir alem dos custos, o tempo gasto
            com um processo seletivo para cursos gratuitos.
          </p>
          <p>
            A plataforma sieve surgiu com a idéia de diminuir alem dos custos, o tempo gasto
            com um processo seletivo para cursos gratuitos.
          </p>
      </BigBox>

    </Largepanel>
    <Footer>
      <span> Todos os direitos reservados </span>
    </Footer>
    </>
  );
}
