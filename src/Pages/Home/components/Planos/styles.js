import styled from "styled-components";

export const Title = styled.span`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  font-family: "Montserrat";
  font-weight: bold;
  font-size: 20px;
  color: #a5a1a1;
  margin-bottom: 30px;
`;
export const StyledPlanos = styled.div`
  display: flex;
  justify-content: center;
`;
export const PlanosSmall = styled.div`
  font-family: "Lato", sans-serif;
  font-weight: bold;
  font-size: 16px;
  color: #a5a1a1;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  box-shadow: 6px 9px 5px rgba(0, 0, 0, 0.4);
  border-radius: 5px;
  border: 1px #a1a1a1 solid;
  width: 180px;
  padding: 50px;
  height: 415px;
  margin: 40px 5px 10px 5px;
  border-top: 20px solid #4484ce;
  ul {
    margin: 30px 0px 30px 0px;
  }
  li {
    list-style-image: url("https://i.imgur.com/CSDdTtu.png?2");
    margin: 2px;
  }
  button {
    margin-top: auto;
    font-family: "Nunito", sans-serif;
    font-style: normal;
    font-size: 24px;
    color: #a8a4a4;
    border: 2px solid #4484ce;
    border-radius: 5px;
    width: 150px;
    cursor: pointer;
    background-color: #ffffff;
    transition: background 0.4s;

  }
  button:hover {
    color: #fff;
    background: #4484ce;
  }
  hr {
    width: 150px;
    height: 1px;
    margin: 10px;
  }
  span {
    font-family: Lato;
    font-style: normal;
    font-weight: bold;
    font-size: 22px;
  }
`;
export const PlanosGrand = styled.div`
  font-family: "Lato", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  color: #a8a4a4;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  box-shadow: 6px 9px 5px rgba(0, 0, 0, 0.4);
  border-radius: 5px;
  border: 1px #a1a1a1 solid;
  width: 200px;
  padding: 50px;
  margin: 10px;
  height: 500px;
  border-top: 20px solid #4484ce;

  li {
    list-style-image: url("https://i.imgur.com/CSDdTtu.png?2");
    margin: 5px;
    margin-top: auto;
  }
  ul {
    margin: 30px 0px 30px 0px;
  }
  button {
    margin-top: auto;
    font-family: "Nunito", sans-serif;
    font-style: normal;
    font-size: 24px;
    color: #a8a4a4;
    border: 2px solid #4484ce;
    border-radius: 5px;
    width: 150px;
    background-color: #ffffff;
    cursor: pointer;
    transition: background 0.4s;
  }
  button:hover {
    color: #fff;
    background: #4484ce;
  }
  hr {
    width: 150px;
    height: 1px;
    margin: 10px;
  }
  span {
    font-family: Lato;
    font-style: normal;
    font-weight: bold;
    font-size: 22px;
  }
`;
