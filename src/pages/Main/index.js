import React, { Component } from 'react'
import { Header, HeaderContent, Banner, Letreiro } from './styles.js'
import Logo from '../../assets/img/logo.png'

import '../../assets/css/fonts.css'

export default class Main extends Component {
  render() {
    return (
      <>
        <Header>
          <HeaderContent>
            <img src={Logo} alt="logo" />
            <ul>
              <a href="/"><li href="#">início</li></a>
              <a href="/chat"><li href="#">chat</li></a>
            </ul>
          </HeaderContent>
        </Header >
        <Banner>
          <div>
            <span>
              <p>Confiança.</p>
              <p>Transparência.</p>
              <p>Proteção na medida certa.</p>
              <button>
                Abrir chat inteligente
            </button>
            </span>
          </div>
        </Banner >
        <Letreiro>
          <div>
            <p>Aqui você encontrará:</p>
            <p>Os melhores profissionais do mercado</p>
          </div>
        </Letreiro>
      </>
    );
  }
}

