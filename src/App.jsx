import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { LanguageProvider } from "./context/LanguageContext";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Shop from "./pages/Shop";
import Teas from "./pages/Teas";
import Coffees from "./pages/Coffees";
import Pastries from "./pages/Pastries";
import Merchandise from "./pages/Merchandise";
import PackagedCoffeeTea from "./pages/PackagedCoffeeTea";
import Locations from "./pages/Locations";
import OrderNow from "./pages/OrderNow";
import Checkout from "./pages/Checkout";
import Contact from "./pages/Contact";

export default function App() {
    return (
        <LanguageProvider>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/menu" element={<Menu />} />
                    <Route path="/shop" element={<Shop />} />
                    <Route path="/shop/teas" element={<Teas />} />
                    <Route path="/shop/coffees" element={<Coffees />} />
                    <Route path="/shop/pastries" element={<Pastries />} />
                    <Route path="/shop/merchandise" element={<Merchandise />} />
                    <Route
                        path="/shop/packaged-coffee-tea"
                        element={<PackagedCoffeeTea />}
                    />
                    <Route path="/locations" element={<Locations />} />
                    <Route path="/order" element={<OrderNow />} />
                    <Route path="/checkout" element={<Checkout />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </LanguageProvider>
    );
}
