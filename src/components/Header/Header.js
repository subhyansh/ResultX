import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaHouse, FaChartLine, FaUserGraduate, FaMagnifyingGlassChart, FaCalculator } from "react-icons/fa6";
import './Header.css';

const Header = () => {
  return (
    <section className="header" id="header">
      <div className="app" id="app">
        <h1>ResultX SRM</h1>
      </div>
      <div className="nav-bar" id="nav-bar">
        <ul className="nav-links">
          <li>
            <NavLink to="/"><FaHouse /> Home</NavLink >
          </li>
          <li>
            <NavLink to="/result"><FaChartLine /> Result</NavLink >
          </li>
          <li>
            <NavLink to="/profile"><FaUserGraduate /> Student Profile</NavLink >
          </li>
          <li>
            <NavLink to="/analytics"><FaMagnifyingGlassChart /> Analytics</NavLink >
          </li>
          <li>
            <NavLink to="/calc"><FaCalculator /> GPA Calculator</NavLink >
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Header;