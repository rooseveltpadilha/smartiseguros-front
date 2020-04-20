import styled from 'styled-components';

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
