import styled from 'styled-components'

export const Title = styled.span`
    display: flex;
    justify-content: center;
    margin-top: 20px;
    font-family: 'Montserrat';
    font-weight: bold;
    font-size: 20px;
    color: #a5a1a1;
    margin-bottom: 30px;
`
export const StyledPlanos = styled.div`
    display:flex;
    justify-content: center;
`;
export const PlanosSmall = styled.div`
    font-family: "Lato",sans-serif;
    font-weight: bold;
    font-size: 16px;
    color: #A5A1A1;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    background: #FFFFFF;
    box-shadow: 6px 9px 5px rgba(0, 0, 0, 0.4);
    border-radius: 5px;
    border: 1px #A1A1A1 solid;
    width: 180px;
    padding: 50px;
    height: 415px;
    margin: 40px 5px 10px 5px; 
    border-top: 20px solid #4484CE;
    ul{
        margin: 30px 0px 30px 0px;
};
    li{
       list-style-image: url("https://i.imgur.com/CSDdTtu.png?2");
       margin: 5px;
}
    button{
        font-family: 'Nunito', sans-serif;
        font-style: normal;
        font-size: 25px;
        color: #A8A4A4;
        border: 2px solid #4484CE;
        border-radius: 5px;
        width: 150px;
        font-weight: bold;
        background-color: #ffffff;
}
    hr{
        width: 150px;
        height: 1px;
        margin: 10px;

    

}

         
`;
export const PlanosGrand = styled.div`
    font-family: "Lato",sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    color: #A8A4A4;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    background: #FFFFFF;
    box-shadow: 6px 9px 5px rgba(0, 0, 0, 0.4);
    border-radius: 5px;
    border: 1px #A1A1A1 solid;
    width: 200px;
    padding: 50px;
    margin: 10px;
    height: 500px;
    border-top: 20px solid #4484CE;
    
    li{
       list-style-image: url("https://i.imgur.com/CSDdTtu.png?2");
       margin: 5px;
    } 
    ul{
        margin: 30px 0px 30px 0px;
    };
    button{
        font-family: 'Nunito', sans-serif;
        font-style: normal;
        font-size: 25px;
        color: #A8A4A4;
        border: 2px solid #4484CE;
        border-radius: 5px;
        width: 150px;
        font-weight: bold;
        background-color: #ffffff;
  
  }
  hr{
        width: 150px;
        height: 1px;
        margin: 10px;
}         
`

export const HR = styled.hr`
    margin-top: 20px;
    height: 70%;
    opacity: 0.2;

`

