import styled, { keyframes } from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    padding:0;
    margin:0;
    box-sizing:border-box;
    font-family:Helvetica, sans-serif;
  }
  body{
    background-color:#ac58aa;
    width:100vw;
    height:100vh;
  }
`;

const resetRotate = keyframes`
0%{
  transform:rotate(0)
}
100%{
  transform:rotate(360deg)
}
`;

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TelaInicial = styled.div`
  border: 1px solid black;
  background-color: white;
  width: 30vw;
  height: 90vh;
  border-radius: 10px;

  @media screen and (max-width: 400px){
    width:100vw;
    height:100vh;
    border-radius:0;
  }
`;

export const ContainerPerfil = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;

export const Logo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 12vh;
  border-bottom: 2px solid;
  gap:3vw;
  img:nth-child(1) {
    cursor: pointer;
    width: 15%;
    padding-left:5%;
    &:hover {
      animation: ${resetRotate} 0.5s ease-in-out both;
    }
  }
  img:nth-child(2) {
    width: 50%;
    margin: 0 auto;
  }
  img:nth-child(3) {
    width: 15%;
    padding-right:5%;
    cursor: pointer;
  }
`;

export const Centro = styled.div`
  border: 1px solid black;
  width: 90%;
  height: 55vh;
  position: relative;
`;

export const Rodapé = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  height: 5vh;
  width: 100%;
  padding: 1vh 1vw 10vh 1vw;
  img {
    border: 2px solid #d551d5;
    border-radius: 50%;
    padding: 0.5em;
    width: 3em;
    cursor: pointer;
  }
`;

export const Foto = styled.img`
  width: 100%;
  height: 55vh;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const SobrePerfil = styled.div`
  position: absolute;
  z-index: 1;
  bottom: 0;
  left: 0;
  color: white;
  text-shadow: 2px 2px 30px black;
  h1 {
    font-size: 1.5em;
  }
`;

export const BatePapo = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5em;
  gap: 0.5em;
  box-shadow: 1px 1px 2px #ccc;
  margin: 0.5em;
  img {
    width: 10vw;
    height: 10vh;
    border-radius: 50%;
  }
`;
export const Mensagem = styled.div`
  overflow: auto;
  height: 76vh;
`;
