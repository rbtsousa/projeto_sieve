import styled from "styled-components"

export const Aside = styled.div`
    display: flex;
    flex-direction:  column;
    max-width: 250px;
    justify-content: space-between;
    background-color: #222D2F;
    color: #fff;
    div{
        margin: 5px;
    };


`
export const HeaderStyled = styled.header`
    display: flex;
    padding: 20px;
    color : #fff;
    justify-content: space-between;
    font-family: Molle;
    background-color: #222D2F; 
    font-size: 45px;
    align-items: center;
    span{
        margin-left: 40x
    };
    
    
`

export const NavStyled = styled.nav`
    display: flex;
    flex-direction: column;
    
    align-items: center;
    height: 100vh;
    background-color: #222D2F;
    color: #fff;

    
    img{
        margin: 20px 20px 0px;
        width:100px
    };
    h1{
        font-family: Montserrat;
        font-weight: 600;
        font-size: 25px;
    };
    ul{
        display:flex;
        flex-direction: column;
        li{
            margin: 5px;
            flex-direction: column;
            align-items: center;
        };
    };
    li{
        list-style: none; 
    };
    span{
        margin:5px;
    };

`
export const Instituicoes = styled.li`
    display: flex;   
` 