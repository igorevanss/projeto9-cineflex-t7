import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "../assets/reset.css";
import "../assets/style.css";
import Header from './header';
import Home from './home';
import Schedules from './schedules';

export default function App() {
  return (
    <>
      <Header />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sessoes/:idFilme" element={<Schedules />} />
        </Routes>
      </BrowserRouter>
    </>
    
  )
}