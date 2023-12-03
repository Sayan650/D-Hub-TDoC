import React from 'react';
import "./Navbar.scss";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar">
        <Link to="/" className="navbar-title">
          D
          <span className="navbar-subtitle">-Hub</span>
        </Link>
        <div className="search-bar">
          <input
            type="search"
            name="search"
            aria-label="Search"
            placeholder="Type / to search for user"
            className="search-field"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
