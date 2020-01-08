import styled from 'styled-components';

export const StyledHeader = styled.div`
  display: flex;
  font-family: 'Montserrat', sans-serif;
  justify-content: space-between;
  background: #FFFFFF;
  border: 3px solid rgba(171, 167, 167, 0.8);
  box-sizing: border-box;
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.5);
  z-index: 1;
  position: fixed;
  width: 100%;
  ul{
      display: flex;
      padding: 30px;

      li{
          margin: 7px 15px 0px 15px;
          list-style: none;
          font-style: normal;
          font-weight: bold;
          font-size: 28px;
          line-height: 40px;
          text-align: right;
          color: #928D8D;
          opacity: 0.8;
        >a{
            text-decoration: none;
            color:#928D8D;

        }
      }
  }
  span{
        margin: 0px 0px 0px 25px;
        font-family: 'Molle', cursive;
        font-style: normal;
        font-weight: bold;
        font-size: 65px;
        line-height: 50px;
        color: #928D8D;
        opacity: 0.8;
        padding: 30px;
  }
  button{
      margin: 30px;
      font-family: 'Montserrat', sans-serif;
      font-style: normal;
      font-weight: bold;
      font-size: 25px;
      color: #A8A4A4;
      border: 3px solid #4484CE;
      width: 160px;
      height: 50px;
      border-radius: 12px;
      background-color: #ffffff;
      transition: background 0.4s;
      cursor:pointer;
      a{
          text-decoration: none;
          color:#A8A4A4;
      }
  }
  button:hover{
      background: #4484CE;
      color: #ffffff;
  }

`;
export const HR = styled.hr`
    margin-top: 20px;
    height: 70px;
    opacity: 0.2;
`

