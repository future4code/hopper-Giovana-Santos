import React, { useEffect, useState } from "react";
import axios from "axios";
import logo from "../assets/logo.png";
import seta from "../assets/retorno.svg";
import resetar from "../assets/resetar.svg";
import { Logo, BatePapo, Mensagem } from "./Styles";

const Chat = (props) => {
  const [pessoas, setPessoas] = useState([]);

  useEffect(() => {
    conversa();
  }, []);

  const conversa = () => {
    axios
      .get(
        `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/Giovana/matches`
      )
      .then((response) => {
        setPessoas(response.data.matches);
      })
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
        conversa();
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  return (
    <div>
      <Logo>
        <img onClick={() => limpar()} src={resetar} alt="Botao de resetar" />
        <img src={logo} alt="Imagem escrita astromatch" />
        <img
          onClick={() => props.voltar("Perfil")}
          src={seta}
          alt="Botão de voltar"
        />
      </Logo>
      <Mensagem>
        {pessoas.map((contatos) => {
          return (
            <BatePapo key={contatos.id}>
              <img src={contatos.photo} alt={contatos.photo_alt} />
              <p>{contatos.name}</p>
            </BatePapo>
          );
        })}
      </Mensagem>
    </div>
  );
};
export default Chat;
