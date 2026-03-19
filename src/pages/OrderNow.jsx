import { useLanguage } from '../context/LanguageContext';

export default function OrderNow() {
  const { t } = useLanguage();

  return (
    <main>
      <h1>{t.order.title}</h1>
      <p>{t.order.description}</p>
      <ul className="feature-list">
        {t.order.features.map(feature => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>
    </main>
  );
}
