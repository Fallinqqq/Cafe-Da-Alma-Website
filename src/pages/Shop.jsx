import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { getShopCategories } from '../data/siteContent';

const categoryAccents = {
  coffees: { color: '#8b4a22', light: '#f9ede4' },
  teas: { color: '#4a6e2a', light: '#eaf2e0' },
  pastries: { color: '#b06818', light: '#fdf3e0' },
  merchandise: { color: '#7a3232', light: '#fae8e8' },
  'packaged-coffee-tea': { color: '#5a6e32', light: '#eef3e0' },
};

export default function Shop() {
  const { locale, t } = useLanguage();
  const shopCategories = getShopCategories(locale).filter(
    cat => cat.slug !== 'coffees' && cat.slug !== 'teas' && cat.slug !== 'pastries'
  );

  return (
    <main className="shop-page">

      {/* Page hero */}
      <div className="shop-hero">
        <p className="shop-hero-eyebrow">Café Da Alma</p>
        <h1>{t.shop.title}</h1>
        <p className="shop-hero-sub">{t.shop.intro}</p>
      </div>

      {/* Sticky category tabs */}
      <div className="shop-tabs-wrap">
        <div className="shop-tabs">
          {shopCategories.map(cat => (
            <a key={cat.slug} href={`#${cat.slug}`} className="shop-tab">
              {cat.navLabel}
            </a>
          ))}
        </div>
      </div>

      {/* Category sections */}
      <div className="shop-sections">
        {shopCategories.map(cat => {
          const accent = categoryAccents[cat.slug] || { color: '#8b4a22', light: '#f9ede4' };
          return (
            <section id={cat.slug} className="shop-showcase" key={cat.slug}>

              {/* Section header */}
              <div className="shop-section-header">
                <div className="shop-section-label-wrap">
                  <span className="shop-section-tag" style={{ background: accent.light, color: accent.color }}>
                    {cat.navLabel}
                  </span>
                  <h2>{cat.title}</h2>
                  <p>{cat.description}</p>
                </div>
                <Link to={cat.route} className="shop-view-link">
                  View all {cat.navLabel} →
                </Link>
              </div>

              {/* Product grid */}
              <div className="product-grid">
                {cat.products.slice(0, 3).map((product, i) => (
                  <article className="product-card" key={product.name}>
                    <div
                      className={`product-thumb ${cat.slug}`}
                      style={product.image ? {
                        backgroundImage: `url('${product.image}')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                      } : {}}
                    >
                      {i === 0 && <span className="product-badge">Popular</span>}
                    </div>
                    <div className="product-meta">
                      <h3>{product.name}</h3>
                      <div className="product-meta-row">
                        <span className="product-price">{product.price}</span>
                        <Link to={cat.route} className="product-button">{t.shop.cardAction}</Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

            </section>
          );
        })}
      </div>

    </main>
  );
}

