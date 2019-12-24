import styled from 'styled-components'

export const ContainerCards = styled.div`
    display: flex;
    margin: 30px;
    justify-content: space-between;
    flex-wrap: wrap;

    a{
       text-decoration: none;
    }
`
;
export const Card = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    background: #FFFFFF;
    box-shadow: 6px 9px 5px rgba(0, 0, 0, 0.4);
    border-radius: 18px;
    border: 1px #A1A1A1 solid;
    max-width: 270px;
    padding: 50px;
    margin: 10px;
    height: 400px;
    p{
        font-family: Montserrat;
        font-style: normal;
        font-weight: bold;
        font-size: 15px;
        text-align: center;
        color: #a5a1a1;
    }
    h2{
        text-align: center;
        color: #A5A1A1;
        margin: 10px;
        font-size: 20px;
        width: 250px
    }
    img{
        display: flex;
        margin-bottom: 20px;
    }
    hr{
      width: 13
    }
`;
export const ContainerImg = styled.div`
    display: flex;
    justify-content: center;
`

export const Hr = styled.hr`
    margin: 0 auto;
    width: 70%;
    opacity: 0.2;
`
