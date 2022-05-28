import React from "react";
import { Music } from "./Style";

export default class Musica extends React.Component {
  render() {
    return (
      <div>
        {this.props.music &&
          this.props.music.map((musica) => {
            return (
              <Music key={musica.id}>
                <li>{musica.name}</li>
                <li>{musica.artist}</li>
                <button onClick={() => this.props.removerMusica(musica.id)}>
                  Remover Música
                </button>
              </Music>
            );
          })}
      </div>
    );
  }
}
