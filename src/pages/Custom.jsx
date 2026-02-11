import React from 'react';
import './Custom.css';

const Custom = () => {
  return (
    <div className="custom-container">
      <div className="custom-card">
        <h2>CUSTOM MADE RUGS</h2>
        <p>Your vision becomes a reality with our bespoke custom rug service.</p>
        <div className="time-info">
          <strong>Production Time:</strong> 4 to 12 weeks
        </div>
        <p className="small-text">
          *Exact time depends on quality, size, and design complexity.
        </p>
        <button className="inquiry-btn">ENQUIRE NOW</button>
      </div>
    </div>
  );
};

export default Custom;