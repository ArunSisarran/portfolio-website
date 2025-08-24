import React from 'react';
import './Header.css';

const Header = ({ scrollToSection }) => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <h1>Your Name</h1>
        </div>
        <nav className="nav">
          <ul className="nav-list">
            <li>
              <button onClick={() => scrollToSection('about')} className="nav-link">
                About
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('projects')} className="nav-link">
                Projects
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('connect')} className="nav-link">
                Connect
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;