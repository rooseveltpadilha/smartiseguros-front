import React, { Component } from 'react'
import { Corretor, Encontre } from './styles'

import Corretor1 from '../../assets/img/corretores/corretor-1.png'
import Corretor2 from '../../assets/img/corretores/corretor-2.png'
import Corretor3 from '../../assets/img/corretores/corretor-3.png'
import { FaStar } from 'react-icons/fa'
import ReactTypingEffect from 'react-typing-effect';



export default class EncontreDiv extends Component {

  render() {
    return (
      <>
        <Encontre>
          <div>
            <p>
              <ReactTypingEffect text={["Encontre os melhores profissionais do mercado", "Veja o perfil e avaliação dos profissionais", "Contrate seguros com confiança e conforto"]} speed="20" eraseDelay="2000" typingDelay="1000" />
            </p>
          </div>
        </Encontre>
        <Corretor>
          <div>
            <div>
              <img src={Corretor1} alt="" />
              <span>
                <p>Lucas Santana</p>
                <span>
                  <FaStar color="#FF4E50" />
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
                  <FaStar color="#FF4E50" />
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
                  <FaStar color="#FF4E50" />
                  <span>4.6</span>
                </span>
                <p>São José dos Campos - SP</p>
              </span>
            </div>
          </div>
        </Corretor>
      </>
    )
  }
}
