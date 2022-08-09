import Header from "../components/Header";
import { useProtectedPage } from "../hooks/useProtectedPage";
import useGetTrips from "../hooks/useGetTrips";
import remove from "../assets/remove.svg"
import { ContainerAdm } from "../components/Styles";
import axios from "axios"
import { useNavigate } from "react-router-dom";

const AdminHomePage = () => {
  const { trips, getTrips } = useGetTrips()
  useProtectedPage()
  const navigate = useNavigate()

  const deleteTrip = (id) =>{
    const headers = {
      headers : {
        auth:localStorage.getItem("token")
      }
    }
    if(window.confirm("Você tem certeza que quer deletar essa viagem?")){
      axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/giovana-martinho-hopper/trips/${id}`, headers)
    .then((response) => {
      getTrips()
    }).catch((error) =>{
      alert(error.response.data.message)
    })
    }
  }

  return (
    <div>
      <Header voltar={"/"}/>
      <ContainerAdm>
        <h1>Painel Administrativo</h1>
        <button onClick={() => navigate("/admin/trips/create")}>Criar Viagem</button>
        {trips && trips.map((trip) => (
          <div key={trip.id}>
            <p onClick={() => navigate(`/admin/trips/${trip.id}`)}>{trip.name}</p>
            <img onClick={() => deleteTrip(trip.id)} src={remove} alt="lixeira para excluir objeto"/>
          </div>
        ))}
      </ContainerAdm>
    </div>
  )
}

export default AdminHomePage