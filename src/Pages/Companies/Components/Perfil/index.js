import React from 'react';

import { Container, Foto, Seguranca } from './styles';

export default function Perfil() {
    return (
        <Container>
            <h2>Dados pessoais</h2>
            <hr></hr>
            <Foto>
                <img src="https://i.imgur.com/w9Xi7YB.png" alt= "foto" />
                <div>
                    <span>Alterar foto</span>
                    <div>
                        <input /><button>Selecionar</button>
                    </div>
                    <button className="Altera">Alterar</button>
                </div>
            </Foto>
            <section>
                <div>
                    <span>Nome da instituição </span><input className="Nome" />
                </div>
                <div>
                    <span>Inicio do processo</span><input />
                </div>
                <div>
                    <span>CNPJ</span><input />
                </div>
            </section>
            <section>
                <div>
                    <span>Estado</span><input />

                </div>
                <div>
                    <span>Cidade</span><input className="Escolaridade" />
                </div>
                <div>
                    <span>Escolaridade</span><input />
                </div>
            </section>
            <section>
                <div>
                    <span>Telefone</span><input />
                </div>
                <div>
                    <span>Celular</span><input />
                </div>
                <div>
                    <span>Email</span><input />
                </div>
            </section>
            <button className="Salvar">Salvar Alterações</button>
            <h2>Segurança</h2>
            <hr></hr>
            <Seguranca>
                <div>
                    <span>Senha Atual</span><input />
                </div>
                <div>
                    <span>Senha Nova</span><input />
                </div>
                <button className="Altera">Alterar</button>
            </Seguranca>
        </Container>
    );
}
