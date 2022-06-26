import Header from "../components/Header";
import { useProtectedPage } from "../hooks/useProtectedPage";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { ContainerDetails, DetalhesTrips, PendentesTrips } from "../components/Styles"

const TripDetailsPage = () => {
  useProtectedPage()
  const { id } = useParams()
  const [detalhes, setDetalhes] = useState([])
  
  useEffect(() => {
    getTripDetails()
    // eslint-disable-next-line
  },[])

  const getTripDetails = () => {
    const headers = {
      headers: {
        auth: localStorage.getItem("token")
      }
    }
    axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/giovana-martinho-hopper/trip/${id}`, headers)
    .then((response) => {
      setDetalhes(response.data.trip)
      console.log(response)
    }).catch((error) => {
      alert(error.response.data.message)
    })
  }

  const getDecide = (escolha, candidateId) => {
    const headers = {
      headers: {
        auth: localStorage.getItem("token")
      }
    }
    const body = {
      approve:escolha
    }
    axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/giovana-martinho-hopper/trips/${id}/candidates/${candidateId}/decide`, body, headers)
    .then((response) => {
      getTripDetails()
    }).catch((error) => {
      alert(error.response.data)
    })
  }
  console.log(detalhes)
  return (
    <div>
      <Header voltar="/admin/trips/list"/>
      <ContainerDetails>
      {detalhes && (
        <DetalhesTrips>
          <h1>{detalhes.name}</h1>
          <p><span>Nome: </span>{detalhes.name}</p>
          <p><span>Descrição: </span>{detalhes.description}</p>
          <p><span>Planeta: </span>{detalhes.planet}</p>
          <p><span>Duração: </span>{detalhes.durationInDays}</p>
          <p><span>Data: </span>{detalhes.date}</p>
        </DetalhesTrips>
      )}
      
        <h1>Pendentes</h1>
        {detalhes.candidates && detalhes.candidates.map((candidato) => (
        <PendentesTrips key={candidato.id} >
          <p><span>Nome: </span>{candidato.name}</p>
          <p><span>Profissão: </span>{candidato.profession}</p>
          <p><span>Idade: </span>{candidato.age}</p>
          <p><span>País: </span>{candidato.country}</p>
          <p><span>Texto de Candidatura: </span>{candidato.applicationText}</p>
          <button onClick={() => getDecide(true,candidato.id)}>Aprovado</button>
          <button onClick={() => getDecide(false,candidato.id)}>Reprovado</button>
        </PendentesTrips>
        ))}
      <div>
        <h1>Aprovados</h1>
        {detalhes.approved && detalhes.approved.map((aprovado) => (
        <div key={aprovado.id}>
          <p>Aprovado: {aprovado.name}</p>
        </div>
        ))}
      </div>
      </ContainerDetails>
    </div>
  )
}

export default TripDetailsPage