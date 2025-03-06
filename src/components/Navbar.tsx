import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import LogoTitle from './LogoTitle';
import Logo from './Logo';
import SearchInput from './SearchInput';

interface NavbarProps {
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
  activeCategory: string;
  onSearch: (query: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ setSelectedCategory, activeCategory, onSearch }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar__header">
        <Logo />
        <LogoTitle />
      </div>
      <div className="navbar__search-hamburger">
        <SearchInput onSearch={onSearch} />
        <button className="navbar__hamburger" onClick={toggleMenu}>
          &#9776; {/* Hamburger icon */}
        </button>
      </div>
      <div className={`navbar__menu ${isMenuOpen ? 'navbar__menu--open' : ''}`}>
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
