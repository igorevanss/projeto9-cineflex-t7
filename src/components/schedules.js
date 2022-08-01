import Footer from './footer'
import Sections from './sections'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'

  

export default function Schedules() {

  const [footerInfo, setFooterInfo] = useState([])
  const [items, setItems] = useState([])
  const params = useParams()

  useEffect(() => {
    const requisition = axios.get(
      `https://mock-api.driven.com.br/api/v7/cineflex/movies/${params.idFilme}/showtimes`
    )
    requisition.then(response => {
      setItems(response.data.days)
      setFooterInfo(response.data)
      console.log(response.data)
    })
  }, [])

  return (
    <>
      <div className="page-title">
        <p>Selecione o horário</p>
      </div>
      <div className="schedules">
        <Sections items={items}/>
      </div>
      <Footer footerInfo={footerInfo}/>
    </>
  )
}
