import Header from "../components/Header";
import axios from "axios";
import { useState, useEffect } from "react"
import { ContainerLTP } from "../components/Styles"

const ListTripsPage = () => {

  const [trips, setTrips] = useState([])

  useEffect(() => {
    getTrips()
  },[])

  const getTrips = () =>{
    axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/giovana-martinho-hopper/trips`)
    .then((response) => {
      setTrips(response.data.trips)
    }).catch((error) => {
      alert("Ocorreu erro")
    })
  } 

  return (
    <>
      <Header voltar={"/"}/>
    <ContainerLTP>
      <h1>Viagens Disponíveis</h1>
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