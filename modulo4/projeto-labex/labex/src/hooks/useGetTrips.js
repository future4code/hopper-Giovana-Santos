import { useEffect, useState } from "react";
import axios from "axios";

const useGetTrips = () => {
  const [trips, setTrips] = useState([])

  useEffect(() => {
    getTrips()
  },[])

  const getTrips = () =>{
    axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/giovana-martinho-hopper/trips`)
    .then((response) => {
        setTrips(response.data.trips)
    }).catch((error) => {
        alert(error.response.data.message)
    })
  } 
  return { trips, getTrips }
}

export default useGetTrips