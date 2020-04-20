import styled from 'styled-components';
import media from 'styled-media-query';

export const DivContent = styled.div`
  display: flex;
  margin: 0 auto;
  max-width: 1200px;
  padding-top:80px;

  div {
    margin: 0 auto 0 auto;
    width: 300px;
  }
`

export const Letreiro = styled.div`
  width: 100%;
  height: 80px;
  background: #fff;
  div {
    display: flex;
    max-width: 1200px;
    margin: 0 auto;
    flex-direction: column;
    align-items: center;
    ${media.lessThan("medium")`
        width: 365px;
    `}
    p {
      color: #000;
      font-family: 'Rubik', sans-serif;
      margin: 0px auto;
    }
    p:first-child {
      margin-top: 30px;
      font-size: 26px;
      ${media.lessThan("medium")`
        font-size: 16px;
      `}
    }
    p:nth-child(2) {
      margin-top: 12px;
      font-size: 41px;
      ${media.lessThan("medium")`
      font-size: 23px;
      `}
    }
  }
`
