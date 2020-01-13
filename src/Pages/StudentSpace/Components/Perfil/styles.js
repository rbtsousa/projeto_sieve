import styled from 'styled-components';

export const Container = styled.div`
  font-family: Merriweather Sans;
  padding: 30px;
  display: flex;
  flex-direction: column;
    h2{
        color:#A5A1A1;
        
    }
    section{
      display: flex;
      font-size: 20px;
      justify-content: space-between;
      div{
        display: flex;
        flex-direction: column;
        margin: 10px;
        .Nome{
          width: 400px;
        }
        .Escolaridade{
          width: 400px;
        }
        span{
          margin:5px;
          font-size: 25px;
        }
        input{
          margin: 5px;
          height: 30px;
          border-radius: 8px;
          border: none;
          border: 1px solid gray;
          font-size: 20px;
        }
      }
    }
    .Salvar{
      width: 200px;
      margin: 10px auto;
      margin-top: 15px;
      color: white;
      background-color: #3CA459;
      border-radius: 9px;
      height: 40px;
      border: none;
      font-size: 21px;
    }
    button{
    color: white;
    background-color: #3CA459;
    border-radius: 9px;
    width: 120px;
    height: 35px;
    border: none;
    font-size: 20px;
    align-self: center;
    }
`;
export const Foto = styled.div`
  margin-left: 40px;
  display: flex;
  justify-content: flex-start;
  >div{
    margin-left: 40px;
    align-self: center;
    font-family: Merriweather Sans;
    font-size: 25px;
  }
  >img{
      margin-top: 15px;
      margin-right: 20px;
      width: 150px
  }
  button{
    height: 32px;
    border-radius: 0px 13px 13px 0px;
    padding: 0px 10px 0px 10px;
    border: 1px solid gray;
    background: #C4C4C4;
    color: rgba(0, 0, 0, 0.29);
    font-family: Merriweather Sans;
    font-size: 16px;
  }
  input{
    margin-top: 5px;
    height: 30px;
    border-radius: 10px 0px 0px 10px;
    border: none;
    border: 1px solid gray;
    width: 300px;
    font-size: 20px
  }
  .Altera{
    margin-top: 15px;
    color: white;
    background-color: #3CA459;
    border-radius: 9px;
    width: 120px;
    height: 35px;
    border: none;
    font-size: 20px;
  }
  
`;
export const Seguranca = styled.div`
    font-size: 20px;
    margin-top: 20px;
    display: flex;
    justify-content: center;
  input{
          margin: 5px;
          height: 30px;
          border-radius: 8px;
          border: none;
          border: 1px solid gray;
          font-size: 20px;
        }
`
