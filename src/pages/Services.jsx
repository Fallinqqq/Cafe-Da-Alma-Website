import { useLanguage } from "../context/LanguageContext";

export default function Services() {
    const { t } = useLanguage();

    return (
        <main>
            <h1>{t.services.title}</h1>
            <ul className="feature-list">
                {t.services.items.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </main>
    );
}
