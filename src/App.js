import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink, useLocation } from 'react-router-dom';
import './App.css';
import MainPage from './main-page/MainPage';

function App() {
  const location = useLocation();
  const [underlinePosition, setUnderlinePosition] = useState({ left: 0, width: 0 });

  const updateUnderline = (element) => {
    const rect = element.getBoundingClientRect();
    setUnderlinePosition({ left: rect.left, width: rect.width });
  };

  useEffect(() => {
    const activeElement = document.querySelector('.nav-link.active-nav-link');
    if (activeElement) {
      updateUnderline(activeElement);
    }
  }, [location]);

  return (
    <div className="App">
      {/* Top Navigation Bar */}
      <nav className="navbar">
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => `nav-link ${isActive ? 'active-nav-link' : ''}`}
              onClick={(e) => updateUnderline(e.target)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/energy"
              className={({ isActive }) => `nav-link ${isActive ? 'active-nav-link' : ''}`}
              onClick={(e) => updateUnderline(e.target)}
            >
              Energy
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/album"
              className={({ isActive }) => `nav-link ${isActive ? 'active-nav-link' : ''}`}
              onClick={(e) => updateUnderline(e.target)}
            >
              Album
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/wild"
              className={({ isActive }) => `nav-link ${isActive ? 'active-nav-link' : ''}`}
              onClick={(e) => updateUnderline(e.target)}
            >
              In the Wild
            </NavLink>
          </li>
        </ul>

        {/* Underline indicator */}
        <div
          className="underline"
          style={{ left: `${underlinePosition.left}px`, width: `${underlinePosition.width}px` }}
        />
      </nav>

      {/* Define Routes */}
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/energy" element={<h1>Energy Page</h1>} />
        <Route path="/album" element={<h1>Album Page</h1>} />
        <Route path="/wild" element={<h1>In the Wild Page</h1>} />
      </Routes>
    </div>
  );
}

export default App;
