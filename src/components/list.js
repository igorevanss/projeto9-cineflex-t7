import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function List() {
  const [items, setItems] = useState([])

  useEffect(() => {
    const requisition = axios.get(
      'https://mock-api.driven.com.br/api/v5/cineflex/movies'
    )
    requisition.then(response => {
      setItems(response.data)
    })
  }, [])
	
  if (items.length === 0) {
    return <img src="loading.gif" />
  } else {
		return (
			<>
				{items.map((value, index) => (
					<Render key={index} id={value.id} url={value.posterURL}/>
				))}
			</>
		)
	}

 
}

function Render({id, url}) {
	return (
			<div className="movie">
				<Link to={`/sessoes/${id}`}>
					<img src={url} alt="" />
				</Link>
			</div>
	)
}










{/* 

<Link to={`/sessoes/${id}`}>
	<img src={url} />
</Link>




<div className="movie">
<Link to='/Schedules'>
	<img src={""} alt="" />
</Link>
</div>
<div className="movie">
<Link to='/Schedules'>
	<img src={""} alt="" />
</Link>
</div>
<div className="movie">
<Link to='/Schedules'>
	<img src={""} alt="" />
</Link>
</div> */}