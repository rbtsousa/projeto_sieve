import styled from 'styled-components';

export const Screen = styled.div`
  height: 300px;
`
export const SideBar = styled.div`
  display: flex;
  width: 100%;
  height: 80px;
  background-color: #222D2F;

  margin-top:10px;


`;

export const Cards = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 40px;


  div{

    margin: 10px;
    width: 190px;
    height: 200px;
    background-color: #fff;
    border: 1px solid #C4C4C4;
    box-shadow: 6px 9px 5px rgba(0, 0, 0, 0.3);
    border-radius:4px;
    cursor: pointer;
    transition: 0.2s ease-in-out;

  }
  div:hover{
      width: 200px;
      height: 225px;
    }
    img{

      display:flex;
      align-items: center;
      margin:0 auto;
      padding-top:4px;
      border-radius: 50%;
}


    span{

      display:flex;
      justify-content:center;
      margin: 6px;
      font-size: 12px;
      font-family: Montserrat;

    }
    h3{
      display:flex;
      justify-content:center;
      font-family: Montserrat;
      padding-top: 10px;
    }


`;






