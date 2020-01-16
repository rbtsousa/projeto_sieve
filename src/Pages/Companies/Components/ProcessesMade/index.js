import React from 'react';
import { Container, Curso, Conteudo} from './styles'

export default function ProcessesMade() {
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
                <table>
                    <tbody>
                    <tr>
                        <th>Colocação</th>
                        <th className= "AlunoNome">Nome do Aluno</th>
                        <th>Perfil</th>
                        <th>Condição</th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Jose Luciano Xavier Junior</td>
                        <td><a href="#">Detalhes</a></td>
                        <td><label name="Aprovado">Aprovado</label><input label="Aprovado" type="checked" type="radio"></input></td>
                    </tr>
                    </tbody>
                </table>
            </Conteudo>
        </Container>
    );
}
