import styled from 'styled-components';
import img from '../../assets/img/background.jpg';
import media from 'styled-media-query';

export const Header = styled.div`
  weight: 100vw;
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
         width: 500px;
      `}
        p {
          font-size: 55px;
            ${media.lessThan("medium")`
              font-size: 40px;
            `}
        }
        button {
          width: 650px;
          height: 95px;
          background: #8FBE00;
          border-radius: 8px;
          font-family: Red Hat Display;
          font-size: 24px;
          padding: 10px;
          margin: 20px 0;
          color: #fff;
          ${media.lessThan("medium")`
             width: 465px;
        `}
        }
        button:hover {
          background: #96C700;
        }

      }
  }
`
export const Letreiro = styled.div`
  width: 100%;
  height: 250px;
  max-width: 1200px;
  background: #fff;
  margin: 0px auto;
  div {
    display: flex;
    width: 1200px;
    flex-direction: column;
    align-items: center;
    ${media.lessThan("medium")`
        width: 465px;
    `}
    p {
      color: #000;
      font-family: 'Rubik', sans-serif;
      margin: 0px auto;
    }
    p:first-child {
      margin-top: 80px;
      font-size: 26px;
      ${media.lessThan("medium")`
        font-size: 26px;
      `}
    }
    p:nth-child(2) {
      margin-top: 12px;
      font-size: 41px;
      ${media.lessThan("medium")`
      font-size: 26px;
      `}
    }
  }
`
