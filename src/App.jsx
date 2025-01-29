import { BrowserRouter , Route, Routes, Link } from 'react-router-dom';
import Home from './componts/Home';
import About from './componts//About';
import Contact from './componts//Contact';
import './App.css';
function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/Home">Home</Link> | 
        <Link to="/A222bout">About</Link> | 
        <Link to="/Contact">Contact</Link>
      </nav>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/A222bout" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App; 