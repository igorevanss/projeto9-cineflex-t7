import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "../assets/reset.css";
import "../assets/style.css";
import Header from './header';
import Home from './home';
import Schedules from './schedules';
import Seats from './seats';

export default function App() {
  return (
    <>
      <Header />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sessoes/:idFilme" element={<Schedules />} />
          <Route path="/assentos/:idSessao" element={<Seats />} />
        </Routes>
      </BrowserRouter>
    </>
    
  )
}