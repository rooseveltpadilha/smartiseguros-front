import React, { Component } from 'react'
import DivHeader from '../../Components/Header/index'
import DivFooter from '../../Components/Footer'
import PropTypes from 'prop-types';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import { DivContent, Letreiro } from './styles'
import EncontreDiv from '../../Components/Encontre'

import '../../assets/css/fonts.css'

const theme = {
  background: '#f5f8fb',
  headerBgColor: '#EF6C00',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: '#EF6C00',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
};


export default class Main extends Component {
  render() {
    return (
      <>
        <DivHeader />
        <Letreiro>
          <div>
            <p>Encontre o plano ideal para você</p>
            <p>Converse conosco agora mesmo</p>
          </div>
        </Letreiro>
        <DivContent>
          <ThemeProvider theme={theme}>
            <ChatBot
              steps={[
                {
                  id: '1',
                  message: 'Qual seu nome?',
                  trigger: 'nome',
                },
                {
                  id: 'nome',
                  user: true,
                  trigger: '2',
                },
                {
                  id: '2',
                  message: 'Vou fazer algumas perguntas para te conhecer melhor...',
                  trigger: 'viajar-pergunta',
                },
                {
                  id: 'viajar-pergunta',
                  message: 'Você costuma viajar com frequência?',
                  trigger: 'viajar',
                },
                {
                  id: 'viajar',
                  options: [
                    { value: true, label: 'Sim', trigger: 'carro-pergunta' },
                    { value: false, label: 'Não', trigger: 'carro-pergunta' },
                  ],
                },
                {
                  id: 'carro-pergunta',
                  message: 'Tem carro? Se sim, está insatisfeito?',
                  trigger: 'carro',
                },
                {
                  id: 'carro',
                  options: [
                    { value: true, label: 'Sim', trigger: 'bicicleta-pergunta' },
                    { value: false, label: 'Não', trigger: 'bicicleta-pergunta' },
                    { value: false, label: 'Não tenho carro', trigger: 'bicicleta-pergunta' },
                  ],
                },
                {
                  id: 'bicicleta-pergunta',
                  message: 'Tem uma bicicleta para chamar de "meu amor"?',
                  trigger: 'bicicleta',
                },
                {
                  id: 'bicicleta',
                  options: [
                    { value: true, label: 'Sim', trigger: 'saude-odonto-pergunta' },
                    { value: false, label: 'Não', trigger: 'saude-odonto-pergunta' },
                  ],
                },
                {
                  id: 'saude-odonto-pergunta',
                  message: 'Tem interesse ou está insatisfeito com seu plano de saúde ou dental😄?',
                  trigger: 'saude-odonto',
                },
                {
                  id: 'saude-odonto',
                  options: [
                    { label: 'Sim', trigger: 'saudeOdontoEscolha-pergunta' },
                    { label: 'Não', trigger: 'trabalho-pergunta' },
                  ]
                },
                {
                  id: 'saudeOdontoEscolha-pergunta',
                  message: 'Qual deles?',
                  trigger: 'saudeOdontoEscolha',
                },
                {
                  id: 'saudeOdontoEscolha',
                  options: [
                    { value: 1, label: 'Saúde💪', trigger: 'trabalho-pergunta' },
                    { value: 2, label: 'Dental😄', trigger: 'trabalho-pergunta' },
                    { value: 3, label: 'Ambos', trigger: 'trabalho-pergunta' },
                  ],
                },
                {
                  id: 'trabalho-pergunta',
                  message: 'Por acaso seu trabalho envolve algum risco de saúde?',
                  trigger: 'trabalho',
                },
                {
                  id: 'trabalho',
                  options: [
                    { value: true, label: 'Sim', trigger: 'residencial-pergunta' },
                    { value: false, label: 'Não', trigger: 'residencial-pergunta' },
                  ]
                },
                {
                  id: 'residencial-pergunta',
                  message: 'Que tal proteger sua família e seu lar de acidentes?',
                  trigger: 'residencial',
                },
                {
                  id: 'residencial',
                  options: [
                    { value: true, label: 'Eu topo!', trigger: 'recomendacao' },
                    { value: false, label: 'Obrigado, já tenho seguro.', trigger: 'recomendacao' },
                  ]
                },
                {
                  id: 'recomendacao',
                  message: 'Obrigado pelo papo, logo mais o corretor entrar em contato! 🚀😍'
                }
              ]}
            />
          </ThemeProvider>
        </DivContent>
        <EncontreDiv />
        <DivFooter />
      </>
    );
  }
}





