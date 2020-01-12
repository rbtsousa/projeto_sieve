import React from 'react';

import { Container } from './styles';

export default function Form() {
  return (
    <Container>
      <form>
        <label htmlFor="nome">Nome</label>
        <input type="text" id="nome"checked/>
      </form>
    </Container>
  );
}
