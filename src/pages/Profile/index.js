import React, { Component } from 'react'
import { Header, HeaderContent } from './styles.js'
import Logo from '../../assets/img/logo.png'

export default class Profile extends Component {
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
      </>
    )
  }
}
