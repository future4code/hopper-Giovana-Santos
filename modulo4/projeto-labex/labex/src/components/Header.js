import { Cabecalho } from "./Styles"
import Logo from "../assets/Logo.svg"

const Header = () => {
  return (
    <Cabecalho>
        <img src={Logo} alt="Logotipo da pagina"/>
        <ul>
            <li>Login/Logout</li>
            <li>Voltar</li>
        </ul>
    </Cabecalho>
  )
}

export default Header