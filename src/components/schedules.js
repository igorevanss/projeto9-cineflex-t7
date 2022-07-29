import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Footer from './footer'

export default function Schedules() {
  return (
    <>
      <div className="page-title">
        <p>Selecione o horário</p>
      </div>
      <div className="schedules">
        <div className="schedule">
          <p>
          Quinta-feira - 24/06/2021
          </p>
          <div className="squares">
            <div className="square">
              <p>15:00</p>
            </div>
            <div className="square">
              <p>19:00</p>
            </div>
          </div>
        </div>
        <div className="schedule">
          <p>
          Sexta-feira - 25/06/2021
          </p>
          <div className="squares">
            <div className="square">
              <p>15:00</p>
            </div>
            <div className="square">
              <p>19:00</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

function Sections() {
  const [items, setItems] = useState([])

  useEffect(() => {
    const requisition = axios.get(
      'https://mock-api.driven.com.br/api/v7/cineflex/movies/ID_DO_FILME/showtimes'
    )
    requisition.then(response => {
      setItems(response.data)
      console.log(response.data)
    })
  }, [])

  if (items.length === 0) {
    return <img src="loading.gif" />
  } else {
    return (
      <>
        {items.map((value, index) => (
          <div className="schedule">
          <p>
          Quinta-feira - 24/06/2021
          </p>
          <div className="squares">
            <div className="square">
              <p>15:00</p>
            </div>
            <div className="square">
              <p>19:00</p>
            </div>
          </div>
        </div>
        ))}
      </>
    )
  }
}