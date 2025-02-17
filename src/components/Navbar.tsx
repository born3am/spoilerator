import React from 'react';
import './Navbar.css';
import Logo from './Logo';
import SearchInput from './SearchInput';

interface NavbarProps {
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
  activeCategory: string;
}

const Navbar: React.FC<NavbarProps> = ({ setSelectedCategory, activeCategory }) => {
  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <nav className="navbar">
      <div className="navbar-header">
        <Logo />
        <h1>The Spoilerator</h1>
      </div>
      <SearchInput />
      <div className="navbar-menu">
        <ul>
          <li><a href="#now" onClick={() => handleCategoryClick('now')} className={activeCategory === 'now' ? 'active' : ''}>Now Playing</a></li>
          <li><a href="#upcoming" onClick={() => handleCategoryClick('upcoming')} className={activeCategory === 'upcoming' ? 'active' : ''}>Upcoming</a></li>
          <li><a href="#top" onClick={() => handleCategoryClick('top')} className={activeCategory === 'top' ? 'active' : ''}>Top Rated</a></li>
          <li><a href="#about" onClick={() => handleCategoryClick('about')} className={activeCategory === 'about' ? 'active' : ''}>About</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
