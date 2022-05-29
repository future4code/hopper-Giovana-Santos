import React from "react";
import { Organizar } from "./Style";
import axios from "axios";

class Detalhe extends React.Component {
  state = {
    nome: "",
    cantor: "",
    url: "",
    id: this.props.playlistId
  };
  novaMusica = () => {
    const playlistId = this.state.id;
    const body = {
      name: this.state.nome,
      artist: this.state.cantor,
      url: this.state.url
    };
    axios
      .post(
        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}/tracks`,
        body,
        {
          headers: {
            Authorization: "giovana-martinho-hopper"
          }
        }
      )
      .then((response) => {
        alert("Musica adicionadas com sucesso");
        this.setState({ nome: "", cantor: "", url: "" });
      })
      .catch((error) => {
        alert("Erro ao adicionar musica");
      });
  };
  onChangeNome = (e) => {
    this.setState({ nome: e.target.value });
  };
  onChangeCantor = (e) => {
    this.setState({ cantor: e.target.value });
  };
  onChangeUrl = (e) => {
    this.setState({ url: e.target.value });
  };

  render() {
    console.log(this.state.id);
    return (
      <Organizar>
        <input
          placeholder="Digite o nome da musica"
          onChange={this.onChangeNome}
          value={this.state.nome}
        />
        <input
          placeholder="Digite o nome do cantor ou banda da música"
          onChange={this.onChangeCantor}
          value={this.state.cantor}
        />
        <input
          placeholder="Digite a URL da música para ser tocada"
          onChange={this.onChangeUrl}
          value={this.state.url}
          maxLength="43"
        />
        <div>
          <button onClick={this.novaMusica}>Adicionar a Playlist</button>
        </div>
      </Organizar>
    );
  }
}
export default Detalhe;
