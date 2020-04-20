import styled from 'styled-components';
import img from '../../assets/img/background.jpg';
import media from 'styled-media-query';

export const Header = styled.div`
  width: 100vw;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
`;

export const HeaderContent = styled.div`
  max-width: 1200px;
  background: #fff;
  margin: 0px auto;
  height: 80px;
  display: flex;
  flex-direction: row;
  align-items: center;

  img {
    width: 84px;
    height: 44px;
    margin: 0px 30px 0px 30px;
  }

  ul {
    list-style: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    a {
      color: #000;
      text-decoration: none;
      li {
        margin: 20px;
        font-size: 16px;
        font-family: 'Rubik', sans-serif;
      }
    }
    a:hover {
      opacity: 0.9;
    }
  }
`;

export const Banner = styled.div`
  width: 100vw;
  background-image: url(${img});
  width: 100vw;
  height: 1000px;
  margin-top: 2px;

  div {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: left;

    span {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      align-content: center;
      padding-top: 150px;
      padding-right: 20px;
      width: 700px;
      height: 372px;
      margin-left: 0px;
      margin-top: 352px;
      ${media.lessThan("medium")`
         width: 410px;
      `}
        p {
          font-size: 55px;
            ${media.lessThan("medium")`
              font-size: 32px;
            `}
        }
        a {
          width: 650px;
          height: 95px;
          background: #8FBE00;
          border-radius: 8px;
          font-family: Red Hat Display;
          font-size: 24px;
          padding: 10px;
          margin: 20px 0;
          color: #fff;
          text-decoration: none;
          text-align: center;
          ${media.lessThan("medium")`
             width: 365px;
             padding-top: 15px;
        `}
        }
        a:hover {
          background: #96C700;
        }

      }
  }
`

export const Video = styled.div`
  background-color: #EDEDED;


  div:nth-child(2) {
    display: flex;
    max-width: 1200px;
    margin: 0 auto;
    min-height: 300px;
    padding: 20px 0px;
    flex-wrap: wrap;
    justify-content: space-around;
    background-color: #FFFFFF;
    border-radius: 9px;

    iframe {
      height: 630px !important;
      width: 630px !important;
      ${media.lessThan("small")`
      position: relative;
      top: -165px;
        `}
    }
  }

  div:first-child {
    display: flex;
    max-width: 1200px;
    margin: 0 auto;
    min-height: 300px;
    padding: 40px 0px;
    flex-wrap: wrap;
    justify-content: space-around;
    ${media.lessThan("large")`
    justify-content: center;
    `}

      div {
        display: flex;
        height: 100px;
        margin: 5px 10px;
        padding: 0px 5px;
        width: 380px;
        align-content: center;
        ${media.lessThan("large")`
        margin: 20px 0px 0px 20px;
        padding: 0px 20px;
      `}
      }

      div:nth-child(1) {
        background: #FFFFFF;
        border-radius: 9px;

        span:first-child {
          font-family: 'Rubik', sans-serif;
          font-size: 20px;
          text-align: right;
          padding: 20px 20px 10px 10px;
          color: #000000;
        }

        span:nth-child(2) {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          width: 510px;


          img {
            height: 100px;
            width: 100px;
            margin-left: 40px;
            margin-top: 20px;
            margin-bottom: 70px;
          }

          span {
            width: 250px;
            height: 120px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-end;
            padding-right: 50px;
            margin-bottom: 10px;

            p {
              font-family: 'Rubik', sans-serif;
            }

            p:first-child {
              font-size: 26px;
            }

            p:nth-child(2) {
              font-size: 16px;
            }
          }
        }
      }
      div:nth-child(2) {
        justify-content: center;
      }
  }
`


