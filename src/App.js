// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import './App.css';
import MainPage from './main-page/MainPage';
// import EnergyPage from './energy-page/EnergyPage'; // You’ll create these new pages
// import AlbumPage from './album-page/AlbumPage';
// import WildPage from './wild-page/WildPage';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Top Navigation Bar */}
        <nav className="navbar">
          <ul>
            <li>
              <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active-nav-link" : "nav-link"}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/energy" className={({ isActive }) => isActive ? "nav-link active-nav-link" : "nav-link"}>Energy</NavLink>
            </li>
            <li>
              <NavLink to="/album" className={({ isActive }) => isActive ? "nav-link active-nav-link" : "nav-link"}>Album</NavLink>
            </li>
            <li>
              <NavLink to="/wild" className={({ isActive }) => isActive ? "nav-link active-nav-link" : "nav-link"}>In the Wild</NavLink>
            </li>
          </ul>
        </nav>

        {/* Define Routes */}
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/energy" element={<h1>energy</h1>} />
          <Route path="/album" element={<h1>album</h1>} />
          <Route path="/wild" element={<h1>in the wild</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
