import './App.css';
import styled from 'styled-components'
import Chat from './components/Chat'
 
const ContainerApp = styled.div`
display:flex;
flex-direction:column;
height:95vh;
width:40%;
margin: 0 auto;
background-image:url(https://todaatual.com/wp-content/uploads/584e2a560e84bdb9216bdee4f43d9e93.jpg);
background-repeat:no-repeat;
background-position:center bottom;
background-size:cover;
border:1px solid black;
border-radius:20px;
padding:10px;
justify-content:flex-end;
`;

function App() {
  return (

    <div className="App">
      <ContainerApp>
        <Chat/>
      </ContainerApp>
    </div>
  );
}

export default App;
