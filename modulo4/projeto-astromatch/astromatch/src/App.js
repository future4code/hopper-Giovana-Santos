import React, { useState } from "react";
import Perfil from "./components/Perfil";
import Chat from "./components/Chat";
import { Container, GlobalStyle, TelaInicial } from "./components/Styles";

export default function App() {
  const [janela, setJanela] = useState("Perfil");

  const mudarTela = (parametro) => {
    setJanela(parametro);
  };

  return (
    <Container>
      <GlobalStyle />
      <TelaInicial>
        {janela === "Perfil" ? (
          <Perfil pagina={mudarTela} />
        ) : (
          <Chat voltar={mudarTela} />
        )}
      </TelaInicial>
    </Container>
  );
}

