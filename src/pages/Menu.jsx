import { useLanguage } from '../context/LanguageContext';
import { getMenuSections } from '../data/siteContent';

export default function Menu() {
  const { locale, t } = useLanguage();
  const menuSections = getMenuSections(locale);

  return (
    <main className="menu-modern">
      <h1>{t.menu.title}</h1>
      <p className="menu-intro">{t.menu.intro}</p>
      <div className="menu-layout">
        {menuSections.map(section => (
          <section className="menu-section" key={section.title}>
            <div className="menu-section-head">
              <h2>{section.title}</h2>
              <span>{section.items.length} {t.menu.itemsLabel}</span>
            </div>
            <div className="menu-list">
              {section.items.map(({ name, price, description }) => (
                <article className="menu-entry" key={name}>
                  <div className="menu-entry-top">
                    <h3>{name}</h3>
                    <span className="price">{price}</span>
                  </div>
                  {description ? <p>{description}</p> : null}
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
