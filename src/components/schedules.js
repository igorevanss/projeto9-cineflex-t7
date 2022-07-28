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