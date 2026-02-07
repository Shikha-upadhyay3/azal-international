import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs'; 
// Baki saare pages bhi import karein (Collections, Projects, etc.) [cite: 23-31]

function App() {
  return (
    <Router>
      <Routes>
        {/* MainLayout ke andar saare pages aayenge [cite: 15-20] */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<AboutUs />} />
          {/* Day 2 ke baki routes yanha add karein */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;