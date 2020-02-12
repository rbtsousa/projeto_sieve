import React, { useState } from 'react';
import api from '../../../services/api'
import { Container, Container2, CreateForm, BackGround, Hr, Button } from './styles';


export default function ReactForm() {
  const [username, setUsername] = useState('')
  const [email, setMail] = useState('')
  const [password, setPassword] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()

   await api.post('/users',{username,email,password})
    
  }
  return (
    <BackGround>


      <Container>
        <form onSubmit={handleSubmit}>
          <p>Dados Pessoais</p>

          <CreateForm>
            <label htmlFor="nome">Nome<input value={username} onChange={e => setUsername(e.target.value)} type="text" placeholder="Digite seu nome" /></label>
            <label htmlFor="nome">Email<input value={email} onChange={e=>setMail(e.target.value)}type="email" placeholder="Digite seu email" /></label>
            <label htmlFor="nome">Senha<input value={password} onChange={e=>setPassword(e.target.value)} type="password" placeholder="Digite sua senha" /></label>
          </CreateForm>

          <CreateForm>
            <label htmlFor="">CPF<input minLength="11" maxLength="11" type="text" placeholder="Digite seu CPF" /></label>
            <label htmlFor="">CEP<input minLength="8" type="text" placeholder="Digite seu CEP" /></label>
            <label htmlFor="">Endereço<input type="text" placeholder="Digite Endereço" /></label>
          </CreateForm>
          <CreateForm>
            <label htmlFor="estado">Estado
              <select name="estado" id="estado">

                <option value="N">Selecione</option>
                <option value="RJ">Rio de Janeiro</option>
                <option value="RJ">São Paulo</option>
                <option value="RJ">Minas Gerais</option>
                <option value="RJ">Belo Horizonte</option>
                <option value="RJ">Espirito Santo</option>
                <option value="RJ">Rio Grande do Sul</option>

              </select>
            </label>

            <label htmlFor="estado">Sexo

                <select name="estado" id="sexualidade">

                <option value="N">Selecione</option>
                <option value="RJ">Masculino</option>
                <option value="RJ">Feminino</option>


              </select>
            </label>
            <label htmlFor="">CEP<input type="text" placeholder="Digite seu email" /></label>
            <label htmlFor="">CPF<input type="text" placeholder="Digite seu email" /></label>
          </CreateForm>
          <button className="btn" type="submit">Enviar</button>
          <button className="btn2">Cancelar</button>
        </form>
      </Container>


      <Container2>

        <p>Dados Sociais</p>
        <form>

          <CreateForm>
            <label htmlFor="people">Quantas pessoas moram com você?
          <select name="people" id="people">
                <option value="N">Selecione</option>
                <option value="RJ">Moro sozinho</option>
                <option value="RJ">duas a três</option>
                <option value="RJ">quatro a sete</option>
                <option value="RJ">oito a dez</option>
              </select>
            </label>

            <label htmlFor="estado">A casa onde você mora é?
            <select name="estado" id="casa">
                <option value="N">Selecione</option>
                <option value="RJ">Alugada</option>
                <option value="RJ">Própria</option>
              </select>
            </label>
            <label htmlFor="nome" className="small-label">Em que você trabalha atualmente? <br /><input type="email" placeholder="Digite aqui" className="small-input" /></label>
            <label htmlFor="nome">Com que idade você começou a trabalhar?<input type="password" placeholder="Digite aqui" /></label>
          </CreateForm>

          <CreateForm>
            <label htmlFor="">Qual a sua renda mensal, aproximadamente? <input minLength="11" maxLength="11" type="text" placeholder="Digite sua renda" /></label>
            <label htmlFor="">Qual é o nível de escolaridade da sua mãe? <input minLength="8" type="text" placeholder="Digite aqui" /></label>
            <label htmlFor="" >Possui algum benefício publico? (Se sim, qual? )<input type="text" placeholder="Digite Endereço" /></label>
          </CreateForm>
          <CreateForm>
            <label htmlFor="estado">Sua casa possui quantas televisões?
              <select name="estado" id="televisao">

                <option value="N">Selecione</option>
                <option value="RJ">1 a 2</option>
                <option value="RJ">3 ou mais</option>

              </select>
            </label>

            <label htmlFor="estado">Sua casa possui internet?

                <select name="estado" id="internet">

                <option value="N">Selecione</option>
                <option value="RJ">Sim</option>
                <option value="RJ">Feminino</option>


              </select>
            </label>
            <label htmlFor="" className="small-label">Qual é sua renda mensal familiar?<input type="text" placeholder="Digite seu email" /></label>
            <label htmlFor=""> Qual é o nível de escolaridade do seu pai?<input type="text" placeholder="Digite seu email" /></label>
          </CreateForm>

          <Hr color="#C4C4C4"></Hr>
          <Button>
            <div className="btn">Enviar</div>
            <div className="btn2">Cancelar</div>
          </Button>
        </form>
      </Container2>
    </BackGround>

  );
}


