import React from 'react';
import './App.css'; 

function Navbar() {
  return (
    <nav>
      <ul>
        <li><a href="/">Home Page </a></li>
        <li><a href="/scan-settings">Scan Settings</a></li>
        <li><a href="/sp-settings">SP Settings</a></li>
        <li><a href="/nrt-selection">NRT Selection</a></li>
        <li><a href="/calibration-settings">Calibration Settings</a></li>
        <li><a href="/frequency-settings">Frequency Settings</a></li>
        
      </ul>
    </nav>
  );
}

export default Navbar;