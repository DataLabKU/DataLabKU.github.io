import { useState } from 'react';
import BrandLogo from './BrandLogo';
import { navLinks } from '../data/content';
import useActiveNav from '../hooks/useActiveNav';

export default function Nav() {
  const activeSection = useActiveNav(['research','about', 'publications', 'people', 'partners', 'contact']);
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={menuOpen ? 'nav--open' : ''}>
      <a href="#hero" className="nav-brand" aria-label="DATA Lab home" onClick={closeMenu}>
        <BrandLogo variant="nav" />
        <span className="nav-identity">
          <strong>DATA Lab</strong>
          <small>Kuwait University</small>
        </span>
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
        <a href="#contact" className="nav-cta" onClick={closeMenu}>Join the lab <span aria-hidden="true">→</span></a>
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
