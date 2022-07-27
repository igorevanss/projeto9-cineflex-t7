import movie1 from '../assets/images/image3.png'

export default function Home() {
  return (
    <>
      <div className="page-title">
        <p>Selecione o filme</p>
      </div>
      <div className="movies">
        <div className="movie">
          <img src={movie1} />
        </div>
        <div className="movie">
          <img src={movie1} />
        </div>
        <div className="movie">
          <img src={movie1} />
        </div>
      </div>
    </>
  )
}
