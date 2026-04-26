import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const categories = [
  { label: 'Coffees', to: '/coffees', cls: 'coffees' },
  { label: 'Teas', to: '/teas', cls: 'teas' },
  { label: 'Pastries', to: '/pastries', cls: 'pastries' },
  { label: 'Shop', to: '/shop', cls: 'merchandise' },
];

const marqueeItems = [
  'Brazilian Soul', 'Neighborhood Pace', 'Handcrafted Daily',
  'Specialty Coffee & Tea', 'Fresh Pastries', 'Lynchburg & São Paulo',
];

export default function Home() {
  const { t } = useLanguage();

  return (
    <main className="home-page">

      {/* ── Hero ── */}
      <section className="home-hero-banner">
        <video autoPlay muted loop playsInline>
          <source src="/8855729-hd_1920_1080_25fps.mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="hero-eyebrow">Cafe Da Alma Coffee &amp; Tea Co.</p>
          <h1>{t.home.banner}</h1>
          <div className="hero-ctas">
            <Link to="/order" className="hero-btn-primary">{t.home.splitCta}</Link>
            <Link to="/menu" className="hero-btn-secondary">{t.home.exploreMenu}</Link>
          </div>
        </div>
      </section>

      {/* ── Marquee ── */}
      <div className="home-marquee" aria-hidden="true">
        <div className="home-marquee-track">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i}>{item} <span className="marquee-dot">·</span></span>
          ))}
        </div>
      </div>

      {/* ── Shop by category ── */}
      <section className="home-categories">
        <div className="home-categories-inner">
          <h2 className="home-section-label">Shop by Category</h2>
          <div className="home-cat-grid">
            {categories.map(cat => (
              <Link to={cat.to} key={cat.label} className={`home-cat-card home-cat-${cat.cls}`}>
                <span>{cat.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Strip ── */}
      <section className="home-strip">
        <h2>{t.home.stripTop}</h2>
      </section>

      {/* ── About split ── */}
      <section className="home-split-section">
        <div className="home-split-text">
          <p className="home-split-eyebrow">Our craft</p>
          <h2>{t.home.splitTitle}</h2>
          <p>{t.home.splitBody}</p>
          <Link to="/order" className="home-pill-button">{t.home.splitCta}</Link>
        </div>
        <div className="home-split-visual">
          <div className="home-split-img" />
        </div>
      </section>

      {/* ── Why guests come back ── */}
      <section className="home-highlights-section">
        <h2>{t.home.highlightsTitle}</h2>
        <ul className="home-highlights-list">
          {t.home.highlights.map(highlight => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
      </section>

    </main>
  );
}
