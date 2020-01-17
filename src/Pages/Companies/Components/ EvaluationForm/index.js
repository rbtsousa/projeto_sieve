import React from 'react';
import { Container,CreateForm,Container2,Container3,Button } from './styles';

export default function  EvaluationForm() {
  return (
<>

    <Container>

      <CreateForm>
         <label htmlFor="nome">Digite a primeira questão
              <textarea name="firstQuestion" id="first" cols="20" rows="2"></textarea>
         </label>
         <label htmlFor="nome">1 - <input type="text" placeholder="Digite seu nome" /></label>
         <label htmlFor="nome">2 - <input type="text" placeholder="Digite seu nome" /></label>
         <label htmlFor="nome">3 - <input type="text" placeholder="Digite seu nome" /></label>
         <label htmlFor="nome">4 - <input type="text" placeholder="Digite seu nome" /></label>

      </CreateForm>
      <CreateForm>
         <label htmlFor="nome">Digite a segunda questão
              <textarea name="firstQuestion" id="first" cols="20" rows="2"></textarea>
              <label htmlFor="nome">1 - <input type="text" placeholder="Digite seu nome" /></label>
              <label htmlFor="nome">2 - <input type="text" placeholder="Digite seu nome" /></label>
              <label htmlFor="nome">3 - <input type="text" placeholder="Digite seu nome" /></label>
              <label htmlFor="nome">4 - <input type="text" placeholder="Digite seu nome" /></label>
         </label>

      </CreateForm>
</Container>

    <Container2>



    <CreateForm>
       <label htmlFor="nome">Digite a terceira questão
            <textarea name="firstQuestion" id="first" cols="20" rows="2"></textarea>
       </label>
       <label htmlFor="nome">1 - <input type="text" placeholder="Digite seu nome" /></label>
       <label htmlFor="nome">2 - <input type="text" placeholder="Digite seu nome" /></label>
       <label htmlFor="nome">3 - <input type="text" placeholder="Digite seu nome" /></label>
       <label htmlFor="nome">4 - <input type="text" placeholder="Digite seu nome" /></label>

    </CreateForm>
    <CreateForm>
       <label htmlFor="nome">Digite a quarta questão
            <textarea name="secondQuestion" id="first" cols="20" rows="2"></textarea>
            <label htmlFor="nome">1 - <input type="text" placeholder="Digite seu nome" /></label>
            <label htmlFor="nome">2 - <input type="text" placeholder="Digite seu nome" /></label>
            <label htmlFor="nome">3 - <input type="text" placeholder="Digite seu nome" /></label>
            <label htmlFor="nome">4 - <input type="text" placeholder="Digite seu nome" /></label>
       </label>

    </CreateForm>

</Container2>

<Container3>
      <CreateForm>
        <label htmlFor="nome">Digite a quinta questão
              <textarea name="firstQuestion" id="first" cols="20" rows="2"></textarea>
        </label>
        <label htmlFor="nome">1 - <input type="text" placeholder="Digite seu nome" /></label>
        <label htmlFor="nome">2 - <input type="text" placeholder="Digite seu nome" /></label>
        <label htmlFor="nome">3 - <input type="text" placeholder="Digite seu nome" /></label>
        <label htmlFor="nome">4 - <input type="text" placeholder="Digite seu nome" /></label>

      </CreateForm>
      <CreateForm>
        <label htmlFor="nome">Digite a sexta questão
              <textarea name="secondQuestion" id="first" cols="20" rows="2"></textarea>
              <label htmlFor="nome">1 - <input type="text" placeholder="Digite seu nome" /></label>
              <label htmlFor="nome">2 - <input type="text" placeholder="Digite seu nome" /></label>
              <label htmlFor="nome">3 - <input type="text" placeholder="Digite seu nome" /></label>
              <label htmlFor="nome">4 - <input type="text" placeholder="Digite seu nome" /></label>
        </label>

      </CreateForm>
      <Button>
          <div>
            <button className="btn">Enviar</button>
            <button className="btn2">Cancelar</button>
          </div>
      </Button>
</Container3>
</>
  );
}
