import { useState, useEffect } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { getLocations } from "../data/siteContent";

function generateOrderRef() {
    return "CDA-" + Math.random().toString(36).substring(2, 8).toUpperCase();
}

export default function Checkout() {
    const { locale, t } = useLanguage();
    const c = t.checkout;
    const location = useLocation();
    const navigate = useNavigate();
    const locations = getLocations(locale);

    const cart = location.state?.cart ?? [];
    const subtotal = cart.reduce(
        (sum, item) => sum + parseFloat(item.price.replace("$", "")) * item.qty,
        0,
    );
    const tax = subtotal * 0.08;
    const total = subtotal + tax;

    const [fulfillment, setFulfillment] = useState("pickup");
    const [pickupLocation, setPickupLocation] = useState(0);
    const [deliveryAddress, setDeliveryAddress] = useState({
        street: "",
        street2: "",
        city: "",
        zip: "",
    });
    const [form, setForm] = useState({ name: "", email: "", phone: "" });
    const [payment, setPayment] = useState({ card: "", expiry: "", cvv: "" });
    const [confirmed, setConfirmed] = useState(false);
    const [orderRef] = useState(generateOrderRef);

    useEffect(() => {
        document.body.classList.add("checkout-bg");
        return () => document.body.classList.remove("checkout-bg");
    }, []);

    const handleConfirm = (e) => {
        e.preventDefault();
        setConfirmed(true);
    };

    if (cart.length === 0 && !confirmed) {
        return (
            <main className="checkout-page">
                <div className="checkout-empty">
                    <p>{c.emptyCart}</p>
                    <Link to="/order" className="checkout-back-btn">
                        {c.backToOrder}
                    </Link>
                </div>
            </main>
        );
    }

    if (confirmed) {
        const estimate =
            fulfillment === "pickup" ? c.pickupEstimate : c.deliveryEstimate;
        return (
            <main className="checkout-page">
                <div className="checkout-success">
                    <div className="checkout-success-icon">
                        <svg viewBox="0 0 52 52" fill="none" aria-hidden="true">
                            <circle
                                cx="26"
                                cy="26"
                                r="25"
                                stroke="currentColor"
                                strokeWidth="2"
                            />
                            <path
                                d="M14 27l9 9 15-18"
                                stroke="currentColor"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>
                    <h1>{c.successTitle}</h1>
                    <p className="checkout-success-body">
                        {c.successBody} <strong>{estimate}</strong>
                    </p>
                    {fulfillment === "pickup" && (
                        <p className="checkout-success-ref">
                            {locations[pickupLocation].name} —{" "}
                            {locations[pickupLocation].addressLines.join(" ")}
                        </p>
                    )}
                    {fulfillment === "delivery" && deliveryAddress.street && (
                        <p className="checkout-success-ref">
                            {[
                                deliveryAddress.street,
                                deliveryAddress.street2,
                                deliveryAddress.city,
                                deliveryAddress.zip,
                            ]
                                .filter(Boolean)
                                .join(", ")}
                        </p>
                    )}
                    <p className="checkout-success-ref">
                        {c.successRef}: <strong>{orderRef}</strong>
                    </p>
                    <div className="checkout-success-summary">
                        {cart.map((item) => (
                            <div
                                key={item.name}
                                className="checkout-success-item"
                            >
                                <span>
                                    {item.qty}× {item.name}
                                </span>
                                <span>
                                    $
                                    {(
                                        parseFloat(
                                            item.price.replace("$", ""),
                                        ) * item.qty
                                    ).toFixed(2)}
                                </span>
                            </div>
                        ))}
                        <div className="checkout-success-total">
                            <span>{c.total}</span>
                            <span>${total.toFixed(2)}</span>
                        </div>
                    </div>
                    <Link to="/" className="checkout-back-btn">
                        {c.backToHome}
                    </Link>
                </div>
            </main>
        );
    }

    return (
        <main className="checkout-page">
            <div className="checkout-inner">
                <h1 className="checkout-heading">{c.title}</h1>
                <div className="checkout-layout">
                    {/* Order summary */}
                    <aside className="checkout-summary">
                        <h2 className="checkout-section-title">
                            {c.orderSummary}
                        </h2>
                        <ul className="checkout-summary-list">
                            {cart.map((item) => (
                                <li
                                    key={item.name}
                                    className="checkout-summary-item"
                                >
                                    <span className="checkout-summary-qty">
                                        {item.qty}×
                                    </span>
                                    <span className="checkout-summary-name">
                                        {item.name}
                                    </span>
                                    <span className="checkout-summary-price">
                                        $
                                        {(
                                            parseFloat(
                                                item.price.replace("$", ""),
                                            ) * item.qty
                                        ).toFixed(2)}
                                    </span>
                                </li>
                            ))}
                        </ul>
                        <div className="checkout-totals">
                            <div className="checkout-totals-row">
                                <span>{t.order.subtotal}</span>
                                <span>${subtotal.toFixed(2)}</span>
                            </div>
                            <div className="checkout-totals-row">
                                <span>{c.tax}</span>
                                <span>${tax.toFixed(2)}</span>
                            </div>
                            <div className="checkout-totals-row total">
                                <span>{c.total}</span>
                                <span>${total.toFixed(2)}</span>
                            </div>
                        </div>
                        <Link to="/order" className="checkout-edit-link">
                            ← {c.backToOrder}
                        </Link>
                    </aside>

                    {/* Checkout form */}
                    <form className="checkout-form" onSubmit={handleConfirm}>
                        {/* Fulfillment */}
                        <section className="checkout-section">
                            <h2 className="checkout-section-title">
                                {c.fulfillmentTitle}
                            </h2>
                            <div className="checkout-radio-group">
                                <label
                                    className={`checkout-radio-option${fulfillment === "pickup" ? " selected" : ""}`}
                                >
                                    <input
                                        type="radio"
                                        name="fulfillment"
                                        value="pickup"
                                        checked={fulfillment === "pickup"}
                                        onChange={() =>
                                            setFulfillment("pickup")
                                        }
                                    />
                                    <div>
                                        <strong>{c.pickup}</strong>
                                        <span>{c.pickupDetail}</span>
                                    </div>
                                </label>
                                <label
                                    className={`checkout-radio-option${fulfillment === "delivery" ? " selected" : ""}`}
                                >
                                    <input
                                        type="radio"
                                        name="fulfillment"
                                        value="delivery"
                                        checked={fulfillment === "delivery"}
                                        onChange={() =>
                                            setFulfillment("delivery")
                                        }
                                    />
                                    <div>
                                        <strong>{c.delivery}</strong>
                                        <span>{c.deliveryDetail}</span>
                                    </div>
                                </label>
                            </div>
                            {fulfillment === "pickup" && (
                                <div className="checkout-location-picker">
                                    <p className="checkout-location-label">
                                        {c.pickupLocationTitle}
                                    </p>
                                    <div className="checkout-location-options">
                                        {locations.map((loc, i) => (
                                            <label
                                                key={loc.name}
                                                className={`checkout-location-card${pickupLocation === i ? " selected" : ""}`}
                                            >
                                                <input
                                                    type="radio"
                                                    name="pickupLocation"
                                                    value={i}
                                                    checked={
                                                        pickupLocation === i
                                                    }
                                                    onChange={() =>
                                                        setPickupLocation(i)
                                                    }
                                                />
                                                <strong>{loc.name}</strong>
                                                <span>
                                                    {loc.addressLines.join(
                                                        ", ",
                                                    )}
                                                </span>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            )}
                            {fulfillment === "delivery" && (
                                <div className="checkout-location-picker">
                                    <p className="checkout-location-label">
                                        {c.deliveryAddressTitle}
                                    </p>
                                    <div className="checkout-field">
                                        <input
                                            type="text"
                                            placeholder={c.addressPlaceholder}
                                            value={deliveryAddress.street}
                                            onChange={(e) =>
                                                setDeliveryAddress({
                                                    ...deliveryAddress,
                                                    street: e.target.value,
                                                })
                                            }
                                            required
                                            autoComplete="street-address"
                                        />
                                    </div>
                                    <div className="checkout-field">
                                        <input
                                            type="text"
                                            placeholder={c.address2Placeholder}
                                            value={deliveryAddress.street2}
                                            onChange={(e) =>
                                                setDeliveryAddress({
                                                    ...deliveryAddress,
                                                    street2: e.target.value,
                                                })
                                            }
                                            autoComplete="address-line2"
                                        />
                                    </div>
                                    <div className="checkout-card-row">
                                        <div className="checkout-field">
                                            <input
                                                type="text"
                                                placeholder={c.cityPlaceholder}
                                                value={deliveryAddress.city}
                                                onChange={(e) =>
                                                    setDeliveryAddress({
                                                        ...deliveryAddress,
                                                        city: e.target.value,
                                                    })
                                                }
                                                required
                                                autoComplete="address-level2"
                                            />
                                        </div>
                                        <div className="checkout-field">
                                            <input
                                                type="text"
                                                placeholder={c.zipPlaceholder}
                                                value={deliveryAddress.zip}
                                                onChange={(e) =>
                                                    setDeliveryAddress({
                                                        ...deliveryAddress,
                                                        zip: e.target.value,
                                                    })
                                                }
                                                required
                                                autoComplete="postal-code"
                                            />
                                        </div>
                                    </div>
                                </div>
                            )}
                        </section>

                        {/* Contact */}
                        <section className="checkout-section">
                            <h2 className="checkout-section-title">
                                {c.contactTitle}
                            </h2>
                            <div className="checkout-field">
                                <input
                                    type="text"
                                    placeholder={c.namePlaceholder}
                                    value={form.name}
                                    onChange={(e) =>
                                        setForm({
                                            ...form,
                                            name: e.target.value,
                                        })
                                    }
                                    required
                                    autoComplete="name"
                                />
                            </div>
                            <div className="checkout-field">
                                <input
                                    type="email"
                                    placeholder={c.emailPlaceholder}
                                    value={form.email}
                                    onChange={(e) =>
                                        setForm({
                                            ...form,
                                            email: e.target.value,
                                        })
                                    }
                                    required
                                    autoComplete="email"
                                />
                            </div>
                            <div className="checkout-field">
                                <input
                                    type="tel"
                                    placeholder={c.phonePlaceholder}
                                    value={form.phone}
                                    onChange={(e) =>
                                        setForm({
                                            ...form,
                                            phone: e.target.value,
                                        })
                                    }
                                    required
                                    autoComplete="tel"
                                />
                            </div>
                        </section>

                        {/* Payment */}
                        <section className="checkout-section">
                            <h2 className="checkout-section-title">
                                {c.paymentTitle}
                            </h2>
                            <div className="checkout-mock-notice">
                                {c.mockNotice}
                            </div>
                            <div className="checkout-field">
                                <input
                                    type="text"
                                    placeholder={c.cardPlaceholder}
                                    value={payment.card}
                                    onChange={(e) =>
                                        setPayment({
                                            ...payment,
                                            card: e.target.value,
                                        })
                                    }
                                    required
                                    maxLength={19}
                                    autoComplete="cc-number"
                                />
                            </div>
                            <div className="checkout-card-row">
                                <div className="checkout-field">
                                    <input
                                        type="text"
                                        placeholder={c.expiryPlaceholder}
                                        value={payment.expiry}
                                        onChange={(e) =>
                                            setPayment({
                                                ...payment,
                                                expiry: e.target.value,
                                            })
                                        }
                                        required
                                        maxLength={7}
                                        autoComplete="cc-exp"
                                    />
                                </div>
                                <div className="checkout-field">
                                    <input
                                        type="text"
                                        placeholder={c.cvvPlaceholder}
                                        value={payment.cvv}
                                        onChange={(e) =>
                                            setPayment({
                                                ...payment,
                                                cvv: e.target.value,
                                            })
                                        }
                                        required
                                        maxLength={4}
                                        autoComplete="cc-csc"
                                    />
                                </div>
                            </div>
                        </section>

                        <button type="submit" className="checkout-confirm-btn">
                            {c.confirmOrder} · ${total.toFixed(2)}
                        </button>
                    </form>
                </div>
            </div>
        </main>
    );
}
