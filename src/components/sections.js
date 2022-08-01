import { Link } from 'react-router-dom'
export default function Sections({items}) {

  if (items.length === 0) {
    return <img src="loading.gif" />
  } else {
    return (
      <>
        {items.map((value, index) => (
          <div className="schedule" key={index}>
            <p>
              {value.weekday} - {value.date}
            </p>
            <div className="squares">
              {value.showtimes.map((times, index) => (
                <Link to={`/assentos/`}>
                <div className="square" key={index}>
                  <p>{times.name}</p>
                </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </>
    )
  }
}
