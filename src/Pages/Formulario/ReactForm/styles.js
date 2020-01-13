import styled from 'styled-components';

export const Container = styled.div`

  max-width: 900px;
  height: 570px;
  background: #fff;
  margin: 50px auto;
  box-shadow: 0 0 20px rgba(72,98,85, 0.6);
  box-sizing: border-box;
  padding: 40px;


p{
  text-align: center;
  letter-spacing: 2px;
  font-size: 38px;
  margin-bottom: 20px;
  color: #486255;
}

.input{

  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  margin-bottom: 25px;
  border: 2px solid #e9eaea;
  font-size: 14px;
  border-radius: 5px;
  outline: none;
  transform: all 0.5s ease;
}

.login .input{
  width:260px;
  height:30px;
  margin: 5px;


}
.login{
  display:flex;

}

.login .input:last-child{
  margin-right: 0;
}



.btn{
  width: 180px;
  background: #4484CE;
  height: 42px;
  line-height: 50px;
  text-align: center;
  font-weight:bold;
  font-family: Montserrat;
  border-radius: 4px;
  margin: 0 auto;
  color: #fff;
  cursor: pointer;
  margin-top: 10px;

}
.btn:hover{
  background-color:#4471Ce;
}


.input:focus{
  border: 2px solid #4484CE;
}

::-webkit-input-placeholder{
  font-family: Montserrat;
}


`;
