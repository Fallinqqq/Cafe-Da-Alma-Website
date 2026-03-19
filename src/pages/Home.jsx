import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export default function Home() {
  const { t } = useLanguage();

  return (
    <main className="home-page">
      <section className="home-hero-banner">
        <h1>{t.home.banner}</h1>
      </section>

      <section className="home-featured-menu">
        <h2>{t.home.featuredTitle}</h2>
        <div className="home-featured-grid">
          <article className="home-item-card">
            <div className="home-item-image tea" />
            <p>Product 1</p>
          </article>
          <article className="home-item-card">
            <div className="home-item-image coffees" />
            <p>Product 2</p>
          </article>
          <article className="home-item-card">
            <div className="home-item-image pastries" />
            <p>Product 3</p>
          </article>
        </div>
        <Link to="/menu" className="home-pill-button">{t.home.exploreMenu}</Link>
      </section>

      <section className="home-strip">
        <h2>{t.home.placeholderTop}</h2>
      </section>

      <section className="home-split-section">
        <div className="home-split-media" />
        <h2>{t.home.splitText}</h2>
      </section>

      <section className="home-strip">
        <h2>{t.home.placeholderBottom}</h2>
      </section>

      <section className="home-social">
        <h2>{t.home.socialHandle}</h2>
        <div className="home-social-grid">
          <div className="home-social-image img-1" />
          <div className="home-social-image img-2" />
          <div className="home-social-image img-3" />
        </div>
      </section>
    </main>
  );
}
