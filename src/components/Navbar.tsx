import React from 'react';
import './Navbar.css';
import Logo from './Logo';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <Logo />
      <h1>The Spoilerator</h1>
      <ul>
        <li><a href="#about">About</a></li>
        <li><a href="#trend">Trend</a></li>
        <li><a href="#classics">Classics</a></li>
        <li><a href="#search">Search</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
