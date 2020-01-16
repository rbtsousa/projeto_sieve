import React from 'react';

import { Container, Pesquisa } from './styles';

export default function NewProcess() {
    return (
        <Container>
            <h1>Historio de Avaliacões</h1>
            <Pesquisa><span>Pesquisar</span><input /></Pesquisa>
            <table>
                <tr>
                    <th className="Avaliacao">Avaliação</th>
                    <th className="Curso">Curso</th>
                    <th className="Deletar">Deletar</th>
                    <th className="Baixar">Baixar</th>
                </tr>
                <tr>
                    <th></th>
                    <th></th>
                    <th><img src="https://i.imgur.com/XAyqvDL.png" alt="deletar" /></th>
                    <th><img src="https://i.imgur.com/aFd8Ynp.png" alt="baixar" /></th>
                </tr>
                <tr>
                    <th></th>
                    <th></th>
                    <th><img src="https://i.imgur.com/XAyqvDL.png" alt="deletar" /></th>
                    <th><img src="https://i.imgur.com/aFd8Ynp.png" alt="baixar" /></th>
                </tr>
                <tr>
                    <th></th>
                    <th></th>
                    <th><img src="https://i.imgur.com/XAyqvDL.png" alt="deletar" /></th>
                    <th><img src="https://i.imgur.com/aFd8Ynp.png" alt="baixar" /></th>
                </tr>
            </table>
        </Container>
    );
}
