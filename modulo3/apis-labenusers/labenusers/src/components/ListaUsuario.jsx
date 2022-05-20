import axios from "axios";
import React from "react";

export class ListaUsuario extends React.Component{
 
  render(){
    return(
      <div>
        <ol>
        {this.props.imprime.map((data) => {
          return (
            <>
            <li key={data.id}>{data.name}</li>
            <button onClick={() => this.props.apagar(data.id)}>Remover da Lista</button>
            </>
            )
          //console.log(data.name)
        })}
       </ol> 
       <button onClick={this.props.voltar}>Voltar pagina</button>  
      </div>
    )
  }
}
