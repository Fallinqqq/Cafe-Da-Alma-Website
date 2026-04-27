import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { getMenuSections } from "../data/siteContent";

const SECTION_DEFAULT_IMAGES = {
    coffees: '/coffee.jpg',
    teas: '/tea.png',
};

const PASTRY_IMAGES = {
    "Pao de Queijo": "/pao-de-queijo.jpg",
    "Bolo de Fuba": "/bolo-de-fuba.jpg",
    "Pastel de Belem": "/pastel-de-belem.jpg",
    "Pudim Traditional (1)": "/pudim.jpg",
    "Pudim Tradicional (1)": "/pudim.jpg",
    "Brigadeiros (2)": "/briga.jpg",
};

const SECTION_THEME = {
    Coffees: "coffees",
    Cafes: "coffees",
    Teas: "teas",
    Chas: "teas",
    "Pastries & Sweets": "pastries",
    "Doces & Salgados": "pastries",
};

export default function OrderNow() {
    const { locale, t } = useLanguage();
    const navigate = useNavigate();
    const sections = getMenuSections(locale).filter(
        (s) => !["Sizes", "Tamanhos"].includes(s.title),
    );

    const [cart, setCart] = useState([]);

    const qty = (name) => cart.find((c) => c.name === name)?.qty ?? 0;

    const add = (item) =>
        setCart((prev) => {
            const found = prev.find((c) => c.name === item.name);
            if (found)
                return prev.map((c) =>
                    c.name === item.name ? { ...c, qty: c.qty + 1 } : c,
                );
            return [...prev, { ...item, qty: 1 }];
        });

    const remove = (name) =>
        setCart((prev) => {
            const found = prev.find((c) => c.name === name);
            if (!found) return prev;
            if (found.qty === 1) return prev.filter((c) => c.name !== name);
            return prev.map((c) =>
                c.name === name ? { ...c, qty: c.qty - 1 } : c,
            );
        });

    const subtotal = cart.reduce(
        (sum, c) => sum + parseFloat(c.price.replace("$", "")) * c.qty,
        0,
    );
    const totalItems = cart.reduce((sum, c) => sum + c.qty, 0);

    const scrollTo = (id) =>
        document
            .getElementById(id)
            ?.scrollIntoView({ behavior: "smooth", block: "start" });

    return (
        <main className="ordering-page">
            {/* Restaurant header */}
            <div className="ordering-hero">
                <div className="ordering-hero-inner">
                    <p className="ordering-cuisine">{t.order.cuisine}</p>
                    <h1>Café Da Alma</h1>
                    <div className="ordering-meta">
                        <span className="ordering-open-badge">
                            {t.order.openNow}
                        </span>
                        <span>· {t.order.address}</span>
                        <span>· {t.order.hours}</span>
                    </div>
                </div>
            </div>

            {/* Sticky category tabs */}
            <div className="ordering-cat-nav-wrap">
                <div className="ordering-cat-nav">
                    {sections.map((s) => (
                        <button
                            key={s.title}
                            className="ordering-cat-btn"
                            onClick={() => scrollTo(`os-${s.title}`)}
                        >
                            {s.title}
                        </button>
                    ))}
                </div>
            </div>

            {/* Two-column body */}
            <div className="ordering-body">
                {/* Menu */}
                <div className="ordering-menu">
                    {sections.map((section) => {
                        const theme = SECTION_THEME[section.title] || "coffees";
                        return (
                            <div
                                key={section.title}
                                id={`os-${section.title}`}
                                className="ordering-section"
                            >
                                <h2 className="ordering-section-title">
                                    {section.title}
                                </h2>
                                <div className="ordering-items">
                                    {section.items.map((item) => {
                                        const q = qty(item.name);
                                        return (
                                            <div
                                                key={item.name}
                                                className="ordering-item"
                                            >
                                                <div className="ordering-item-info">
                                                    <h3>{item.name}</h3>
                                                    {item.description && (
                                                        <p>
                                                            {item.description}
                                                        </p>
                                                    )}
                                                    <span className="ordering-item-price">
                                                        {item.price}
                                                    </span>
                                                </div>
                                                <div className="ordering-item-right">
                                                    <div
                                                        className={`ordering-item-img ${theme}`}
                                                    >
                                                        {(PASTRY_IMAGES[item.name] || SECTION_DEFAULT_IMAGES[theme]) && (
                                                            <img
                                                                src={PASTRY_IMAGES[item.name] || SECTION_DEFAULT_IMAGES[theme]}
                                                                alt={item.name}
                                                                className="ordering-item-img-photo"
                                                            />
                                                        )}
                                                    </div>
                                                    <div className="ordering-item-controls">
                                                        {q > 0 && (
                                                            <>
                                                                <button
                                                                    className="ordering-qty-btn"
                                                                    onClick={() =>
                                                                        remove(
                                                                            item.name,
                                                                        )
                                                                    }
                                                                >
                                                                    −
                                                                </button>
                                                                <span className="ordering-qty">
                                                                    {q}
                                                                </span>
                                                            </>
                                                        )}
                                                        <button
                                                            className="ordering-add-btn"
                                                            onClick={() =>
                                                                add(item)
                                                            }
                                                        >
                                                            +
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Cart */}
                <aside className="ordering-cart">
                    <div className="ordering-cart-inner">
                        <h2 className="ordering-cart-title">
                            {t.order.cartTitle}
                            {totalItems > 0 && (
                                <span className="ordering-cart-count">
                                    {totalItems}
                                </span>
                            )}
                        </h2>

                        {cart.length === 0 ? (
                            <p className="ordering-cart-empty">
                                {t.order.cartEmpty}
                            </p>
                        ) : (
                            <>
                                <ul className="ordering-cart-list">
                                    {cart.map((item) => (
                                        <li
                                            key={item.name}
                                            className="ordering-cart-item"
                                        >
                                            <div className="ordering-cart-controls">
                                                <button
                                                    className="ordering-qty-btn sm"
                                                    onClick={() =>
                                                        remove(item.name)
                                                    }
                                                >
                                                    −
                                                </button>
                                                <span className="ordering-qty">
                                                    {item.qty}
                                                </span>
                                                <button
                                                    className="ordering-qty-btn sm"
                                                    onClick={() => add(item)}
                                                >
                                                    +
                                                </button>
                                            </div>
                                            <span className="ordering-cart-name">
                                                {item.name}
                                            </span>
                                            <span className="ordering-cart-price">
                                                $
                                                {(
                                                    parseFloat(
                                                        item.price.replace(
                                                            "$",
                                                            "",
                                                        ),
                                                    ) * item.qty
                                                ).toFixed(2)}
                                            </span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="ordering-subtotal-row">
                                    <span>{t.order.subtotal}</span>
                                    <span>${subtotal.toFixed(2)}</span>
                                </div>

                                <button
                                    className="ordering-checkout-btn"
                                    onClick={() =>
                                        navigate("/checkout", {
                                            state: { cart },
                                        })
                                    }
                                >
                                    {t.order.placeOrder} · $
                                    {subtotal.toFixed(2)}
                                </button>
                            </>
                        )}
                    </div>
                </aside>
            </div>
        </main>
    );
}
