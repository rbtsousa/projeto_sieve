import React from 'react';
import Header from './components/Header/index'
import Carousel from './components/Carousel';
import Cards from './components/Cards';
import Clientes from './components/Clientes';
import Planos from './components/Planos';
import Footer from './components/Footer/index';
import LoginCard from '../Login/index'
import { Component } from 'react';
import Modal from 'react-modal'
//import { Fade } from '@material-ui/core'

export default class Home extends Component {
  state = {
    modalIsOpen: false,
    customStyles: {
      content: {
        top: '58%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
      }
    }
  }

  openModal = () => {
    this.setState({ modalIsOpen: true })
  }
  closeModal = () => {
    this.setState({ modalIsOpen: false })
  }


  render() {
    return <>
      <Header onLogin={() => this.openModal()} />
      <Carousel />
       <Modal
        isOpen={this.state.modalIsOpen}
        onAfterOpen={this.afterOpenModal}
        onRequestClose={this.closeModal}
        style={this.state.customStyles}
        contentLabel="Example Modal"
      >
        <LoginCard/>
      </Modal>
      <Cards />
      <Clientes />
      <Planos />
      <Footer />
    </>;
  }
}

