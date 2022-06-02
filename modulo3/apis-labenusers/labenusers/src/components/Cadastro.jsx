import React from "react";


export class Cadastro extends React.Component{
    render(){
        return(
            <div>
                <input 
                    type="text" 
                    placeholder="Digite seu nome:"
                    value={this.props.nome}
                    onChange={this.props.onChangeNome}
                />
                <input 
                    type="email" 
                    placeholder="Digite seu email:"
                    value={this.props.email}
                    onChange={this.props.onChangeEmail}
                />
                <button onClick={this.props.criarUsuario}type="submit">Cadastrar</button>
            </div>
        )
    }
}