import React from "react";
import styled from "styled-components";

const FormularioDois = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;
  input {
    margin: 0 auto;
    width: 30%;
  }
`;
class Etapa2 extends React.Component {
  render() {
    return (
      <>
        <h1>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h1>

        <form>
          <FormularioDois>
            <label htmlFor="curso">5. Qual curso?</label>
            <input type="text" name="curso" />
          </FormularioDois>
          <FormularioDois>
            <label htmlFor="ensino">6. Qual a unidade de ensino?</label>
            <input type="text" name="ensino" />
          </FormularioDois>
        </form>
      </>
    );
  }
}
export default Etapa2;
