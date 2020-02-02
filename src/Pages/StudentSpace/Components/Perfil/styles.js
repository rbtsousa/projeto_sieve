import styled from 'styled-components';

export const Container = styled.div`
  overflow-y: auto;
  font-family: Merriweather Sans;
  padding: 30px;
  max-width: 100%;
  height: 100%;
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
          margin:3px;
          font-size: 16px;
        }
        input{
          display:flex;
          justify-content:center;
          width: 300px;
          height: 30px;
          padding: 20px;
          box-sizing: border-box;
          margin: 5px 0px 16px 0px;
          border: 2px solid #e9eaea;
          font-size: 14px;
          border-radius: 5px;
          outline: none;
          transform: all 0.5s ease;
        }
        input:focus{
          border: 2px solid #4484CE;
        }
      }
    }
    .Salvar{
      width: 200px;
      margin: 10px auto;
      margin-top: 15px;
      color: white;
      background-color: #3CA459;
      border-radius: 5px;
      min-height: 40px;
      border: none;
      font-size: 16px;
    }
    button{
    color: white;
    background-color: #3CA459;
    border-radius: 9px;
    width: 120px;
    height: 35px;
    border: none;
    font-size: 16px;
    font-weight:bold;
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
    height: 35px;
    border-radius: 5px;
    padding: 0px 10px 0px 10px;
    border: 1px solid  #e9eaea;
    background: #C4C4C4;
    color: rgba(0, 0, 0, 0.29);
    font-family: Merriweather Sans;
    font-size: 16px;
    font-weight:bold;
    color:#fff;
  }
  input{

    margin: 5px 10px 0px 0px;
    height: 35px;
    border-radius: 5px;
    border: none;
    border: 1px solid  #e9eaea;
    width: 300px;
    font-size: 20px;
    box-sizing: border-box;

  }
  input:focus{
    border: 2px solid #4484CE;
}
  .Altera{
    margin-top: 15px;
    color: white;
    background-color: #3CA459;
    border-radius: 5px;
    width: 120px;
    height: 42px;
    border: none;
    font-size: 16px;
    font-weight:bold;
  }

`;
export const Seguranca = styled.div`
    font-size: 14px;
    margin-top: 20px;
    display: flex;
    justify-content: center;

  input{
      display:flex;
      justify-content:center;
      width: 300px;
      height: 30px;
      padding: 20px;
      box-sizing: border-box;
      margin: 5px 0px 16px 15px;
      border: 2px solid #e9eaea;
      font-size: 14px;
      border-radius: 5px;
      outline: none;
      transform: all 0.5s ease;
}
    input:focus{
          border: 2px solid #4484CE;
        }
.Altera{
    margin-top: 15px;
    color: white;
    background-color: #3CA459;
    border-radius: 5px;
    width: 120px;
    height: 42px;
    border: none;
    font-size: 16px;
    font-weight:bold;
    margin: 4px 0px 0px 10px;
  }
  span{
    padding-left: 18px;
  }
`
