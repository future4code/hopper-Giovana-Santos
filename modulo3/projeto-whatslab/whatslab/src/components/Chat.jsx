import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
display:flex;
justify-content:flex-start;
flex-direction:column;
`;
const Mensagem = styled.div`
display:flex;
flex-direction:column-reverse;
`;
const Inputs = styled.div`
display:flex;
`;
const Engloba = styled.div`
display:flex;
flex-direction:column;
align-items:reverse;
p{
  display:flex;
  flex-direction:row;
}
`;
const Usuario = styled.input`
width:15%;
`;
const Texto = styled.input`
width:70%;
`;
const Botao = styled.button`
width:15%;
`;

class Chat extends React.Component{
state= {
    contato: "",
    mensagem: "",
    mensagemFixada: []
  };
   onChangeContato = (event) => {
     this.setState({contato: event.target.value });
   };
   onChangeMensagem = (event) => {
     this.setState({mensagem: event.target.value });
   };
   onClickEnviar = () => {
     const novoEstado = {
       contato:this.state.contato,
       mensagem:this.state.mensagem
     }
     const whatsap = [novoEstado,...this.state.mensagemFixada]
     this.setState({mensagemFixada:whatsap, mensagem:''})
   }


  render() {
    // console.log(this.state.contato)
    // console.log(this.state.mensagem)
    return(
      <Container>
        {this.state.mensagemFixada.reverse().map((conteudo) => (
          <Mensagem>
            <Engloba>
              <p><b>{conteudo.contato}:</b>{conteudo.mensagem}</p>
            </Engloba>
          </Mensagem>
        ))}
        <Inputs>
          <Usuario
          value={this.state.contato}
          onChange={this.onChangeContato}
          placeholder={"Nome"}
          />
          <Texto
          value={this.state.mensagem}
          onChange={this.onChangeMensagem}
          placeholder={"Digite sua Mensagem"}
          onKeyDown = {(event) => event.keyCode === 13 && this.onClickEnviar()}
          />
          <Botao onClick={this.onClickEnviar}>Enviar</Botao>
        </Inputs>
      </Container>
    );
  };
}
  export default Chat