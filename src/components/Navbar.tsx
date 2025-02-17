import React from 'react';
import './Navbar.css';
import Logo from './Logo';
import SearchInput from './SearchInput';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <Logo />
      <h1>The Spoilerator</h1>
      <SearchInput />
      <ul>
        <li><a href="#trend">Trend</a></li>
        <li><a href="#classics">Classics</a></li>
        <li><a href="#about">About</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
