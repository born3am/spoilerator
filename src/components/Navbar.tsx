import React from 'react';
import './Navbar.css';
import Logo from './Logo';
import SearchInput from './SearchInput';

interface NavbarProps {
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
  activeCategory: string;
  onSearch: (query: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ setSelectedCategory, activeCategory, onSearch }) => {
  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  return (
<nav className="navbar">
  <div className="navbar__header">
    <Logo />
    <h1 className="navbar__title">The Spoilerator</h1>
  </div>
  <SearchInput onSearch={onSearch} />
  <div className="navbar__menu">
    <ul className="navbar__menu-list">
      <li className="navbar__menu-item"><a href="#now" onClick={() => handleCategoryClick('now')} className={activeCategory === 'now' ? 'navbar__menu-link--active' : 'navbar__menu-link'}>Now Playing</a></li>
      <li className="navbar__menu-item"><a href="#upcoming" onClick={() => handleCategoryClick('upcoming')} className={activeCategory === 'upcoming' ? 'navbar__menu-link--active' : 'navbar__menu-link'}>Upcoming</a></li>
      <li className="navbar__menu-item"><a href="#top" onClick={() => handleCategoryClick('top')} className={activeCategory === 'top' ? 'navbar__menu-link--active' : 'navbar__menu-link'}>Top Rated</a></li>
      <li className="navbar__menu-item"><a href="#about" onClick={() => handleCategoryClick('about')} className={activeCategory === 'about' ? 'navbar__menu-link--active' : 'navbar__menu-link'}>About</a></li>
    </ul>
  </div>
</nav>
  );
};

export default Navbar;
