import axios from "axios";
import useForm from "../hooks/useForm";
import { useNavigate } from "react-router";
import { ContainerLoginPage } from "../components/Styles";
import Logo from "../assets/Logo.svg"

const LoginPage = () => {

  const navigate = useNavigate()

  const { form, onChange, cleanFields } = useForm({
    email:"",
    senha:""
  })

  const login = (event) => {
    event.preventDefault()
    const body = {
      email:form.email,
      password:form.senha
    }
    
    axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/giovana-martinho-hopper/login", body)
    .then((response) => {
      localStorage.setItem("token", response.data.token)
      navigate("/admin/trips/list")
    }).catch((error) => {
      alert(error.response.data.message)
    }).finally(() => cleanFields())
  }

  return (
    <ContainerLoginPage>
      <img src={Logo} alt=""/>
      <h1>Login</h1>
      <form onSubmit={login}>
        <input 
          type="email"
          required
          placeholder="Email"
          name="email"
          value={form.email}
          onChange={onChange}
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
        />
        <input 
          type="password"
          required
          placeholder="Senha"
          name="senha"
          value={form.senha}
          onChange={onChange}
          pattern=".{6,}"
        />
        <button>Entrar</button>
      </form>
    </ContainerLoginPage>
  )
}

export default LoginPage