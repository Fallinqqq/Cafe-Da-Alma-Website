import { useLanguage } from '../context/LanguageContext';

export default function Contact() {
  const { t } = useLanguage();

  return (
    <main className="contact-page">
      <h1>{t.contact.title}</h1>
      <form className="contact-form contact-form-mockup">
        <label htmlFor="name">{t.contact.name}</label>
        <input id="name" name="name" type="text" />

        <label htmlFor="email">{t.contact.email}</label>
        <input id="email" name="email" type="email" />

        <label htmlFor="message">{t.contact.message}</label>
        <textarea id="message" name="message" rows="7" />

        <button type="submit" className="btn">{t.contact.submit}</button>
      </form>
    </main>
  );
}
