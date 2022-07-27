import { BrowserRouter, Routes, Route} from 'react-router-dom';
import "../assets/reset.css";
import "../assets/style.css";
import Header from './header';
import Home from './home';

export default function App() {
  return (
    <>
      <Header />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
    
  )
}