import { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

const allLinks = [
    { to: "/menu", key: "menu" },
    { to: "/shop", key: "shop" },
    { to: "/locations", key: "locations" },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [langOpen, setLangOpen] = useState(false);
    const [logoError, setLogoError] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { locale, setLocale, t } = useLanguage();
    const langRef = useRef(null);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const close = () => setOpen(false);

    const linkClass = ({ isActive }, to) => {
        const cls = ["nav-link"];
        if (isActive && to !== "/menu") cls.push("active");
        return cls.join(" ");
    };

    // Close dropdown on outside click
    useEffect(() => {
        const handler = (e) => {
            if (langRef.current && !langRef.current.contains(e.target)) {
                setLangOpen(false);
            }
        };
        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    }, []);

    return (
        <header>
            {/* Announcement bar */}
            <div
                className={`nav-announce${scrolled ? " nav-announce--hidden" : ""}`}
            >
                <span>
                    Brazilian soul, neighborhood pace — now serving Lynchburg
                    &amp; São Paulo
                </span>
            </div>

            <nav>
                {/* Logo - left */}
                <NavLink to="/" className="logo" onClick={close}>
                    {!logoError ? (
                        <img
                            src="/new-logo.png"
                            alt="Café Da Alma"
                            className="logo-img"
                            onError={() => setLogoError(true)}
                        />
                    ) : (
                        <>
                            Cafe <span>Da Alma</span>
                        </>
                    )}
                </NavLink>

                {/* All links + CTA - right */}
                <ul className="nav-group nav-right">
                    {allLinks.map(({ to, key }) => (
                        <li key={to}>
                            <NavLink
                                to={to}
                                className={(p) => linkClass(p, to)}
                                onClick={close}
                            >
                                {t.nav[key]}
                            </NavLink>
                        </li>
                    ))}
                    <li className="nav-order-item">
                        <NavLink
                            to="/order"
                            className="order-link"
                            onClick={close}
                        >
                            {t.nav.order}
                        </NavLink>
                    </li>
                    <li className="nav-lang-item" ref={langRef}>
                        <button
                            type="button"
                            className="lang-globe-btn"
                            onClick={() => setLangOpen((o) => !o)}
                            aria-label="Select language"
                            aria-expanded={langOpen}
                        >
                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.8"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                width="18"
                                height="18"
                                aria-hidden="true"
                            >
                                <circle cx="12" cy="12" r="10" />
                                <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                            </svg>
                            <span className="lang-globe-current">
                                {locale === "pt" ? "PT-BR" : "EN"}
                            </span>
                        </button>
                        {langOpen && (
                            <ul className="lang-dropdown" role="menu">
                                <li role="menuitem">
                                    <button
                                        type="button"
                                        className={`lang-option${locale === "en" ? " active" : ""}`}
                                        onClick={() => {
                                            setLocale("en");
                                            setLangOpen(false);
                                        }}
                                    >
                                        EN — English
                                    </button>
                                </li>
                                <li role="menuitem">
                                    <button
                                        type="button"
                                        className={`lang-option${locale === "pt" ? " active" : ""}`}
                                        onClick={() => {
                                            setLocale("pt");
                                            setLangOpen(false);
                                        }}
                                    >
                                        PT-BR — Português
                                    </button>
                                </li>
                            </ul>
                        )}
                    </li>
                </ul>

                {/* Mobile hamburger */}
                <button
                    className="nav-toggle"
                    onClick={() => setOpen((o) => !o)}
                    aria-label={t.nav.toggleOpen}
                    aria-expanded={open}
                >
                    {open ? "✕" : "☰"}
                </button>
            </nav>

            {/* Mobile drawer */}
            {open && (
                <ul className="nav-mobile">
                    {allLinks.map(({ to, key }) => (
                        <li key={to}>
                            <NavLink
                                to={to}
                                className={(p) => linkClass(p, to)}
                                onClick={close}
                            >
                                {t.nav[key]}
                            </NavLink>
                        </li>
                    ))}
                    <li>
                        <NavLink
                            to="/order"
                            className="order-link"
                            onClick={close}
                        >
                            {t.nav.order}
                        </NavLink>
                    </li>
                    <li className="nav-mobile-lang">
                        <button
                            type="button"
                            className={`lang-option-mobile${locale === "en" ? " active" : ""}`}
                            onClick={() => {
                                setLocale("en");
                                close();
                            }}
                        >
                            EN — English
                        </button>
                        <button
                            type="button"
                            className={`lang-option-mobile${locale === "pt" ? " active" : ""}`}
                            onClick={() => {
                                setLocale("pt");
                                close();
                            }}
                        >
                            PT-BR — Português
                        </button>
                    </li>
                </ul>
            )}
        </header>
    );
}
