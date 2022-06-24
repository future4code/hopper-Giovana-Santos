import { Cabecalho } from "./Styles"
import Logo from "../assets/Logo.svg"
import { useNavigate } from "react-router-dom"

const Header = ({voltar}) => {

  const navigate = useNavigate()

  const logout = () => {
    localStorage.removeItem("token")
    navigate("/")
  }

  const loginLogout = () => {
    if(localStorage.getItem("token")){
      return <li onClick={logout}>Logout</li>
    } else {
      return <li>Login</li>
    }
  }

  return (
    <Cabecalho>
        <img src={Logo} alt="Logotipo da pagina"/>
        <ul>
            {loginLogout()}
            <li onClick={() => navigate(voltar)}>Voltar</li>
        </ul>
    </Cabecalho>
  )
}

export default Header