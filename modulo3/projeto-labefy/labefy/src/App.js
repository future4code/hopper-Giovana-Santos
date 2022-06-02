import axios from "axios";
import React from "react";
import { Card, Fundo, GlobalStyle, Principal } from "./components/Style";
import Detalhe from "./components/Detalhe.js";
import Musica from "./components/Musica.js";

class App extends React.Component {
  state = {
    criar: "",
    janela: 1,
    musicas: [],
    playlist: [],
    playlistId: "",
    verMusicas: [],
    id: ""
  };

  componentDidMount = () => {
    this.verPlaylist();
  };

  criarPlaylist = () => {
    const body = {
      name: this.state.criar
    };
    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
        body,
        {
          headers: {
            Authorization: "giovana-martinho-hopper"
          }
        }
      )
      .then((response) => {
        alert("Sua playlist foi criada com sucesso");
        this.verPlaylist();
      })
      .catch((error) => alert("Ocorreu um erro ao criar a playlist"));
  };

  verPlaylist = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
        {
          headers: {
            Authorization: "giovana-martinho-hopper"
          }
        }
      )
      .then((response) =>
        this.setState({ playlist: response.data.result.list })
      )
      .catch((error) => console.log(error.response));
  };
  deletarPlaylist = (playlistId) => {
    axios
      .delete(
        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}`,
        {
          headers: {
            Authorization: "giovana-martinho-hopper"
          }
        }
      )
      .then((response) => {
        alert("Playlist foi deletado com sucesso");
        this.verPlaylist();
      })
      .catch((error) => alert("Não foi possivel deletar Playlist"));
  };
  verificarPlaylist = (playlistId) => {
    axios
      .get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}/tracks`,
        {
          headers: {
            Authorization: "giovana-martinho-hopper"
          }
        }
      )
      .then((response) => {
        this.setState({
          musicas: response.data.result.tracks,
          janela: 2,
          playlistId: playlistId
        });
      })
      .catch((error) => console.log(error.response));
  };

  verMusica = (id) => {
    axios
      .get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`,
        {
          headers: {
            Authorization: "giovana-martinho-hopper"
          }
        }
      )
      .then((response) => {
        this.setState({
          verMusicas: response.data.result.tracks,
          janela: 3,
          id: id
        });
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
  deletarMusica = (trackId) => {
    const playlistId = this.state.id;
    axios
      .delete(
        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}/tracks/${trackId}`,
        {
          headers: {
            Authorization: "giovana-martinho-hopper"
          }
        }
      )
      .then((response) => {
        alert("Musica Removida!");
        this.verMusica(playlistId);
      })
      .catch((error) => {
        alert("Erro ao remover música.");
      });
  };
  Retro = () => {
      this.setState({ janela: 1 });
  };
  trocarTela = () => {
    switch (this.state.janela) {
      case 1:
        return (
          <Principal>
            {this.state.playlist &&
              this.state.playlist.map((playlist) => {
                return (
                  <Card key={playlist.id}>
                    <p>{playlist.name}</p>
                    <button onClick={() => this.verificarPlaylist(playlist.id)}>
                      Add Musica
                    </button>
                    <button onClick={() => this.verMusica(playlist.id)}>
                      Ver musicas
                    </button>
                    <button onClick={() => this.deletarPlaylist(playlist.id)}>
                      Excluir
                    </button>
                  </Card>
                );
              })}
          </Principal>
        );
      case 2:
        return <Detalhe playlistId={this.state.playlistId} />;
      case 3:
        return (
          <Musica
            removerMusica={this.deletarMusica}
            music={this.state.verMusicas}
          />
        );
      default:
        break;
    }
  };
  render() {
    console.log(this.state.id);
    return (
      <Fundo>
        <GlobalStyle />
        <h1>Seja Bem-Vindo ao Labefy!</h1>
        <div>
          <button>Playlist</button>
          <button>Artistas</button>
        </div>
        <h2>Crie sua propria playlist</h2>
        <input
          placeholder="Digite o nome da sua playlist"
          value={this.state.criar}
          onChange={(e) => this.setState({ criar: e.target.value })}
        />
        <button onClick={this.criarPlaylist}>Criar</button>
        {this.trocarTela()}
        <div>
          <button onClick={this.Retro}>Pagina Principal</button>
        </div>
      </Fundo>
    );
  }
}
export default App;
