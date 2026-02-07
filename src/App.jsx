import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Collections from './pages/Collections';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Routes>
        {/* MainLayout ke andar persistent Navbar aur Footer rahenge [cite: 15, 20] */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} /> 
          <Route path="about" element={<AboutUs />} />
          <Route path="collections" element={<Collections />} />
          <Route path="contact" element={<Contact />} />
        </Route>

        
      </Routes>
    </Router>
  );
}

export default App;