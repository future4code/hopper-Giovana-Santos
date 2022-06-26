import Header from "../components/Header";
import {useProtectedPage} from "../hooks/useProtectedPage"
import useForm from "../hooks/useForm"
import { ListaPlanetas } from "../services/ListaPlanetas"
import axios from "axios";

const CreateTripPage = () => {

  useProtectedPage()
  const { form, onChange, cleanFields } = useForm({
    nome:"",
    planeta:"",
    data:"",
    descricao:"",
    tempo:""
  })

  const createTrip = (event) => {
    event.preventDefault()
    const headers = {
      headers:{
        auth: localStorage.getItem("token")
      }
    }
    const body = {
      name:form.nome,
      planet:form.planeta,
      date:form.data,
      description:form.descricao,
      durationInDays:form.tempo
    }
    axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/giovana-martinho-hopper/trips", body, headers)
    .then((response) => {
      alert("Viagem Criada com Sucesso!")
    }).catch((error) => {alert(error.response.data.message)})
  }

  return (
    <div>
      <Header voltar={"/admin/trips/list"}/>
      <h1>Crie sua Viagem</h1>
      <form onSubmit={createTrip}>
        <input 
          type="text"
          placeholder="Nome"
          name="nome"
          value={form.nome}
          onChange={onChange}
        />
        <select name="planeta" value={form.planeta} onChange={onChange}>
          <option value="">Selecione um Planeta</option>
          {ListaPlanetas && ListaPlanetas.map((planeta) => (
            <option value={planeta.nome}>{planeta.nome}</option>
          ))}
        </select>
        <input 
          type="date"
          name="data"
          value={form.data}
          onChange={onChange}
        />
        <input 
          type="text"
          placeholder="Descrição"
          name="descricao"
          value={form.descricao}
          onChange={onChange}
        />
        <input 
          type="number"
          placeholder="Tempo de viagem"
          name="tempo"
          value={form.tempo}
          onChange={onChange}
        />
        <button>Criar</button>
      </form>
    </div>
  )
}

export default CreateTripPage