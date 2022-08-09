import React, { useState, useEffect } from "react";
import {
  Logo,
  Centro,
  ContainerPerfil,
  Rodapé,
  Foto,
  SobrePerfil
} from "./Styles";
import resetar from "../assets/resetar.svg";
import logo from "../assets/logo.png";
import contato from "../assets/contato.svg";
import like from "../assets/like.svg";
import deslike from "../assets/deslike.svg";
import axios from "axios";

const Perfil = (props) => {
  const [dados, setDados] = useState([]);
  const [idPerfil, setIdPerfil] = useState("");
  const [carregando, setCarregando] = useState(false);

  useEffect(() => {
    escolhaDePerfil();
  }, []);

  const escolhaDePerfil = () => {
    axios
      .get(
        `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/Giovana/person`
      )
      .then((response) => {
        setCarregando(true);
        setIdPerfil(response.data.profile.id);
        setDados([response.data.profile]);
        setCarregando(false);
      })
      .catch((error) => {
        console.log(error.reponse);
      });
  };
  const Match = (escolhaDePerfil) => {
    const body = {
      id: idPerfil,
      choice: escolhaDePerfil
    };
    axios
      .post(
        `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/Giovana/choose-person`,
        body
      )
      .then((response) => {})
      .catch((error) => {
        console.log(error.response);
      });
  };

  const limpar = () => {
    axios
      .put(
        `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/Giovana/clear`
      )
      .then((response) => {
        escolhaDePerfil();
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  const Botao = (clique) => {
    escolhaDePerfil();
    Match(clique);
  };

  return (
    <ContainerPerfil>
      <Logo>
        <img onClick={() => limpar()} src={resetar} alt="Botao de resetar" />
        <img src={logo} alt="Imagem escrita astromatch" />
        <img
          onClick={() => props.pagina("Chat")}
          src={contato}
          alt="botão que direciona ao chat"
        />
      </Logo>
      <Centro>
        {carregando
          ? alert(
              "Seu limite de matches acabou, clique no botão de resetar para continuar."
            )
          : dados.map((perfil) => {
              return (
                <div key={perfil.id}>
                  <Foto src={perfil.photo} alt={perfil.photo_alt} />
                  <SobrePerfil>
                    <h1>
                      {perfil.name}, {perfil.age}
                    </h1>
                    <p>{perfil.bio}</p>
                  </SobrePerfil>
                </div>
              );
            })}
      </Centro>
      <Rodapé>
        <img
          onClick={() => Botao(false)}
          src={deslike}
          alt="Botao de deslike"
        />
        <img onClick={() => Botao(true)} src={like} alt="Botao de like" />
      </Rodapé>
    </ContainerPerfil>
  );
};

export default Perfil;