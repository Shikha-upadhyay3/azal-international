import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="cta-banner">
        <div className="cta-content">
          <p className="cta-sub">LET'S COLLABORATE</p>
          <h2 className="cta-title">Ready to craft a signature carpet program?</h2>
        </div>
        <button className="btn-consult">Book a Consultation</button>
      </div>

      <div className="footer-links-container">
        <div className="footer-nav-col">
          <h4>Azal International</h4>
          <p>Curating premium carpets and floor artistry for modern interiors.</p>
        </div>
        <div className="footer-nav-col">
          <h4>Company</h4>
          <ul><li>Story</li><li>Sustainability</li><li>Press</li></ul>
        </div>
        <div className="footer-nav-col">
          <h4>Collections</h4>
          <ul><li>Hand-tufted</li><li>Broadloom</li><li>Outdoor</li></ul>
        </div>
        <div className="footer-nav-col">
          <h4>Contact</h4>
          <p>info@azalinternational.com</p>
          <button className="btn-schedule-visit">Schedule a Visit</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;