class Review extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nome: '',
      viajar: '',
      carroSeguro: '',
      bicicleta: '',
      saudeOdontoEscolha: '',
      trabalho: '',
      residencial: ''
    };
  }

  resultado = []

  componentWillMount() {
    const { steps } = this.props;
    const { nome, viajar, carroSeguro, bicicleta, saudeOdontoEscolha, trabalho, residencial } = steps;

    console.log(nome, viajar, carroSeguro, bicicleta, saudeOdontoEscolha, trabalho, residencial)
    if (viajar.value) {
      this.resultado.concat({
        'nome': 'Diversos seguros de viagem',
        'descricao': 'Despesas médico-hospitalares em viagem, invalidez permanente total por acidente, morte acidental em viagem...',
        'empresa': 'Seguro viagem',
        'url': 'https://www.proteste.org.br/-/media/1,-d-,global-artwork/iilustration/seguro-viagem-01.svg?rev=95ae91fe-fa4d-4939-bed7-1bb858749b35&la=pt-BR&hash=503681E4D29121D724A2981941BB0CC3'
      })
    }



    if (bicicleta.value) {
      this.resultado.concat({
        'nome': 'Seguro de Bike',
        'descricao': 'Com o seguro de bicicleta da Porto Seguro é pedalar e relaxar. O Porto Seguro Bike é uma solução completa, que cuida não só da bicicleta e do ciclista, mas dos terceiros.',
        'empresa': 'Porto Seguro',
        'url': 'https://porto-seguro-celular.com/img/logo-porto-seguro.png',
      })
    }

    if (saudeOdontoEscolha.value === 1) {
      this.resultado.concat({
        'nome': 'Plano de saúde',
        'descricao': 'Com ampla rede médica e os melhores hospitais, o plano Bradesco tem a melhor rede médica. Reembolso, exames, consultas, internações e cirurgias, tudo para manter você tranquilo.',
        'empresa': 'SulAmérica',
        'url': 'http://sulamericasaudesa.com.br/imagens/logo_sulamerica.gif',
      })
    }

    if (saudeOdontoEscolha.value === 2) {
      this.resultado.concat({
        'nome': 'Plano dental',
        'descricao': 'Atendimento como você merece. Os melhores planos e profissionais a um preço que cabe no seu bolso. Confira as vantagens de contar com Amil Dental.',
        'empresa': 'Amil',
        'url': 'https://www.amildental.com.br/file/general/Amil_dental_Positiva_Colorida_RGB-01-min.png',
      })
    }

    if (saudeOdontoEscolha.value === 3) {
      this.resultado.concat({
        'nome': 'Plano de saúde',
        'descricao': 'Com ampla rede médica e os melhores hospitais, o plano Bradesco tem a melhor rede médica. Reembolso, exames, consultas, internações e cirurgias, tudo para manter você tranquilo.',
        'empresa': 'SulAmérica',
        'url': 'http://sulamericasaudesa.com.br/imagens/logo_sulamerica.gif',
      })

      this.resultado.concat({
        'nome': 'Plano dental',
        'descricao': 'Atendimento como você merece. Os melhores planos e profissionais a um preço que cabe no seu bolso. Confira as vantagens de contar com Amil Dental.',
        'empresa': 'Amil',
        'url': 'https://www.amildental.com.br/file/general/Amil_dental_Positiva_Colorida_RGB-01-min.png',
      })
    }

    if (trabalho.value) {
      this.resultado.concat({
        'nome': 'Renda por invalidez',
        'descricao': 'O Seguro de Vida Invalidez protege sua renda em caso de invalidez por acidente ou até invalidez por doença.',
        'empresa': 'Mongeral Aegon',
        'url': 'https://madstyle.mongeralaegon.com.br/assets/app/css/img/site/global/seg_grad_mob.svg',
      })
    }

    if (residencial.value) {
      this.resultado.concat({
        'nome': 'Proteção para o lar',
        'descricao': 'Além das coberturas para o seu imóvel, com o Porto Seguro Residência você conta com serviços que facilitam o dia-a-dia e trazem comodidade.',
        'empresa': 'SulAmérica',
        'url': 'https://porto-seguro-celular.com/img/logo-porto-seguro.png',
      })
    }

    console.log(this.resultado)
  }

  render() {
    return (
      <div style={{ width: '100%' }}>
        <h1>Os seguro que recomendamos para você:</h1>

      </div>
    );
  }
}

Review.propTypes = {
  steps: PropTypes.object,
};

Review.defaultProps = {
  steps: undefined,
};
