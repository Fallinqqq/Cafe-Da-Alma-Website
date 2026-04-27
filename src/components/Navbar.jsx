import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const allLinks = [
  { to: '/menu', key: 'menu' },
  { to: '/shop', key: 'shop' },
  { to: '/locations', key: 'locations' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const { locale, t, toggleLanguage } = useLanguage();

  const close = () => setOpen(false);

  const linkClass = ({ isActive }, to) => {
    const cls = ['nav-link'];
    if (isActive && to !== '/menu') cls.push('active');
    return cls.join(' ');
  };

  return (
    <header>
      {/* Announcement bar */}
      <div className="nav-announce">
        <span>Brazilian soul, neighborhood pace — now serving Lynchburg &amp; São Paulo</span>
      </div>

      <nav>
        {/* Logo - left */}
        <NavLink to="/" className="logo" onClick={close}>
          {!logoError ? (
            <img
              src="/new-logo.png"
              alt="Café Da Alma"
              className="logo-img"
              onError={() => setLogoError(true)}
            />
          ) : (
            <>Cafe <span>Da Alma</span></>
          )}
        </NavLink>

        {/* All links + CTA - right */}
        <ul className="nav-group nav-right">
          {allLinks.map(({ to, key }) => (
            <li key={to}>
              <NavLink to={to} className={p => linkClass(p, to)} onClick={close}>
                {t.nav[key]}
              </NavLink>
            </li>
          ))}
          <li className="nav-lang-item">
            <button
              type="button"
              className={`language-switch ${locale === 'pt' ? 'pt' : 'en'}`}
              onClick={toggleLanguage}
              aria-label={t.nav.language}
            >
              <span className="language-option en-label">EN</span>
              <span className="language-option pt-label">PT</span>
              <span className="language-thumb" aria-hidden="true" />
            </button>
          </li>
          <li className="nav-order-item">
            <NavLink to="/order" className="order-link" onClick={close}>
              {t.nav.order}
            </NavLink>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          className="nav-toggle"
          onClick={() => setOpen(o => !o)}
          aria-label={t.nav.toggleOpen}
          aria-expanded={open}
        >
          {open ? '✕' : '☰'}
        </button>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <ul className="nav-mobile">
          {allLinks.map(({ to, key }) => (
            <li key={to}>
              <NavLink to={to} className={p => linkClass(p, to)} onClick={close}>
                {t.nav[key]}
              </NavLink>
            </li>
          ))}
          <li><NavLink to="/order" className="order-link" onClick={close}>{t.nav.order}</NavLink></li>
        </ul>
      )}
    </header>
  );
}
