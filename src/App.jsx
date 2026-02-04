import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";

import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Collections from "./pages/Collections";
import Projects from "./pages/Projects";
import Sectors from "./pages/Sectors";
import GlobalPresence from "./pages/GlobalPresence";
import Library from "./pages/Library";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/sectors" element={<Sectors />} />
        <Route path="/global-presence" element={<GlobalPresence />} />
        <Route path="/library" element={<Library />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}
