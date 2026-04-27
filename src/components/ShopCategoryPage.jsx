import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { getShopCategories, getShopCategory } from "../data/siteContent";

const categoryHeroGradients = {
    coffees: "linear-gradient(135deg, #2a1208 0%, #6b3418 50%, #a06030 100%)",
    teas: "linear-gradient(135deg, #0f2008 0%, #2e4e18 50%, #5a7838 100%)",
    pastries: "linear-gradient(135deg, #3a1a02 0%, #7a4010 50%, #b07828 100%)",
    merchandise:
        "linear-gradient(135deg, #1a0c0c 0%, #4a1e1e 50%, #7a4040 100%)",
    "packaged-coffee-tea":
        "linear-gradient(135deg, #1a2208 0%, #3a4e18 50%, #5a6e30 100%)",
};

export default function ShopCategoryPage({ slug }) {
    const { locale, t } = useLanguage();
    const shopCategories = getShopCategories(locale);
    const category = getShopCategory(slug, locale);
    const heroGradient =
        categoryHeroGradients[slug] || categoryHeroGradients.coffees;

    return (
        <main className="cat-page">
            {/* Hero */}
            <div
                className="cat-hero"
                style={{
                    background: `url('/Pattern.png') center/600px repeat, ${heroGradient}`,
                }}
            >
                <div className="cat-hero-inner">
                    <p className="shop-hero-eyebrow">Café Da Alma</p>
                    <h1>{category.title}</h1>
                    <p className="shop-hero-sub">{category.description}</p>
                </div>
            </div>

            {/* Category navigation */}
            <div className="shop-tabs-wrap">
                <div className="shop-tabs">
                    <Link to="/shop" className="shop-tab cat-back-tab">
                        ← {t.shop.backToShop}
                    </Link>
                    {shopCategories
                        .filter(
                            (item) =>
                                item.slug === "merchandise" ||
                                item.slug === "packaged-coffee-tea",
                        )
                        .map((item) => (
                            <Link
                                key={item.slug}
                                to={item.route}
                                className={`shop-tab${item.slug === slug ? " active" : ""}`}
                            >
                                {item.navLabel}
                            </Link>
                        ))}
                </div>
            </div>

            {/* Products */}
            <div className="cat-grid-wrap">
                <div className="product-grid">
                    {category.products.map((product) => (
                        <article
                            className={`product-card ${slug}`}
                            key={product.name}
                        >
                            <div
                                className={`product-thumb ${slug}`}
                                style={
                                    product.image
                                        ? {
                                              backgroundImage: `url('${product.image}')`,
                                              backgroundSize: "cover",
                                              backgroundPosition: "center",
                                          }
                                        : {}
                                }
                            >
                                {!product.image && (
                                    <span>{category.title}</span>
                                )}
                            </div>
                            <div className="product-meta">
                                <h3>{product.name}</h3>
                                <div className="product-meta-row">
                                    <span className="product-price">
                                        {product.price}
                                    </span>
                                    <button
                                        type="button"
                                        className="product-button"
                                    >
                                        {t.shop.cardAction}
                                    </button>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </main>
    );
}
