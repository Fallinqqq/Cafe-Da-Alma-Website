import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

const featuredCoffees = [
    { name: "Bourbon Santos", image: "/bourbon santos.jpg", price: "$15" },
    { name: "Espírito Forte", image: "/espirito forte.jpg", price: "$15" },
    { name: "Luz do Dia", image: "/Luz do dia.jpg", price: "$15" },
];

export default function Home() {
    const { t } = useLanguage();

    return (
        <main className="home-page">
            {/* ── Hero ── */}
            <section className="home-hero-banner">
                <video autoPlay muted loop playsInline>
                    <source
                        src="/8855729-hd_1920_1080_25fps.mp4"
                        type="video/mp4"
                    />
                </video>
                <div className="hero-overlay" />
                <div className="hero-content">
                    <p className="hero-eyebrow">{t.home.eyebrow}</p>
                    <h1>{t.home.banner}</h1>
                    <div className="hero-ctas">
                        <Link to="/order" className="hero-btn-primary">
                            {t.home.splitCta}
                        </Link>
                        <Link to="/menu" className="hero-btn-secondary">
                            {t.home.exploreMenu}
                        </Link>
                    </div>
                </div>
            </section>

            {/* ── Marquee ── */}
            <div className="home-marquee" aria-hidden="true">
                <div className="home-marquee-track">
                    {[...t.home.marqueeItems, ...t.home.marqueeItems].map(
                        (item, i) => (
                            <span key={i}>
                                {item} <span className="marquee-dot">·</span>
                            </span>
                        ),
                    )}
                </div>
            </div>

            {/* ── Craft banner ── */}
            <section className="home-craft-banner">
                <div className="home-craft-overlay" />
                <div className="home-craft-content">
                    <p className="home-about-eyebrow">{t.home.craftTitle}</p>
                    <h2>{t.home.craftHeading}</h2>
                    <p>{t.home.craftBody}</p>
                    <Link to="/order" className="hero-btn-primary">
                        {t.home.craftCta}
                    </Link>
                </div>
            </section>

            {/* ── Shop by featured ── */}
            <section className="home-categories">
                <div className="home-categories-inner">
                    <h2 className="home-section-label">
                        {t.home.shopFeaturedLabel}
                    </h2>
                    <div className="home-featured-grid">
                        {featuredCoffees.map((coffee) => (
                            <div
                                key={coffee.name}
                                className="home-featured-item"
                            >
                                <Link
                                    to="/order"
                                    className="home-featured-card"
                                >
                                    <img
                                        src={coffee.image}
                                        alt={coffee.name}
                                        className="home-featured-img"
                                    />
                                    <div className="home-featured-label">
                                        <span>{coffee.name}</span>
                                    </div>
                                </Link>
                                <Link to="/order" className="home-featured-btn">
                                    {t.home.shopNow} &nbsp;|&nbsp;{" "}
                                    {coffee.price}
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── About ── */}
            <section id="about" className="home-about">
                <div className="home-about-visual" />
                <div className="home-about-text">
                    <p className="home-about-eyebrow">{t.home.storyTitle}</p>
                    <h2>{t.home.storyHeading}</h2>
                    <p>{t.home.storyBody1}</p>
                    <p>{t.home.storyBody2}</p>
                </div>
            </section>
        </main>
    );
}
