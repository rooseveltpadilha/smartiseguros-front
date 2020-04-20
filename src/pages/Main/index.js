import React, { Component } from 'react'
import { Banner, Video } from './styles.js'
import DivHeader from '../../Components/Header/index'
import ProfileImage from '../../assets/img/user-profile.png'
import DivFooter from '../../Components/Footer'
import EncontreDiv from '../../Components/Encontre'

import '../../assets/css/fonts.css'

export default class Main extends Component {
  render() {
    return (
      <>
        <DivHeader />
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
              <iframe src="https://player.vimeo.com/video/409687013" frameborder="0" allow="autoplay; fullscreen" title="vimeo-video" allowfullscreen />
            </div>
          </div>
        </Video>
        <EncontreDiv />
        <DivFooter />
      </>
    );
  }
}

