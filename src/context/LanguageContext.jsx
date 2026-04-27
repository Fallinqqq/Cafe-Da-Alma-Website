import { createContext, useContext, useEffect, useMemo, useState } from "react";

const translations = {
    en: {
        nav: {
            menu: "Menu",
            shop: "Shop",
            locations: "Locations",
            contact: "Contact",
            order: "Order Online",
            toggleOpen: "Toggle navigation",
            language: "PT-BR",
        },
        home: {
            title: "Welcome to Café Da Alma",
            description:
                "Specialty coffee, artisan pastries, and a warm community atmosphere - all in one place.",
            cta: "View Our Menu",
            banner: "Discover where moments slow and cups are warm at Café Da Alma.",
            featuredTitle: "Featured Menu Items",
            featuredItems: ["Erva Mate", "Mogiana Latte", "Pao de Queijo"],
            exploreMenu: "Explore Our Menu",
            stripTop: "Brazilian soul, neighborhood pace.",
            splitTitle: "From first sip to last crumb, we keep it handcrafted.",
            splitBody:
                "Every drink is brewed to order and paired with pastries inspired by classic Brazilian cafe traditions.",
            splitCta: "Order Online",
            highlightsTitle: "Why guests keep coming back",
            highlights: [
                "Single-origin Brazilian coffee",
                "Fresh pastries baked daily",
                "Fast pickup and local delivery",
            ],
            stripBottom: "Made with warmth. Served with intention.",
            socialHandle: "@cafedaalma",
            socialTagline: "Tag us in your favorite Café Da Alma moment.",
            eyebrow: "Café Da Alma Coffee & Tea Co.",
            craftTitle: "Our Craft",
            craftHeading: "Roasted with Purpose, Brewed with Care",
            craftBody:
                "Every bean traces back to the sun-soaked highlands of Brazil. We work with small-batch roasters who share our obsession with quality — from the farm to your cup.",
            craftCta: "Order Now",
            shopFeaturedLabel: "Shop by Featured",
            shopNow: "Shop Now",
            storyTitle: "Our Story",
            storyHeading: "Where Brazilian Soul Meets Neighborhood Warmth",
            storyBody1:
                'Café Da Alma — meaning "Café of the Soul" — was born from a love of Brazilian coffee culture and the belief that a great cup of coffee should slow you down, not speed you up. We source bold Brazilian roasts, brew handcrafted teas, and bake fresh pastries every morning for our neighbors in Lynchburg, VA and São Paulo, Brazil.',
            storyBody2:
                "Every drink, every bite, every visit is made with intention. We are not just a cafe — we are a place where moments stretch a little longer and the cups are always warm.",
            marqueeItems: [
                "Brazilian Soul",
                "Neighborhood Pace",
                "Handcrafted Daily",
                "Specialty Coffee & Tea",
                "Fresh Pastries",
                "Lynchburg & São Paulo",
            ],
        },
        menu: {
            title: "Menu",
            intro: "Crafted drinks and Brazilian favorites, served all day.",
            itemsLabel: "items",
        },
        locations: {
            title: "Locations",
            mapLabel: "map",
            intro: "Find us in Lynchburg, VA and São Paulo, Brazil — two cities, one soul.",
        },
        order: {
            title: "Order Now",
            description:
                "Order your favorites in minutes with flexible pickup and local delivery.",
            badge: "Fast, fresh, and handcrafted",
            startOrder: "Start Your Order",
            browseMenu: "Browse Full Menu",
            optionsTitle: "Choose how you want your order",
            options: [
                {
                    title: "Pickup",
                    detail: "Ready in 15-20 minutes",
                    note: "Best for quick coffee runs and pastry stops.",
                },
                {
                    title: "Delivery",
                    detail: "Arrives in about 30-40 minutes",
                    note: "Local delivery available within select neighborhoods.",
                },
            ],
            stepsTitle: "How online ordering works",
            steps: [
                "Pick your drinks, pastries, and bundles.",
                "Choose pickup or delivery and set your time.",
                "Confirm your order and we will start preparing it fresh.",
            ],
            bundlesTitle: "Popular order bundles",
            bundles: [
                {
                    name: "Morning Reset",
                    includes: "Mogiana Latte + Pao de Queijo",
                    price: "$7.00",
                },
                {
                    name: "Afternoon Sweet Break",
                    includes: "Cha Misto + Brigadeiros (2)",
                    price: "$8.00",
                },
                {
                    name: "Café Da Alma Pairing",
                    includes: "Brazilian Cold Brew + Pastel de Belem",
                    price: "$8.00",
                },
            ],
            bundleAction: "Add Bundle",
            supportTitle: "Need a larger order?",
            supportBody:
                "For group orders, office coffee drops, or events, our team can help you plan ahead.",
            supportAction: "Contact the Cafe Team",
            features: [
                "Online ordering with pickup scheduling",
                "Local delivery in 30 minutes",
                "Custom blend requests",
            ],
            cuisine: "Brazilian Coffee & Tea · Lynchburg, VA",
            openNow: "Open Now",
            address: "2307 Main St, Lynchburg VA",
            hours: "Mon–Sat 7am–7pm",
            cartTitle: "Your Order",
            cartEmpty: "Add items from the menu to get started",
            subtotal: "Subtotal",
            placeOrder: "Place Order",
        },
        checkout: {
            title: "Checkout",
            orderSummary: "Order Summary",
            fulfillmentTitle: "How would you like your order?",
            pickup: "Pickup",
            pickupDetail: "Ready in 15–20 min",
            pickupLocationTitle: "Choose a pickup location",
            delivery: "Delivery",
            deliveryDetail: "Arrives in 30–40 min",
            contactTitle: "Contact Details",
            namePlaceholder: "Full Name",
            emailPlaceholder: "Email Address",
            phonePlaceholder: "Phone Number",
            paymentTitle: "Payment",
            mockNotice: "Demo only — no real payment is processed.",
            cardNumber: "Card Number",
            cardPlaceholder: "1234 5678 9012 3456",
            expiry: "Expiry",
            expiryPlaceholder: "MM / YY",
            cvv: "CVV",
            cvvPlaceholder: "123",
            tax: "Estimated Tax (8%)",
            total: "Total",
            confirmOrder: "Confirm Order",
            emptyCart: "Your cart is empty.",
            backToOrder: "Back to Order",
            successTitle: "Order Placed!",
            successBody: "Your order is being prepared. Estimated time:",
            pickupEstimate: "15–20 min",
            deliveryEstimate: "30–40 min",
            successRef: "Order Reference",
            backToHome: "Back to Home",
        },
        contact: {
            title: "Contact Us",
            name: "First & Last Name",
            namePlaceholder: "Jane Doe",
            email: "Email",
            emailPlaceholder: "jane@example.com",
            message: "Message",
            messagePlaceholder: "Tell us how we can help...",
            helpText:
                "Questions about catering, events, or custom orders? We usually reply within one business day.",
            submit: "Submit",
        },
        shop: {
            title: "Shop",
            intro: "Browse signature drinks, pastries, merch, and packaged favorites from Café Da Alma.",
            viewAll: "View all",
            backToShop: "Back to Shop",
            addToCart: "Add to Cart",
            popularTag: "Popular",
            cardAction: "Details & Pickup",
        },
        services: {
            title: "Our Services",
            items: [
                "Specialty coffee brewing",
                "Pastry and dessert pairing",
                "Private events and catering",
                "Weekend live music and community events",
            ],
        },
        footer: {
            nav: {
                about: "About Café Da Alma",
                contact: "Contact",
            },
            newsTitle: "Get the freshest Café Da Alma news",
            emailPlaceholder: "Your email here",
            subscribe: "Subscribe",
            terms: "Terms & Conditions",
            privacy: "Privacy Policy",
            transparency: "Supply Chain Transparency",
            copyright: "©2026 Café Da Alma, LLC. All Rights Reserved.",
        },
    },
    pt: {
        nav: {
            menu: "Cardapio",
            shop: "Loja",
            locations: "Locais",
            contact: "Contato",
            order: "Pedir Online",
            toggleOpen: "Abrir navegacao",
            language: "EN",
        },
        home: {
            title: "Bem-vindo ao Café Da Alma",
            description:
                "Cafe especial, doces artesanais e um ambiente acolhedor em um so lugar.",
            cta: "Ver Cardapio",
            banner: "Descubra onde os momentos desaceleram e as xicaras estao sempre quentes na Café Da Alma.",
            featuredTitle: "Itens em Destaque do Cardapio",
            featuredItems: ["Erva Mate", "Mogiana Latte", "Pao de Queijo"],
            exploreMenu: "Explorar Cardapio",
            stripTop: "Alma brasileira, ritmo de vizinhanca.",
            splitTitle: "Do primeiro gole a ultima mordida, tudo e artesanal.",
            splitBody:
                "Cada bebida e preparada na hora e combinada com doces inspirados nas tradicoes dos cafes brasileiros.",
            splitCta: "Pedir Online",
            highlightsTitle: "Por que os clientes sempre voltam",
            highlights: [
                "Cafe brasileiro de origem unica",
                "Doces frescos preparados todos os dias",
                "Retirada rapida e entrega local",
            ],
            stripBottom: "Feito com carinho. Servido com intencao.",
            socialHandle: "@cafedaalma",
            socialTagline:
                "Marque a gente no seu momento favorito na Café Da Alma.",
            eyebrow: "Café Da Alma Cafe & Cha",
            craftTitle: "Nosso Artesanato",
            craftHeading: "Torrado com Proposito, Preparado com Cuidado",
            craftBody:
                "Do Brasil direto ao seu copo — trabalhamos com torrefadores artesanais obcecados por qualidade.",
            craftCta: "Pedir Agora",
            shopFeaturedLabel: "Explorar Destaques",
            shopNow: "Comprar",
            storyTitle: "Nossa Historia",
            storyHeading: "Alma Brasileira, Calor de Vizinhanca",
            storyBody1:
                "Nascemos do amor pelo cafe brasileiro e da crenca de que uma boa xicara deve te fazer desacelerar. Torras marcantes, chas artesanais e doces frescos — todo dia, em Lynchburg e Sao Paulo.",
            storyBody2:
                "Cada visita e feita com intencao. Somos o lugar onde os momentos duram mais e as xicaras estao sempre quentinhas.",
            marqueeItems: [
                "Alma Brasileira",
                "Ritmo de Vizinhanca",
                "Feito a Mao",
                "Cafe & Cha Especial",
                "Doces Frescos",
                "Lynchburg & Sao Paulo",
            ],
        },
        menu: {
            title: "Cardapio",
            intro: "Bebidas preparadas com cuidado e favoritos brasileiros servidos o dia todo.",
            itemsLabel: "itens",
        },
        locations: {
            title: "Locais",
            mapLabel: "mapa",
            intro: "Nos encontre em Lynchburg, VA e São Paulo, Brasil — duas cidades, uma alma.",
        },
        order: {
            title: "Peca Agora",
            description:
                "Peca seus favoritos em poucos minutos com retirada flexivel e entrega local.",
            badge: "Rapido, fresco e artesanal",
            startOrder: "Fazer Pedido",
            browseMenu: "Ver Cardapio Completo",
            optionsTitle: "Escolha como voce quer receber seu pedido",
            options: [
                {
                    title: "Retirada",
                    detail: "Pronto em 15-20 minutos",
                    note: "Ideal para uma parada rapida de cafe e doces.",
                },
                {
                    title: "Entrega",
                    detail: "Chega em cerca de 30-40 minutos",
                    note: "Entrega local disponivel em bairros selecionados.",
                },
            ],
            stepsTitle: "Como funciona o pedido online",
            steps: [
                "Escolha suas bebidas, doces e combos.",
                "Selecione retirada ou entrega e defina o horario.",
                "Confirme o pedido e comecamos a preparar tudo na hora.",
            ],
            bundlesTitle: "Combos mais pedidos",
            bundles: [
                {
                    name: "Reset da Manha",
                    includes: "Mogiana Latte + Pao de Queijo",
                    price: "$7.00",
                },
                {
                    name: "Pausa Doce da Tarde",
                    includes: "Cha Misto + Brigadeiros (2)",
                    price: "$8.00",
                },
                {
                    name: "Combinacao Café Da Alma",
                    includes: "Cold Brew Brasileiro + Pastel de Belem",
                    price: "$8.00",
                },
            ],
            bundleAction: "Adicionar Combo",
            supportTitle: "Precisa de um pedido maior?",
            supportBody:
                "Para pedidos em grupo, escritorio ou eventos, nossa equipe ajuda voce a organizar tudo com antecedencia.",
            supportAction: "Falar com a Equipe",
            features: [
                "Pedidos online com agendamento para retirada",
                "Entrega local em 30 minutos",
                "Pedidos personalizados de blends",
            ],
            cuisine: "Cafe & Cha Brasileiro · Lynchburg, VA",
            openNow: "Aberto Agora",
            address: "2307 Main St, Lynchburg VA",
            hours: "Seg–Sab 7h–19h",
            cartTitle: "Seu Pedido",
            cartEmpty: "Adicione itens do cardapio para comecar",
            subtotal: "Subtotal",
            placeOrder: "Fazer Pedido",
        },
        checkout: {
            title: "Finalizar Pedido",
            orderSummary: "Resumo do Pedido",
            fulfillmentTitle: "Como voce quer receber seu pedido?",
            pickup: "Retirada",
            pickupDetail: "Pronto em 15–20 min",
            pickupLocationTitle: "Escolha o local de retirada",
            delivery: "Entrega",
            deliveryDetail: "Chega em 30–40 min",
            contactTitle: "Dados de Contato",
            namePlaceholder: "Nome Completo",
            emailPlaceholder: "Endereco de Email",
            phonePlaceholder: "Numero de Telefone",
            paymentTitle: "Pagamento",
            mockNotice: "Apenas demonstracao — nenhum pagamento real e processado.",
            cardNumber: "Numero do Cartao",
            cardPlaceholder: "1234 5678 9012 3456",
            expiry: "Validade",
            expiryPlaceholder: "MM / AA",
            cvv: "CVV",
            cvvPlaceholder: "123",
            tax: "Estimativa de Taxa (8%)",
            total: "Total",
            confirmOrder: "Confirmar Pedido",
            emptyCart: "Seu carrinho esta vazio.",
            backToOrder: "Voltar ao Pedido",
            successTitle: "Pedido Realizado!",
            successBody: "Seu pedido esta sendo preparado. Tempo estimado:",
            pickupEstimate: "15–20 min",
            deliveryEstimate: "30–40 min",
            successRef: "Referencia do Pedido",
            backToHome: "Voltar ao Inicio",
        },
        contact: {
            title: "Contato",
            name: "Nome e Sobrenome",
            namePlaceholder: "Maria Silva",
            email: "Email",
            emailPlaceholder: "maria@exemplo.com",
            message: "Mensagem",
            messagePlaceholder: "Conte para a gente como podemos ajudar...",
            helpText:
                "Duvidas sobre catering, eventos ou pedidos personalizados? Normalmente respondemos em ate um dia util.",
            submit: "Enviar",
        },
        shop: {
            title: "Loja",
            intro: "Explore bebidas exclusivas, doces, produtos da marca e embalados favoritos da Café Da Alma.",
            viewAll: "Ver tudo",
            backToShop: "Voltar para Loja",
            addToCart: "Adicionar",
            popularTag: "Popular",
            cardAction: "Detalhes e Retirada",
        },
        services: {
            title: "Nossos Servicos",
            items: [
                "Preparo de cafe especial",
                "Combinacao de doces e sobremesas",
                "Eventos privados e catering",
                "Musica ao vivo e eventos comunitarios nos fins de semana",
            ],
        },
        footer: {
            nav: {
                about: "Sobre a Café Da Alma",
                contact: "Contato",
            },
            newsTitle: "Receba as novidades da Café Da Alma",
            emailPlaceholder: "Seu email aqui",
            subscribe: "Inscrever",
            terms: "Termos e Condicoes",
            privacy: "Politica de Privacidade",
            transparency: "Transparencia na Cadeia de Suprimentos",
            copyright: "©2026 Café Da Alma, LLC. Todos os direitos reservados.",
        },
    },
};

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
    const [locale, setLocale] = useState(
        () => localStorage.getItem("cafe-da-alma-locale") || "en",
    );

    useEffect(() => {
        localStorage.setItem("cafe-da-alma-locale", locale);
        document.documentElement.lang = locale === "pt" ? "pt-BR" : "en";
    }, [locale]);

    const value = useMemo(
        () => ({
            locale,
            setLocale,
            toggleLanguage: () =>
                setLocale((current) => (current === "en" ? "pt" : "en")),
            t: translations[locale],
        }),
        [locale],
    );

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);

    if (!context) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }

    return context;
}
