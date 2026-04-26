import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { getShopCategories, getShopCategory } from '../data/siteContent';

export default function ShopCategoryPage({ slug }) {
  const { locale, t } = useLanguage();
  const shopCategories = getShopCategories(locale);
  const category = getShopCategory(slug, locale);

  return (
    <main className="shop-page category-page">
      <div className="shop-toolbar">
        {shopCategories.map(item => (
          <Link
            key={item.slug}
            to={item.route}
            className={`shop-toolbar-link${item.slug === category.slug ? ' current' : ''}`}
          >
            {item.navLabel}
          </Link>
        ))}
      </div>

      <div className="shop-section-headline">
        <div>
          <h1>{category.title}</h1>
          <p>{category.description}</p>
        </div>
        <Link to="/shop" className="shop-view-link">{t.shop.backToShop}</Link>
      </div>

      <div className="product-grid">
        {category.products.map(product => (
          <article className={`product-card ${category.slug}`} key={product.name}>
            <div className={`product-thumb ${category.slug}`}>
              <span>{category.title}</span>
            </div>
            <div className="product-meta">
              <h3>{product.name}</h3>
              <p>{product.price}</p>
              <button type="button" className="product-button">{t.shop.cardAction}</button>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}