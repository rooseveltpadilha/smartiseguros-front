import React, { Component } from 'react'
import { Banner, Letreiro, Video, Encontre, Corretor } from './styles.js'
import DivHeader from '../../Components/Header/index'
import ProfileImage from '../../assets/img/user-profile.png'
import VideoImage from '../../assets/img/video.png'
import Corretor1 from '../../assets/img/corretores/corretor-1.png'
import Corretor2 from '../../assets/img/corretores/corretor-2.png'
import Corretor3 from '../../assets/img/corretores/corretor-3.png'
import { FaStar } from 'react-icons/fa'
import DivFooter from '../../Components/Footer'

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
                  <FaStar />
                  <span>5.0</span>
                </span>
                <p>Maceió - AL</p>
              </span>
            </div>

            <div>
              <img src={Corretor2} alt="" />
              <span>
                <p>Iago Barbosa</p>
                <span>
                  <FaStar />
                  <span>4.8</span>
                </span>
                <p>Rio de Janeiro - RJ</p>
              </span>
            </div>

            <div>
              <img src={Corretor3} alt="" />
              <span>
                <p>Caique Moreno</p>
                <span>
                  <FaStar />
                  <span>4.6</span>
                </span>
                <p>São José dos Campos - SP</p>
              </span>
            </div>
          </div>
        </Corretor>
        <DivFooter />
      </>
    );
  }
}

