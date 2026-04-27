import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const featuredCoffees = [
  { name: 'Bourbon Santos', image: '/bourbon santos.jpg', price: '$15' },
  { name: 'Espírito Forte', image: '/espirito forte.jpg', price: '$15' },
  { name: 'Luz do Dia', image: '/Luz do dia.jpg', price: '$15' },
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
          <p className="hero-eyebrow">Café Da Alma Coffee &amp; Tea Co.</p>
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

      {/* ── Craft banner ── */}
      <section className="home-craft-banner">
        <div className="home-craft-overlay" />
        <div className="home-craft-content">
          <p className="home-about-eyebrow">Our Craft</p>
          <h2>Roasted with Purpose,<br />Brewed with Care</h2>
          <p>
            Every bean traces back to the sun-soaked highlands of Brazil. We work
            with small-batch roasters who share our obsession with quality —
            from the farm to your cup.
          </p>
          <Link to="/order" className="hero-btn-primary">Order Now</Link>
        </div>
      </section>

      {/* ── Shop by featured ── */}
      <section className="home-categories">
        <div className="home-categories-inner">
          <h2 className="home-section-label">Shop by Featured</h2>
          <div className="home-featured-grid">
            {featuredCoffees.map(coffee => (
              <div key={coffee.name} className="home-featured-item">
                <Link to="/order" className="home-featured-card">
                  <img src={coffee.image} alt={coffee.name} className="home-featured-img" />
                  <div className="home-featured-label">
                    <span>{coffee.name}</span>
                  </div>
                </Link>
                <Link to="/order" className="home-featured-btn">
                  Shop Now &nbsp;|&nbsp; {coffee.price}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── About ── */}
      <section id="about" className="home-about">
        <div className="home-about-visual" />
        <div className="home-about-text">
          <p className="home-about-eyebrow">Our Story</p>
          <h2>Where Brazilian Soul Meets Neighborhood Warmth</h2>
          <p>
            Café Da Alma — meaning "Café of the Soul" — was born from a love of Brazilian
            coffee culture and the belief that a great cup of coffee should slow you down,
            not speed you up. We source bold Brazilian roasts, brew handcrafted teas, and
            bake fresh pastries every morning for our neighbors in Lynchburg, VA and
            São Paulo, Brazil.
          </p>
          <p>
            Every drink, every bite, every visit is made with intention. We are not just
            a cafe — we are a place where moments stretch a little longer and the cups
            are always warm.
          </p>
        </div>
      </section>

    </main>
  );
}
