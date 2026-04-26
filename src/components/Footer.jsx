import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const footerNavLinks = [
  { key: 'about', to: '/menu' },
  { key: 'careers', to: '/shop' },
  { key: 'press', to: '/locations' },
  { key: 'customerCare', to: '/contact' },
  { key: 'foodservice', to: '/order' },
];

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div>
            <img src="/logo-horizontal.png" alt="Cafe Da Alma" className="footer-logo" />
            <ul className="footer-nav">
              {footerNavLinks.map(link => (
                <li key={link.key}>
                  <Link to={link.to}>{t.footer.nav[link.key]}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-subscribe">
            <p>{t.footer.newsTitle}</p>
            <form className="footer-subscribe-form" onSubmit={event => event.preventDefault()}>
              <input type="email" placeholder={t.footer.emailPlaceholder} aria-label={t.footer.emailPlaceholder} />
              <button type="submit">{t.footer.subscribe}</button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-legal">
            <span>{t.footer.terms}</span>
            <span>|</span>
            <span>{t.footer.privacy}</span>
            <span>|</span>
            <span>{t.footer.transparency}</span>
          </div>

          <div className="footer-social">
            {['YT', 'FB', 'IG', 'TW', 'PN'].map(network => (
              <button type="button" key={network} aria-label={network}>{network}</button>
            ))}
          </div>
        </div>

        <p className="footer-copyright">{t.footer.copyright}</p>
      </div>
    </footer>
  );
}