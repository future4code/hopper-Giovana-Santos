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
        nome:'paulinha',
        foto:'https://picsum.photos/50/50',
        album:'https://picsum.photos/200/150'
      },
      {
        nome:'paulinha',
        foto:'https://picsum.photos/50/50',
        album:'https://picsum.photos/200/150'
      }
    ] 
  }
  mapeandoPessoas = this.state.post.map((post) => {
    return (
      <div key={post}>
        {post.nome}
        {post.foto}
        {post.album}
      </div>
    )
  })

    render() {
      return(
        <MainContainer>
          {this.state.post.map((post, index) => {
            return (
              <App
              key={index}
              nome={post.nome}
              foto={post.foto}
              album={post.album}
              />

            )
          })}
          
          <Post
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
          />
        </MainContainer>
      );
    } 
}

export default App;
