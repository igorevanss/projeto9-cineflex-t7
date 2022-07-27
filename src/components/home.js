import movie1 from '../assets/images/image3.png'
import List from './list'

export default function Home() {
  return (
    <>
      <div className="page-title">
        <p>Selecione o filme</p>
      </div>
      <div className="movies">
        <List />
      </div>
    </>
  )
}
