import React, { Component } from 'react'
import { Header, HeaderContent, Banner, Letreiro, Video, Encontre, Corretor, Footer } from './styles.js'
import Logo from '../../assets/img/logo.png'
import ProfileImage from '../../assets/img/user-profile.png'
import VideoImage from '../../assets/img/video.png'
import LogoWhite from '../../assets/img/logo-white.png'
import Corretor1 from '../../assets/img/corretores/corretor-1.png'
import Corretor2 from '../../assets/img/corretores/corretor-2.png'
import Corretor3 from '../../assets/img/corretores/corretor-3.png'

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
              <a href="/chat"><li href="#">iniciar o chat</li></a>
            </ul>
          </HeaderContent>
        </Header >
        <Banner>
          <div>
            <span>
              <p>Confiança.</p>
              <p>Transparência.</p>
              <p>Proteção na medida certa.</p>
              <a href="/chat" alt="">
                Abrir chat inteligente
              </a>
            </span>
          </div>
        </Banner >
        <Letreiro>
          <div>
            <p>Aqui você encontrará:</p>
            <p>Os melhores profissionais do mercado</p>
          </div>
        </Letreiro>
        <Video>
          <div>
            <div>
              <span>
                “Rápido, fácil, intuitivo. Encontrei o seguro de bike que eu estava precisando. O melhor foi que eu poderia pagar por ele.”
              </span>
              <span>
                <img src={ProfileImage} alt="" />
                <span>
                  <p>Gabriel Santos</p>
                  <p>assegurado, 26 anos.</p>
                </span>
              </span>
            </div>
            <div>
              <img src={VideoImage} alt="" height="280" width="500" />
            </div>
          </div>
        </Video>
        <Encontre>
          <div>
            <p>Encontre e avalie os profissionais mais próximos</p>
          </div>
        </Encontre>
        <Corretor>
          <div>
            <div>
              <img src={Corretor1} alt="" />
              <span>
                <p>Lucas Santana</p>
                <span>
                  <p>4.8</p>
                </span>
                <p>Maceió - AL</p>
              </span>
            </div>

            <div>
              <img src={Corretor2} alt="" />
              <span>
                <p>Iago Barbosa</p>
                <span>
                  <p>4.8</p>
                </span>
                <p>Rio de Janeiro - RJ</p>
              </span>
            </div>

            <div>
              <img src={Corretor3} alt="" />
              <span>
                <p>Caique Moreno</p>
                <span>
                  <p>4.8</p>
                </span>
                <p>São José dos Campos - SP</p>
              </span>
            </div>
          </div>
        </Corretor>
        <Footer>
          <div>
            <img src={LogoWhite} alt="" height="40" />
            <p>Todos direitos reservados - 2020</p>
          </div>
        </Footer>
      </>
    );
  }
}

