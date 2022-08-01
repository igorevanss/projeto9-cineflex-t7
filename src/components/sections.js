import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'

export default function Sections() {
  const [items, setItems] = useState([])
  const params = useParams()

  useEffect(() => {
    const requisition = axios.get(
      `https://mock-api.driven.com.br/api/v7/cineflex/movies/${params.idFilme}/showtimes`
    )
    requisition.then(response => {
      setItems(response.data.days)
      console.log(response.data.days)   })
  }, [])

  if (items.length === 0) {
    return <img src="loading.gif" />
  } else {
    return (
      <>
        {items.map((value, index) => (
          <div className="schedule">
            <p>{value.weekday} - {value.date}</p>
            <div className="squares">

              <div className="square">
                <p>{value.showtimes[0].name}</p>
              </div>
              <div className="square">
                <p>{value.showtimes[1].name}</p>
              </div>
              
            </div>
          </div>
        ))}
      </>
    )
  }
}