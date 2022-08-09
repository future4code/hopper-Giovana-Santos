import Header from "../components/Header";
import { ContainerLTP } from "../components/Styles"
import useGetTrips from "../hooks/useGetTrips";
import { useNavigate } from "react-router-dom";

const ListTripsPage = () => {

  const navigate = useNavigate()
  const { trips, getTrips } = useGetTrips()

  return (
    <>
      <Header voltar={"/"}/>
    <ContainerLTP>
      <h1>Viagens Disponíveis</h1>
      <button type="button" onClick={() => navigate("/trips/application")}>Candidatar-se</button>
      {trips && trips.map((trip) =>(
        <section key={trip.id}>
          <p><span>Nome:</span> {trip.name}</p>
          <p><span>Descrição:</span> {trip.description}</p>
          <p><span>Planeta:</span> {trip.planet}</p>
          <p><span>Duração:</span> {trip.durationInDays}</p>
          <p><span>Data:</span> {trip.date}</p>
        </section>
      ))}
      </ContainerLTP>
    </>
  )
}

export default ListTripsPage