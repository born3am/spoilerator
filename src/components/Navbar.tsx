import React from 'react';
import { NavLink } from 'react-router-dom';
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
          <li className="navbar__menu-item">
            <NavLink
              to="/now"
              onClick={() => handleCategoryClick('now')}
              className={({ isActive }) => isActive ? 'navbar__menu-link--active' : 'navbar__menu-link'}
              aria-current={activeCategory === 'now' ? 'page' : undefined}
            >
              Now Playing
            </NavLink>
          </li>
          <li className="navbar__menu-item">
            <NavLink
              to="/upcoming"
              onClick={() => handleCategoryClick('upcoming')}
              className={({ isActive }) => isActive ? 'navbar__menu-link--active' : 'navbar__menu-link'}
              aria-current={activeCategory === 'upcoming' ? 'page' : undefined}
            >
              Upcoming
            </NavLink>
          </li>
          <li className="navbar__menu-item">
            <NavLink
              to="/top"
              onClick={() => handleCategoryClick('top')}
              className={({ isActive }) => isActive ? 'navbar__menu-link--active' : 'navbar__menu-link'}
              aria-current={activeCategory === 'top' ? 'page' : undefined}
            >
              Top Rated
            </NavLink>
          </li>
          <li className="navbar__menu-item">
            <NavLink
              to="/about"
              onClick={() => handleCategoryClick('about')}
              className={({ isActive }) => isActive ? 'navbar__menu-link--active' : 'navbar__menu-link'}
              aria-current={activeCategory === 'about' ? 'page' : undefined}
            >
              About
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
