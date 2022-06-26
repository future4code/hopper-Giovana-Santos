import { useNavigate } from "react-router-dom"
import { PageError } from "../components/Styles"

const ErrorPage = () => {
  const navigate = useNavigate()

  return (
    <PageError>
      <p>Pagina não encontrada</p>
      <button onClick={() => navigate("/")}>Voltar</button>
    </PageError>
  )
}

export default ErrorPage