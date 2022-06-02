import React from "react";
import styled from "styled-components";

const FormularioTres = styled.div`
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

class Etapa3 extends React.Component {
  render() {
    return (
      <>
        <h1>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h1>

        <form>
          <FormularioTres>
            <label htmlFor="termino-curso">
              5. Por que você não terminou um curso de graduação?
            </label>
            <input type="text" name="termino-curso" />
          </FormularioTres>
          <FormularioTres>
            <label htmlFor="complementar">
              6. Você fez algum curso complementar?
            </label>
            <select>
              <option value="Nenhum">Nenhum</option>
              <option value="Curso Técnico">Curso Técnico</option>
              <option value="Curso Inglês">Curso de Inglês</option>
            </select>
          </FormularioTres>
        </form>
      </>
    );
  }
}
export default Etapa3;