import { useNavigate } from "react-router-dom"
import { Container, ContainerHomePage } from "../components/Styles"
import Logo from "../assets/Logo.svg"

const HomePage = () => {
  const navigate = useNavigate()

  return (
  <Container>
    <ContainerHomePage>
      <img src={Logo} alt=""/>
      <p onClick={() => navigate("/trips/list")}>Ver Viagens</p>
      <p>Acesso Privado</p>
    </ContainerHomePage>
  </Container>
    
  )
}

export default HomePage