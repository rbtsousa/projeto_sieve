import React from 'react';
import { Container, Curso, Conteudo } from './styles'


export default function Cursos() {
    return (
        <Container>
            <ul>
                <li>
                    <Curso>
                        <div><img src="https://i.imgur.com/w9Xi7YB.png" alt="nome curso" /><span>Recode</span></div>
                        <ul>
                            <span>Recode Pro</span>
                            <li>Inscrições abertas</li>
                            <button>Mais detalhes</button>
                        </ul>
                    </Curso>
                </li>
                <li>
                    <Curso>
                        <div><img src="https://i.imgur.com/w9Xi7YB.png" alt="nome curso" /><span>Recode</span></div>
                        <ul>
                            <span>Recode Pro</span>
                            <li>Inscrições abertas</li>
                            <button>Mais detalhes</button>
                        </ul>
                    </Curso>
                </li>
                <li>
                    <Curso>
                        <div><img src="https://i.imgur.com/w9Xi7YB.png" alt="nome curso" /><span>Recode</span></div>
                        <ul>
                            <span>Recode Pro</span>
                            <li>Inscrições abertas</li>
                            <button>Mais detalhes</button>
                        </ul>
                    </Curso>
                </li>

            </ul>
            <Conteudo>
                <h1>Curso Recode-Pro</h1>
                <p>
                    O projeto vai selecionar 120 jovens talentosos e motivados, mesmo sem experiência na área, para um curso de capacitação técnica na área de tecnologia. Você pode ser um deles!
                    
                    Ao longo de uma formação única que alia habilidades digitais e técnicas da carreira de desenvolvedor full stack, você também irá desenvolver capacidades essenciais para o mundo do trabalho, como comunicação, colaboração, criatividade e resolução de problemas. Ainda estão previstas experiências imersivas com mentores para que você conheça de perto o dia a dia do mercado de trabalho em TI!
                    
                    As aulas serão de segunda a sexta das 14h às 18h, entre 16 de setembro de 2019 e 31 de janeiro de 2020 na Fatec Osasco em São Paulo e no Centro Universitário Celso Lisboa no Centro do Rio.
                    E você ainda ganha:
                    
                    Bolsa 100% para curso de inglês da Cultura Inglesa Online
                    Bolsa auxílio de R$ 300 por mês durante os dois meses finais do curso
                    Encaminhamento dos concluintes a vagas de trabalho nas empresas parceiras da Recode
Confira abaixo os requisitos e as etapas do processo seletivo! A lista final dos selecionados será divulgada neste site dia.</p>

                <ul>
                    <li><h2>Requisitos:</h2></li>
                    <li>Idade: maior de 18 e menor de 29.</li>
                    <li>Escolaridade: Ensino Médio</li>
                    <li>Desafio: Prova de logica de programação</li>
                </ul>

       <div className="Submetedores">
           <div><img src="https://i.imgur.com/In782Oq.png" alt="entrevista"/><span>Marcar Entrevista</span></div>
           
           <div><img src="https://i.imgur.com/TzjAvpB.png" alt="Prova"/><span>Fazer Prova</span></div>
       </div>
            </Conteudo>
        </Container>
    );
}
