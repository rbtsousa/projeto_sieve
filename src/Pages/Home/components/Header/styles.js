import styled from 'styled-components';

export const StyledHeader = styled.div`
  display: flex;
  font-family: 'Montserrat', sans-serif;
  justify-content: space-between;
  background: #FFFFFF;
  border: 3px solid rgba(171, 167, 167, 0.8);
  box-sizing: border-box;
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.5);
  border-radius: 12px;
  padding: 30px;
  z-index: 1;
  position: fixed;
  width: 100%;
  ul{
      display: flex;  
      li{
          margin: 0px 15px 0px 15px;
          list-style: none;
          font-style: normal;
          font-weight: bold;
          font-size: 36px;
          line-height: 44px;
          text-align: right;
          color: #928D8D;
      }
  }
  span{
        margin: 0px 0px 0px 25px;
        font-family: 'Molle', cursive;
        font-style: normal;
        font-weight: bold;
        font-size: 55px;
        line-height: 44px;
        color: #928D8D;
  }
  button{
      margin: 0px 30px 0px 10px;
      font-family: 'Montserrat', sans-serif;
      font-style: normal;
      font-weight: bold;
      font-size: 25px;
      color: #928D8D;  
      border: 6px solid #4484CE;
      width: 150px;
      height: 50px;
      border-radius: 12px;
      background-color: #ffffff;
  }
`;

