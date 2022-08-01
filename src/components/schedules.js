import Footer from './footer'
import Sections from './sections'

export default function Schedules() {
  return (
    <>
      <div className="page-title">
        <p>Selecione o horário</p>
      </div>
      <div className="schedules">
        <Sections />
      </div>
      <Footer />
    </>
  )
}


