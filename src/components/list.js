import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Schedules from './schedules'

export default function List() {
  const [items, setItems] = useState(null)

  useEffect(() => {
    const requisition = axios.get(
      'https://mock-api.driven.com.br/api/v5/cineflex/movies'
    )
    requisition.then(response => {
      setItems(response.data.items)
			console.log(response.data.id);
    })
  }, [])

  if (items === null) {
    return <img src="loading.gif" />
  }

  return (
		<Link to='/Schedules'>
    <div className="movie">
      <img src={""} alt="" />
    </div>
		</Link>
  )
}
