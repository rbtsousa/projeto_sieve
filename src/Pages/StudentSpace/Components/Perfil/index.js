import React from 'react';
import {useSelector} from 'react-redux';
import {Form,Input} from '@rocketseat/unform'
import { Container, Foto, Seguranca } from './styles';

export default function Perfil() {
    const profile = useSelector(state=> state.user.profile)

    function handleSubmit(data){

    }

    return (
        <Container>
            <h2>Dados pessoais</h2>
            <hr></hr>
            <Foto>
                <img src="https://i.imgur.com/wEfFj6B.png" alt= "foto" />
                <div>
                    <span>Alterar foto</span>
                    <div>
                        <input /><button>Selecionar</button>
                    </div>
                    <button className="Altera">Alterar</button>
                </div>
            </Foto>
            <Form initialData={profile}>
            <section>
               
                <div>
                    <span>Nome</span><Input name="name"  className="Nome" />
                </div>
                <div>
                    <span>idade:</span><Input name="age" disabled/>
                </div>
                <div>
                    <span>Genero:</span><Input disabled name="gender"/>
                </div>
            </section>
            <section>
                <div>
                    <span>Estado</span><input />

                </div>
                <div>
                    <span>Escolaridade</span><input className="Escolaridade" />
                </div>
                <div>
                    <span>Cidade</span><input />
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
                    <span>Email</span><Input name='email' />
                </div>
            </section>
            <button className="Salvar">Salvar Alterações</button>
            <h2>Segurança</h2>
            <hr></hr>
            <Seguranca>
                <div>
                    <span>Senha Atual</span><Input name='oldPassword' />
                </div>
                <div>
                    <span>Senha Nova</span><Input name='password' />
                </div>
                <button className="Altera">Alterar</button>
            </Seguranca>
            </Form>
        </Container>
    );
}
