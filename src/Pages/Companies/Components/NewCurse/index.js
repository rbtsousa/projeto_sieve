import React from 'react';

import { Container, Belt } from './styles';

export default function NewCurse() {
  return (
    <>

            <h1>Novo Processo Seletivo</h1>

            <hr></hr>
    <Container>
        <form>
            <label htmlFor="title">Título do Curso
                <input name="title" type="text"></input>
            </label>
            

            <label htmlFor="">Período de Inscrição
                <input type="text"></input>
            </label>

        <Belt>
            <label htmlFor="faixa">Faixa Etária?
                <select>
                      <option value="N">Selecione</option>
                      <option value="18">18</option>
                      <option value="19">19</option>
                      <option value="20">20</option>
                      <option value="21">21</option>
                </select>
                  <h3>Até</h3>
                <select>
                      <option value="N">Selecione</option>
                      <option value="22">22</option>
                      <option value="23">23</option>
                      <option value="24">24</option>
                      <option value="25">25</option>
                      <option value="25">26</option>
                      <option value="25">27</option>
                      <option value="25">28</option>
                      <option value="25">29</option>
                      <option value="25">30</option>
                </select>

                <h3>Anos</h3>
              </label>
         </Belt>
              <label>Gênero
                <input type="radio" defaultChecked></input>
                <spam>Masculino</spam>
                <input type="radio" defaultChecked></input>
                <spam>Feminino</spam>
                <input type="radio" defaultChecked></input>
                <spam>Ambos</spam>
            </label>

            <label htmlFor="faixa">Etnia?
                <select>
                      <option value="N">Selecione</option>
                      <option value="Negro">Negro</option>
                      <option value="Pardo">Pardo</option>
                      <option value="Branco">Branco</option>
                      <option value="Outro">Outro</option>
                </select>
            </label>

            <label htmlFor="faixa">Nível Escolaridade?
                <select>
                      <option value="N">Selecione</option>
                      <option value="Mcompleto">Nível Médio - Completo</option>
                      <option value="Mincompleto">Nível Médio - Incompleto</option>
                      <option value="fundamental">Nível Fundamental</option>
                      <option value="superior">Nível Superior</option>
                </select>
            </label>
            <label htmlFor="faixa">Teste de Conhecimento?
                <select>
                      <option value="N">Selecione</option>
                      <option value="sim">Sim</option>
                      <option value="nao">Não</option>
                </select>
            </label>
            <label htmlFor="faixa">Descrição do Cursou?
              <textarea>

              </textarea>
            </label>

      </form>
</Container>
</>
  );
}
