import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const links = [
  { to: '/menu', label: 'Menu' },
  { to: '/about', label: 'About' },
  { to: '/locations', label: 'Locations' },
  { to: '/contact', label: 'Contact' },
  { to: '/order', label: 'Order Now' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header>
      <nav>
        <div className="nav-top-bar">
          <NavLink to="/" className="logo" onClick={() => setOpen(false)}>
            Cafe <span>Da Alma</span>
          </NavLink>
          <button
            className="nav-toggle"
            onClick={() => setOpen(o => !o)}
            aria-label="Toggle navigation"
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
                className={({ isActive }) => (isActive ? 'active' : '')}
                onClick={() => setOpen(false)}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
