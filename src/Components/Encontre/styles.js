import styled from 'styled-components'
import media from 'styled-media-query';

export const Encontre = styled.div`
  height: 180px;
  background: #fff;
  div {
    display: flex;
    max-width: 1200px;
    flex-direction: row;
    align-items: center;
    padding-top: 40px;
    margin:50px auto;

      p {
        max-width: 1000px;
        display: block;
        font-size: 40px;
        color: #000;
        font-family: 'Rubik', sans-serif;
        margin: 0px auto;
        padding: 16px;
      ${media.lessThan("large")`
        font-size: 26px;
        margin: 10px auto;
      `}

      }
    }
  }
`


export const Corretor = styled.div`
  div {
      display: flex;
      max-width: 1200px;
      flex-direction: row;
      align-items: center;
      padding-top: 0px;
      margin: 0 auto;
      flex-wrap: wrap;

      div {
        display: flex;
        flex-direction: column;
        padding: 10px 10px;

        img {
          width: 230px;
          height: 230px;
          margin-bottom: 10px;
        }

        span {
          text-align: center;
          p:first-child {
            margin-top: 0px;
            font-size: 24px;
            font-family: 'Rubik', sans-serif;
          }
          span {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;

            span {
              font-size: 20px;
              margin-left: 5px;
            }
          }
        }

      }
  }
`
