import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
  }
  body{
    background: black;
  }
`;

export const Card = styled.div`
  border-radius: 5px;
  box-shadow: 7px 7px 13px 0px rgba(50, 50, 50, 0.22);
  height: 28vh;
  margin: 2vh;
  width: 22vw;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  button {
    width: 20%;
    background: #ccc;
  }
`;
export const Fundo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5vh;
  h1 {
    color: white;
  }
  h2 {
    color: white;
  }
  button {
    width: 20vw;
    margin: 0 1em;
  }
  input {
    width: 40vw;
    height: 6vh;
  }
`;
export const Organizar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40vw;
  input {
    width: 70vw;
  }
`;
export const Principal = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export const Music = styled.ul`
  width: 70vw;
  background: white;
  list-style-type: none;
  padding: 0.5em;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  li {
    text-align: center;
  }
  button {
    width: 5em;
  }
`;
