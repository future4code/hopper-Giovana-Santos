import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  state ={
    post:[
      {
        nome:'paulinha',
        foto:'https://picsum.photos/50/50',
        album:'https://picsum.photos/200/150'
      },
      {
        nome:'Tiaguinho',
        foto:'https://media.discordapp.net/attachments/950855802527313981/968635759127060510/IMG-20191224-WA0015.jpg?width=710&height=473',
        album:'https://media.discordapp.net/attachments/950855802527313981/968635567149555803/IMG-20191224-WA0016.jpg?width=710&height=473'
      },
      {
        nome:'MyCats',
        foto:'https://media.discordapp.net/attachments/950855802527313981/968637703782551612/IMG_20220314_172544_468.webp?width=266&height=473',
        album:'https://media.discordapp.net/attachments/950855802527313981/968638246462558248/IMG_20220426_192226.jpg?width=266&height=473'
      }
    ],
    valorInputNome:"",
    valorInputFoto:"",
    valorInputAlbum:""
  }; 

  adicionaPostPessoa = () => {
    const adicionarPost = {
      nome: this.state.valorInputNome,
      foto: this.state.valorInputFoto,
      album: this.state.valorInputAlbum
    };
    const adicionarPosts = [...this.state.post, adicionarPost];
    this.setState({ post: adicionarPosts, valorInputNome:"", valorInputFoto:"", valorInputAlbum:"" });
  };
  onChangeNome = (event) =>{
    this.setState({valorInputNome: event.target.value});
  };
  onChangePerfil = (event) =>{
    this.setState({valorInputFoto: event.target.value});
  };
  onChangePostagem = (event) =>{
    this.setState({valorInputAlbum: event.target.value});
  };
 

    render() {
      const mapeandoPost = this.state.post.map((post, index) => {
        return (
          <Post
          key={index}
          nomeUsuario= {post.nome}
          fotoUsuario={post.foto}
          fotoPost={post.album}
          />
          
        );
      });
      return(
        <MainContainer>
          
          <input
          value = {this.state.valorInputNome}
          onChange = {this.onChangeNome}
          placeholder = {"Nome"}
          />
          <input
          value = {this.state.valorInputFoto}
          onChange = {this.onChangePerfil}
          placeholder = {"Perfil"}
          />
          <input
          value = {this.state.valorInputAlbum}
          onChange = {this.onChangePostagem}
          placeholder = {"Postagem"}
          />
           <div>
           <button onClick={this.adicionaPostPessoa}>Adicione</button>
           </div>
          {mapeandoPost}
          
           {/* <Post
            nomeUsuario={'paulinha'}
            fotoUsuario={'https://picsum.photos/50/50'}
            fotoPost={'https://picsum.photos/200/150'}
          />
          <Post
          nomeUsuario={'Tiaguinho'}
          fotoUsuario={'https://media.discordapp.net/attachments/950855802527313981/968635759127060510/IMG-20191224-WA0015.jpg?width=710&height=473'}
          fotoPost={'https://media.discordapp.net/attachments/950855802527313981/968635567149555803/IMG-20191224-WA0016.jpg?width=710&height=473'}
          />
          <Post
          nomeUsuario={'MyCats'}
          fotoUsuario={'https://media.discordapp.net/attachments/950855802527313981/968637703782551612/IMG_20220314_172544_468.webp?width=266&height=473'}
          fotoPost={'https://media.discordapp.net/attachments/950855802527313981/968638246462558248/IMG_20220426_192226.jpg?width=266&height=473'}
          />  */}

        </MainContainer>
      );
    }
  }


export default App;
