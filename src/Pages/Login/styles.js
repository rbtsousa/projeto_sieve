import styled from 'styled-components'


export const ContainerLogin = styled.div`

`


export const LoginMenu = styled.div`
margin: 5px;


`


export const ContainerImg = styled.div`

display:flex;
justify-content: center;
padding-top: 15px;

`
export const Formulario = styled.div`

  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 40px;

button{

  border: 1px solid #9A9696;
  border-radius: 4.5px;
  cursor: pointer;


}
a{

  display:flex;
  text-decoration: none;
  font-family: Montserrat;
  font-size: 14px;
  flex-direction:row-reverse;


}
span{
  font-family: Montserrat;
  font-size: 14px;
}
`

export const Inputs = styled.div`

display: flex;
justify-content: space-between;

input{
  width: 360px;
  margin-left: 10px;
  height: 28px;
  border: 1px solid #9A9696;
  border-radius:5px;

}

`
export const Realysub = styled.div`
display:flex;
justify-content: center;


input{
  width: 180px;
  height: 45px;
  margin: 5px;
  color: #fff;
  font-size: 14px;
  font-weight:bold;
  background-color:#4894CE;
  border-radius: 6px;
  cursor: pointer;
}
input.Submit{
  color: #fff;
  background-color:#007BFF;
  font-family: Montserrat;
  font-size:14px;
  font-weight:bold;
  border:none;


}
input.Submit:hover{
  background-color: #0069D9;
  color: #fff;
}
input.Register{
  font-family: Montserrat;
  font-size: 14px;
  background-color: #DC3545;
  border:none;

}
input.Register:hover{
  background-color:#C82333;
}

`
//
