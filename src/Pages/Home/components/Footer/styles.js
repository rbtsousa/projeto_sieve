import styled from 'styled-components'

export const StyledFooter = styled.div`
    margin-top: 50px;
    background-color: #37494D;

`;

export const Rodape = styled.div`
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    color: #fff;
  span{
        font-size: 18px;
        color: #fff;
        font-weight: bolder;
    };
    hr{
        margin-top: 10px;
        height: 60px;
        opacity: 0.2;
    }
    ul{
        margin: 10px;
    }
    li{
        list-style: none;
        margin: 5px;
    }
    span{
        margin: 10px 15px 10px 15px;
    }
`;

export const StyledIcons = styled.div`
    display:flex;
    justify-content: space-between;
    div{
        display: flex;
        align-items: center;
        margin: 10px;
    }
    ;
    span{
        font-size: 20px;
        color: #fff;
        font-weight: bolder;
        margin: 10px;
    }
`
export const HR = styled.hr`
    margin: 0 auto;
    width: 70%;

`
