import styled from 'styled-components';

export const Container = styled.div`
padding-top: 40px;
margin: 20px;
width: 800px;
height: 800px;
display: flex;
margin:0 auto;
justify-content:space-between;
box-sizing: border-box;
background-color: #f98;

label{

font-family: Montserrat;
font-weight:bold;
font-size: 14px;
height: 20px;


input {
display:inline-block;
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
select{
  width: 120px;
  height: 45px;
  box-sizing: border-box;
  border: 2px solid #e9eaea;
  font-size: 14px;
  border-radius: 5px;
  outline: none;
  transform: all 0.5s ease;
  background:transparent;
}
}
select:focus{
  border: 2px solid #4484CE;
}
textarea{

display:block;
width: 300px;
height: 45px;
box-sizing: border-box;
border: 2px solid #e9eaea;
font-size: 14px;
border-radius: 5px;
outline: none;
transform: all 0.5s ease;
background:transparent;
resize:none;
margin-bottom: 10px;


}
textarea:focus{
border: 2px solid #4484CE;
}
`;


export const Belt = styled.div`
display: flex;
flex-wrap: nowrap;


 select{
  width: 50px;
  }
`;

