import React, { useState } from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  const [clicked, setClicked] = useState(false);

  function handleClick() {
    setClicked(!clicked);
  }

  return (
    <nav className="navbar">
      <div className="menu-icon" onClick={handleClick}>
        <i className={clicked ? 'fa fa-times' : 'fa fa-bars'}></i>
      </div>
      <ul
        className={
          window.innerWidth <= 960 && clicked ? 'nav-menu active' : 'nav-menu'
        }
        onClick={handleClick}
      >
        <li>
          <NavLink to="/" exact className="nav-links">
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/resume"
            exact
            className="nav-links"
            activeClassName="active"
          >
            Resume
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/projects"
            className="nav-links"
            activeClassName="active"
          >
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className="nav-links" activeClassName="active">
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
