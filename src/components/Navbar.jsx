import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const { locale, t, toggleLanguage } = useLanguage();

  const links = [
    { to: '/menu', label: t.nav.menu },
    { to: '/shop', label: t.nav.shop },
    { to: '/locations', label: t.nav.locations },
    { to: '/contact', label: t.nav.contact },
    { to: '/order', label: t.nav.order },
  ];

  return (
    <header>
      <nav>
        <div className="nav-top-bar">
          <NavLink to="/" className="logo" onClick={() => setOpen(false)}>
            {!logoError ? (
              <img
                src="/logo-horizontal.png"
                alt="Cafe Da Alma"
                className="logo-img"
                onError={() => setLogoError(true)}
              />
            ) : (
              <>Cafe <span>Da Alma</span></>
            )}
          </NavLink>
          <button
            className="nav-toggle"
            onClick={() => setOpen(o => !o)}
            aria-label={t.nav.toggleOpen}
            aria-expanded={open}
          >
            {open ? 'x' : '='}
          </button>
        </div>
        <ul className={`nav-links${open ? ' open' : ''}`}>
          {links.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                className={({ isActive }) => {
                  const classes = [];
                  if (isActive && to !== '/menu') classes.push('active');
                  if (to === '/order') classes.push('order-link');
                  return classes.join(' ');
                }}
                onClick={() => setOpen(false)}
              >
                {label}
              </NavLink>
            </li>
          ))}
          <li>
            <button
              type="button"
              className={`language-switch ${locale === 'pt' ? 'pt' : 'en'}`}
              onClick={toggleLanguage}
              aria-label={t.nav.language}
            >
              <span className="language-option en-label">EN</span>
              <span className="language-option pt-label">PT-BR</span>
              <span className="language-thumb" aria-hidden="true" />
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
