import React, { Component } from 'react'
import { Footer } from './styles.js'
import LogoWhite from '../../assets/img/logo-white.png'

export default class DivFooter extends Component {
  render() {
    return (
      <Footer>
        <div>
          <img src={LogoWhite} alt="" height="40" />
          <p>© Todos direitos reservados - Equipe 25 - Hackaton Gr1d - 2020</p>
        </div>
      </Footer>
    )
  }
}
