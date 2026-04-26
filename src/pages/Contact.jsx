import { useLanguage } from '../context/LanguageContext';

export default function Contact() {
  const { t } = useLanguage();

  return (
    <main className="contact-page">
      <h1>{t.contact.title}</h1>
      <p className="contact-help">{t.contact.helpText}</p>
      <form className="contact-form contact-form-mockup" onSubmit={event => event.preventDefault()}>
        <label htmlFor="name">{t.contact.name}</label>
        <input id="name" name="name" type="text" placeholder={t.contact.namePlaceholder} required autoComplete="name" />

        <label htmlFor="email">{t.contact.email}</label>
        <input id="email" name="email" type="email" placeholder={t.contact.emailPlaceholder} required autoComplete="email" />

        <label htmlFor="message">{t.contact.message}</label>
        <textarea id="message" name="message" rows="7" placeholder={t.contact.messagePlaceholder} required />

        <button type="submit" className="btn">{t.contact.submit}</button>
      </form>
    </main>
  );
}
