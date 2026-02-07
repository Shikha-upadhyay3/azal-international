import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import Footer from '../components/Footer'; // Isse aapka naya design load hoga
import './MainLayout.css';

const MainLayout = () => {
  return (
    <div className="layout-wrapper">
      {/* Navbar Section */}
      <nav className="navbar sticky">
        <div className="logo">
          <span className="logo-text">Azal International</span>
        </div>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/collections">Collections</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="nav-buttons">
          <button className="btn-outline">Request Catalog</button>
          <button className="btn-gold">Get a Quote</button>
        </div>
      </nav>

      {/* Page Content */}
      <main className="content">
        <Outlet /> 
      </main>

      {/* Footer Section - Sirf component call karein */}
      <Footer /> 
    </div>
  );
};

export default MainLayout;