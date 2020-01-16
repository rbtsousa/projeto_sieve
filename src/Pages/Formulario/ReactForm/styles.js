import styled from 'styled-components';


export const BackGround = styled.div`
width: 100vw;
height: 100%;

`

export const Container = styled.div`

  max-width: 900px;
  height: 480px;
  background: #fff;
  margin: 50px auto;
  box-shadow: 0 0 20px rgba(72,98,85, 0.2);
  box-sizing: border-box;
  padding: 40px;

p{
  font-family: Montserrat;
  text-align: center;
  letter-spacing: 2px;
  font-size: 38px;
  margin-bottom: 20px;
  color: #486255;
}



::-webkit-input-placeholder{
  font-family: Montserrat;
}
`
export  const Container2 = styled.div`

  max-width: 900px;

  background: #fff;
  margin: 50px auto;
  box-shadow: 0 0 20px rgba(72,98,85, 0.2);
  box-sizing: border-box;
  padding: 40px;

p{
  font-family: Montserrat;
  text-align: center;
  letter-spacing: 2px;
  font-size: 38px;
  margin-bottom: 20px;
  color: #486255;
}

.btn {
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
.btn2 {
  width: 180px;
  background: tomato;
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

`
export const Button = styled.div`
  display:flex;
  justify-content:center;
  border:none;
  background:transparent;
  padding-top: 20px;
  .btn{
    display:block;
    justify-items:center;
    text-align:center;
    margin:10px;
    font-size: 14px;
    font-family: Montserrat;
  }
  .btn2{
    display:block;
    justify-items:center;
    text-align:center;
    margin:10px;
    font-size: 14px;
    font-family: Montserrat;
  }
`


export const CreateForm = styled.div`
  display:flex;
  margin: 5px;
  margin-top: 10px;


  input {
      width: 260px;
      height: 30px;
      padding: 20px;
      box-sizing: border-box;
      margin-bottom: 25px;
      border: 2px solid #e9eaea;
      font-size: 14px;
      border-radius: 5px;
      outline: none;
      transform: all 0.5s ease;
  }

  .small-label{
    padding-top:18px;
  }

  input:focus{
  border: 2px solid #4484CE;
}

  label{
  font-family: Montserrat;
  font-weight:bold;
  font-size: 14px;
  margin: 4px;


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
select:focus{
  border: 2px solid #4484CE;
}

`

export const Hr = styled.hr`
    width: 80%;
    margin:0 auto;
    height: 0.5px;
    opacity: 0.2;
`
