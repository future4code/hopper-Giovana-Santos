import React from 'react';
import { Cadastro } from './components/Cadastro';
import axios from 'axios';
import { ListaUsuario } from './components/ListaUsuario';


class App extends React.Component {
  state = {
    nome:"",
    email:"",
    tela:1,
    imprime:[]
  }
  
  componentDidMount () {
    this.mostrarUsuario()
  }

  criarUsuario = () =>{
    const body ={
      name: this.state.nome,
      email: this.state.email
    }
    axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users',body,{
      headers:{
        Authorization: 'giovana-martinho-hopper'
      }
    })
    .then((response) => {
      alert("Usuario criado com sucesso")
      this.setState({nome:""})
      this.setState({email:""})
      this.setState({tela: 2})
      this.mostrarUsuario()
    })
    .catch(error => alert("Ocorreu um erro, tente mais tarde!"))
  }
  mostrarUsuario = () =>{
    axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users',{
      headers: {
        Authorization: 'giovana-martinho-hopper'
      }
    })
    .then(response => this.setState({imprime:response.data}))
    .catch(error => console.log(error))
  }
  deletarUsuario = (id) =>{
    axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`,{
      headers: {
        Authorization: 'giovana-martinho-hopper'
      }
    })
    .then((reponse) => {
      alert('Usuario foi deletado com sucesso')
      this.mostrarUsuario()
    })
    .catch(error => alert('Não foi possivel deletar usuario'))
  }
  onChangeName = (event) => {
    this.setState({nome: event.target.value})
  }
  onChangeEmail = (event) => {
    this.setState({email: event.target.value})
  }
  voltarPagina = () => {
    this.setState({tela:1})
  }
  alteraTela = () => {
    switch (this.state.tela) {
      case 1:
        return (
           <Cadastro
          nome={this.state.nome}
          email={this.state.email}
          onChangeNome={this.onChangeName}
          onChangeEmail={this.onChangeEmail}
          criarUsuario={this.criarUsuario}
        />
        )
        break;
      case 2:
        return (
        <ListaUsuario
          imprime={this.state.imprime}
          apagar = {this.deletarUsuario}
          voltar = {this.voltarPagina}
        />
        )
      default:
        break;
    }
  }

  render(){
   //this.mostrarUsuario()
    console.log(this.state.imprime)
    console.log(this.state.nome)
    return (
      <div>
       {this.alteraTela()}
      </div>
    );
  }
}

export default App;
