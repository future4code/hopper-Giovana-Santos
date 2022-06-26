import Header from "../components/Header";
import useGetTrips from "../hooks/useGetTrips";
import useForm from "../hooks/useForm";
import { ListaPaises } from "../services/ListaPaises";
import axios from "axios"
import { ContainerApplication } from "../components/Styles"

const ApplicationFormPage = () => {
  const { trips } = useGetTrips()
  const { form, onChange, cleanFields } = useForm({
    viagem:"",
    nome:"",
    idade:"",
    texto:"",
    profissao:"",
    pais:""
  })

  const applyToTrip = (event) => {
    event.preventDefault()

    const headers = {
      headers: {
        auth: localStorage.getItem("token")
      }
    }
    const body = {
      name:form.nome,
      age:form.idade,
      applicationText:form.texto,
      profession:form.profissao,
      country:form.pais
    }
    axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/giovana-martinho-hopper/trips/${form.viagem}/apply`, body, headers)
    .then((response) => {
      alert("Inscrição Concluída")
      cleanFields()
    }).catch((error) => {
      alert(error.response.data.message)
    })
  }

  return (
    <div>
      <Header voltar={"/trips/list"}/>
      <ContainerApplication>
        <h1>Inscreva-se para uma viagem</h1>
        <form onSubmit={applyToTrip}>
          <select name="viagem" onChange={onChange} value={form.viagem}>
            <option value="">Escolha uma viagem</option>
            {trips && trips.map((trip) =>(
              <option key={trip.id} value={trip.id}>{trip.name}</option>
            ))}
          </select>
          <input
            placeholder="Nome"
            value={form.nome}
            type="text"
            onChange={onChange}
            name="nome"
          />
          <input
            placeholder="Idade"
            value={form.idade}
            type="number"
            onChange={onChange}
            name="idade"
          />
          <input
            placeholder="Texto de candidatura"
            value={form.texto}
            type="text"
            onChange={onChange}
            name="texto"
          />
          <input
            placeholder="Profissão"
            value={form.profissao}
            type="text"
            onChange={onChange}
            name="profissao"
          />
          <select name="pais" onChange={onChange} value={form.pais}>
              <option value="">Selecione um País</option>
              {ListaPaises && ListaPaises.map((pais, index) => (
                <option key={index} value={pais.nome_pais}>{pais.nome_pais}</option>
              ))}
          </select>
          <button>Concluido</button>
        </form>
      </ContainerApplication>
    </div>
  )
}

export default ApplicationFormPage