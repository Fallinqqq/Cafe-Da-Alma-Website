import { useLanguage } from "../context/LanguageContext";
import { getLocations } from "../data/siteContent";

export default function Locations() {
    const { locale, t } = useLanguage();
    const locations = getLocations(locale);

    return (
        <main className="locations-page">
            <div className="shop-hero">
                <h1>{t.locations.title}</h1>
            </div>
            <div className="locations-cards-wrap">
                <div className="location-cards location-showcase">
                    {locations.map((loc) => (
                        <div className="location-card" key={loc.name}>
                            <div className="location-map-wrap">
                                <iframe
                                    className="location-map"
                                    src={loc.mapSrc}
                                    title={`${loc.name} ${t.locations.mapLabel}`}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                            </div>
                            <div className="location-address-block">
                                {loc.addressLines.map((line) => (
                                    <p key={line}>{line}</p>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
