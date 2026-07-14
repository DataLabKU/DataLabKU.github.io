import { useState } from 'react';
import BrandLogo from './BrandLogo';
import { navLinks } from '../data/content';
import useActiveNav from '../hooks/useActiveNav';
import { useTheme } from '../context/ThemeContext';

export default function Nav() {
  const activeSection = useActiveNav(['research', 'publications', 'people', 'about', 'partners', 'contact']);
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={menuOpen ? 'nav--open' : ''}>
      <a href="#hero" className="nav-brand" aria-label="DATA Lab home" onClick={closeMenu}>
        <BrandLogo variant="nav" />
      </a>
      <ul className="nav-links">
        {navLinks.map((link) => (
          <li key={link.section}>
            <a
              href={link.href}
              className={activeSection === link.section ? 'active' : ''}
              onClick={closeMenu}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
      <div className="nav-actions">
        <button
          type="button"
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          title={theme === 'dark' ? 'Light mode' : 'Dark mode'}
        >
          <i className={`ti ${theme === 'dark' ? 'ti-sun' : 'ti-moon'}`} />
        </button>
        <a href="#contact" onClick={closeMenu}>
          <button type="button" className="nav-cta">Join Us →</button>
        </a>
        <button
          type="button"
          className="nav-menu-toggle"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          <i className={`ti ${menuOpen ? 'ti-x' : 'ti-menu-2'}`} />
        </button>
      </div>
    </nav>
  );
}
