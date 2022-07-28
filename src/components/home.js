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
