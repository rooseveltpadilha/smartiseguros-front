import React, { Component } from 'react'
import { Header, HeaderContent } from './styles'
import Logo from '../../assets/img/logo.png'

export default class DivHeader extends Component {
  render() {
    return (
      <>
        <Header>
          <HeaderContent>
            <img src={Logo} alt="logo" />
            <ul>
              <a href="/"><li href="#">início</li></a>
              <a href="/chat"><li href="#">iniciar o chat</li></a>
            </ul>
          </HeaderContent>
        </Header >
      </>
    )
  }
}
