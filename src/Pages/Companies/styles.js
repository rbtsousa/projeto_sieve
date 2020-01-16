import styled from "styled-components"

export const Aside = styled.div`
    display: flex;
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
        margin-left: 40px;
        }
        a{
            font-family: Montserrat;
            text-decoration: none;
            font-size: 25px;
            align-self: center;
            >img{
            width: 35px;
        }
        }

`

export const NavStyled = styled.nav`
    min-width: 250px;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    justify-content: space-between;
    background-color: #222D2F;
    color: #fff;
    max-width: 300px;
    img{
        width:100px;
    };
    h1{
        font-family: Montserrat;
        font-weight: 600;
        font-size: 25px;
    };
    ul{
        display:flex;
        flex-direction: column;
        margin-top: 10px;
        li{
            display: flex;
            margin: 5px 5px 10px 5px;
            font-size: 20px;
            align-items: center;
            a{
                display: flex;
                align-items: center;
                text-decoration: none;
                color: white;
            }
        };
    };
    li{
        
        list-style: none;
        cursor: pointer;
        >img{
            width: 35px;
        }
        a{
            width: 35px;
        }
    };
    span{
        margin-left: 10px;
    };
    .navegacao{
        margin-top: 45px;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        .Perfil{
            background: white;
            border-radius: 50px;
            margin: 0 auto;
        }
        
}
`
export const Main = styled.main`
    flex: 1;
    display: flex;
    flex-direction: column;
    height: 100vh;
`
export const Location = styled.div`
    margin-bottom: 15px;
    font-family: Montserrat;
    font-size: 20px;
    span{
        margin: 10px 0px 5px 10px;
    }

`
export const Instituicao = styled.ul`
    margin: 0 auto;
`
