import styled from 'styled-components'

export const ContainerCards = styled.div`
    display: flex;
    margin: 30px;
    justify-content: space-between;
    flex-wrap: wrap;
`   
;
export const Card = styled.div`
    display: block;
    justify-content: space-between;
    background: #FFFFFF;
    box-shadow: 6px 9px 5px rgba(0, 0, 0, 0.4);
    border-radius: 18px;
    border: 1px #A1A1A1 solid;
    width: 300px;
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
        margin-bottom: 20px;
    }
`;
export const ContainerImg = styled.div`
    display: flex;
    justify-content: center;
`
export const StyledA = styled.div`
    
`