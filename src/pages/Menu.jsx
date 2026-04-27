import { useLanguage } from '../context/LanguageContext';

export default function Menu() {
  const { locale, t } = useLanguage();

  const menuImage = locale === 'pt' ? '/PT Menu.png' : '/ENGLISH MENU.png';
  const menuAlt = locale === 'pt' ? 'Cardápio Café Da Alma' : 'Café Da Alma Menu';

  return (
    <main className="menu-modern">
      <h1>{t.menu.title}</h1>
      <img
        src={menuImage}
        alt={menuAlt}
        className="menu-image"
      />
    </main>
  );
}
