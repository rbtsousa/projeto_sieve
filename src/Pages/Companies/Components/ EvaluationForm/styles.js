import styled from 'styled-components';

export const Container = styled.div`
display:grid;
grid-template-columns: 450px 450px;
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



`;
export const Container2 = styled.div`
display:grid;
grid-template-columns: 450px 450px;
max-width: 900px;
height: 480px;
background: #fff;
margin: 50px auto;
box-shadow: 0 0 20px rgba(72,98,85, 0.2);
box-sizing: border-box;
padding: 40px;


`
export const Container3 = styled.div`
display:grid;
grid-template-columns: 450px 450px;
max-width: 900px;
height: 600px;
background: #fff;
margin: 50px auto;
box-shadow: 0 0 20px rgba(72,98,85, 0.2);
box-sizing: border-box;
padding: 40px;


`


export const CreateForm = styled.div`
  display:flex;
  justify-content:center;
  flex-wrap:wrap;
  margin-top: 20px;
  height: 400px;


input {

      display:flex;
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

label{

  font-family: Montserrat;
  font-weight:bold;
  font-size: 14px;
  height: 20px;



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

`
export const Button = styled.button`
  display:flex;
  width: 900px;
  justify-content:center;
  border:none;
  background:transparent;
  padding-top: 20px;
  .btn{
    display:block;
    justify-items:center;
    text-align:center;
    margin:10px;
    height: 50px;
    width: 140px;
    font-size: 14px;
    font-family: Montserrat;
    background-color: #007BFF;
    border-radius: 4px;
    font-weight:bold;
    color:#fff;
    border:none;
  }
  .btn:hover{
    background-color:#0069D9;
  }
  .btn2{
    display:block;
    justify-items:center;
    text-align:center;
    margin:10px;
    height: 50px;
    width: 140px;
    font-size: 14px;
    font-family: Montserrat;
    background-color: #DC3545;
    border-radius: 4px;
    font-weight:bold;
    color:#fff;
    border:none;
  }
  .btn2{
    background-color:#C82333
  }
  div{
    display:flex;
    justify-content:center;
  }
`
