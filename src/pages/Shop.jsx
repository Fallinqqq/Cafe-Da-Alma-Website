import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { getShopCategories } from '../data/siteContent';

export default function Shop() {
  const { locale, t } = useLanguage();
  const shopCategories = getShopCategories(locale);

  return (
    <main className="shop-page">
      <div className="shop-toolbar">
        {shopCategories.map(category => (
          <a key={category.slug} href={`#${category.slug}`} className="shop-toolbar-link">
            {category.navLabel}
          </a>
        ))}
      </div>

  <h1>{t.shop.title}</h1>
  <p>{t.shop.intro}</p>

      <div className="shop-sections">
        {shopCategories.map(category => (
          <section id={category.slug} className="shop-showcase" key={category.slug}>
            <div className="shop-section-headline">
              <div>
                <h2>{category.title}</h2>
                <p>{category.description}</p>
              </div>
              <Link to={category.route} className="shop-view-link">{t.shop.viewAll}</Link>
            </div>

            <div className="product-grid preview-grid">
              {category.products.slice(0, 6).map(product => (
                <article className={`product-card ${category.slug}`} key={product.name}>
                  <div className={`product-thumb ${category.slug}`}>
                    <span>{category.title}</span>
                  </div>
                  <div className="product-meta">
                    <h3>{product.name}</h3>
                    <p>{product.price}</p>
                    <Link to={category.route} className="product-button">{t.shop.addToCart}</Link>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
