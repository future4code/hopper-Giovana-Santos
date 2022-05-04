import React from "react";
import styled from "styled-components";

const Formulario = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;
  input {
    margin: 0 auto;
    width: 30%;
  }
  select {
    margin: 0 auto;
    width: 25%;
  }
`;
class Etapa1 extends React.Component {
  render() {
    return (
      <>
        <h1>ETAPA 1 - DADOS GERAIS</h1>

        <form>
          <Formulario>
            <label htmlFor="nome">1. Qual o seu nome?</label>
            <input type="text" name="nome" />
          </Formulario>
          <Formulario>
            <label htmlFor="idade">2. Qual sua idade?</label>
            <input type="number" name="idade" />
          </Formulario>
          <Formulario>
            <label htmlFor="E-mail">3. Qual seu email?</label>
            <input type="email" name="E-mail" />
          </Formulario>
          <Formulario>
            <label htmlFor="escolaridade">4. Qual a sua escolaridade?</label>
            <select>
              <option value="medio incompleto">Ensino médio incompleto</option>
              <option value="medio completo">Ensino médio completo</option>
              <option value="superior incompleto">
                Ensino superior incompleto
              </option>
              <option value="superior completo">
                Ensino superior completo
              </option>
            </select>
          </Formulario>
        </form>
      </>
    );
  }
}
export default Etapa1;
