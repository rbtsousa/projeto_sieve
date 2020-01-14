import React from 'react';
import Header from './components/Header/index'
import Carousel from './components/Carousel';
import Cards from './components/Cards';
import Clientes from './components/Clientes';
import Planos from './components/Planos';
import Footer from './components/Footer/index';
import LoginCard from '../Login/index'
import { Component } from 'react';
import {LoginStyled} from './styles'

// import { Container } from './styles';

export default class Home extends Component {
  state = {
    index:''
  }
  setIndex = () =>{
      this.setState({index:<LoginCard/>})
  }
  render() {
    return   <>
    <Header onLogin={()=>this.setIndex()}/>
    <Carousel />
    <LoginStyled>{this.state.index}</LoginStyled>
    <Cards />
    <Clientes />
    <Planos />
    <Footer />
  </>;
  }
}

