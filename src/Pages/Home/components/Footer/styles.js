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
    }
    ul{
        margin: 15px;
    }
    span{
        margin: 10px;
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
        font-size: 25px;
        color: #fff;
        font-weight: bolder;
    }
`
export const HR = styled.hr`
    margin: 0 auto;
    width: 70%;

`