import styled from 'styled-components';

export const Container = styled.div`    
font-family: Merriweather Sans;
  h1{
      display: flex;
      justify-content: center;
      margin: 10px;
  }
  table{
      margin: 0 auto;
  }
  th{
      width: 100px;
      color: white;
      border: 1px solid black;
      background: #C4C4C4;
      >img{
          width: 25px;
          margin: 5px;
      }
    
  }
.Curso{
    width: 300px;
    background-color: black;
}
.Avaliacao{
    width: 250px;
    background-color: black;
}
.Deletar{
    background-color: black;
}
.Baixar{
    background-color: black;
}
`;
export const Pesquisa = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 30px;
    input{
        border-radius: 15px;
        background-color: #C4C4C4;
        height: 25px;
        border: none;
        width: 200px;
    }
    span{
        margin: 5px;
        font-size: 20px
    }

`
