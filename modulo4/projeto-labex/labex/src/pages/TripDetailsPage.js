import Header from "../components/Header";
import { useProtectedPage } from "../hooks/useProtectedPage";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

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
      {detalhes && (
        <div>
        <h1>{detalhes.name}</h1>
        <p>Nome: {detalhes.name}</p>
        <p>Descrição: {detalhes.description}</p>
        <p>Planeta: {detalhes.planet}</p>
        <p>Duração: {detalhes.durationInDays}</p>
        <p>Data: {detalhes.date}</p>
      </div>
      )}
      <div>
        <h1>Pendentes</h1>
        {detalhes.candidates && detalhes.candidates.map((candidato) => (
        <div key={candidato.id} >
          <p>Nome: {candidato.name}</p>
          <p>Profissão: {candidato.profession}</p>
          <p>Idade: {candidato.age}</p>
          <p>País: {candidato.country}</p>
          <p>Texto de Candidatura: {candidato.applicationText}</p>
          <button onClick={() => getDecide(true,candidato.id)}>Aprovado</button>
          <button onClick={() => getDecide(false,candidato.id)}>Reprovado</button>
        </div>
        ))}
      </div>
      <div>
        <h1>Aprovados</h1>
        {detalhes.approved && detalhes.approved.map((aprovado) => (
        <div key={aprovado.id}>
          <p>Aprovado: {aprovado.name}</p>
        </div>
        ))}
      </div>
    </div>
  )
}

export default TripDetailsPage