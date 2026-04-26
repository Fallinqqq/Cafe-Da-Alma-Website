import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export default function OrderNow() {
  const { t } = useLanguage();

  return (
    <main className="order-page">
      <p className="order-badge">{t.order.badge}</p>
      <h1>{t.order.title}</h1>
      <p className="order-intro">{t.order.description}</p>

      <div className="order-actions">
        <Link to="/shop" className="btn">{t.order.startOrder}</Link>
        <Link to="/menu" className="order-secondary-link">{t.order.browseMenu}</Link>
      </div>

      <section className="order-section">
        <h2>{t.order.optionsTitle}</h2>
        <div className="order-options-grid">
          {t.order.options.map(option => (
            <article className="order-option-card" key={option.title}>
              <h3>{option.title}</h3>
              <p className="order-option-detail">{option.detail}</p>
              <p>{option.note}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="order-section">
        <h2>{t.order.stepsTitle}</h2>
        <ol className="order-steps-list">
          {t.order.steps.map(step => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </section>

      <section className="order-section">
        <h2>{t.order.bundlesTitle}</h2>
        <div className="order-bundles-grid">
          {t.order.bundles.map(bundle => (
            <article className="order-bundle-card" key={bundle.name}>
              <div>
                <h3>{bundle.name}</h3>
                <p>{bundle.includes}</p>
              </div>
              <div className="order-bundle-footer">
                <span>{bundle.price}</span>
                <button type="button" className="product-button">{t.order.bundleAction}</button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="order-support-card">
        <h2>{t.order.supportTitle}</h2>
        <p>{t.order.supportBody}</p>
        <Link to="/contact" className="order-secondary-link">{t.order.supportAction}</Link>
      </section>

      <ul className="feature-list">
        {t.order.features.map(feature => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>
    </main>
  );
}
