import React from 'react';
import Header from './components/Header/index'
import Carousel from './components/Carousel';
import Cards from './components/Cards';
import Clientes from './components/Clientes';
import Planos from './components/Planos';

export default function Home() {
  return (
    <>
      <Header />
      <Carousel />
      <Cards />
      <Clientes />
      <Planos/>
    </>
  );
}
