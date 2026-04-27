import { useLanguage } from '../context/LanguageContext';

export default function Menu() {
  const { locale, t } = useLanguage();

  const menuImage = locale === 'pt' ? '/PT Menu.png' : '/ENGLISH MENU.png';
  const menuAlt = locale === 'pt' ? 'Cardápio Café Da Alma' : 'Café Da Alma Menu';

  return (
    <main className="menu-modern">
      <div className="shop-hero">
        <p className="shop-hero-eyebrow">Café Da Alma</p>
        <h1>{t.menu.title}</h1>
        <p className="shop-hero-sub">{t.menu.intro}</p>
      </div>
      <div className="menu-image-wrap">
      <img
        src={menuImage}
        alt={menuAlt}
        className="menu-image"
      />
      </div>
    </main>
  );
}
