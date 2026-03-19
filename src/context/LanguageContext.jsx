import { createContext, useContext, useEffect, useMemo, useState } from 'react';

const translations = {
  en: {
    nav: {
      menu: 'Menu',
      shop: 'Shop',
      locations: 'Locations',
      contact: 'Contact',
      order: 'Order Online',
      toggleOpen: 'Toggle navigation',
      language: 'PT-BR',
    },
    home: {
      title: 'Welcome to Cafe Da Alma',
      description: 'Specialty coffee, artisan pastries, and a warm community atmosphere - all in one place.',
      cta: 'View Our Menu',
      banner: 'Discover where moments slow and cups are warm at Cafe Da Alma.',
      featuredTitle: 'Featured Menu Items',
      exploreMenu: 'Explore Our Menu',
      placeholderTop: 'Place Holder?',
      splitText: 'Text would go here',
      placeholderBottom: 'Place Holder?',
      socialHandle: '@cafedaalma',
    },
    menu: {
      title: 'Menu',
      intro: 'Crafted drinks and Brazilian favorites, served all day.',
      itemsLabel: 'items',
    },
    locations: {
      title: 'Locations',
      mapLabel: 'map',
    },
    order: {
      title: 'Order Now',
      description: 'Place your order for pickup or delivery quickly and easily.',
      features: [
        'Online ordering with pickup scheduling',
        'Local delivery in 30 minutes',
        'Custom blend requests',
      ],
    },
    contact: {
      title: 'Contact Us',
      name: 'First & Last Name',
      email: 'Email',
      message: 'Message',
      submit: 'Submit',
    },
    shop: {
      title: 'Shop',
      intro: 'Browse signature drinks, pastries, merch, and packaged favorites from Cafe Da Alma.',
      viewAll: 'View all',
      backToShop: 'Back to Shop',
      addToCart: 'Add to Cart',
    },
    footer: {
      nav: {
        about: 'About Cafe Da Alma',
        careers: 'Careers',
        press: 'Press',
        customerCare: 'Customer Care',
        foodservice: 'Foodservice',
      },
      newsTitle: 'Get the freshest Cafe Da Alma news',
      emailPlaceholder: 'Your email here',
      subscribe: 'Subscribe',
      terms: 'Terms & Conditions',
      privacy: 'Privacy Policy',
      transparency: 'Supply Chain Transparency',
      copyright: '©2026 Cafe Da Alma, LLC. All Rights Reserved.',
    },
  },
  pt: {
    nav: {
      menu: 'Cardapio',
      shop: 'Loja',
      locations: 'Locais',
      contact: 'Contato',
      order: 'Pedir Online',
      toggleOpen: 'Abrir navegacao',
      language: 'EN',
    },
    home: {
      title: 'Bem-vindo ao Cafe Da Alma',
      description: 'Cafe especial, doces artesanais e um ambiente acolhedor em um so lugar.',
      cta: 'Ver Cardapio',
      banner: 'Descubra onde os momentos desaceleram e as xicaras estao sempre quentes na Cafe Da Alma.',
      featuredTitle: 'Itens em Destaque do Cardapio',
      exploreMenu: 'Explorar Cardapio',
      placeholderTop: 'Espaco Reservado?',
      splitText: 'Texto entraria aqui',
      placeholderBottom: 'Espaco Reservado?',
      socialHandle: '@cafedaalma',
    },
    menu: {
      title: 'Cardapio',
      intro: 'Bebidas preparadas com cuidado e favoritos brasileiros servidos o dia todo.',
      itemsLabel: 'itens',
    },
    locations: {
      title: 'Locais',
      mapLabel: 'mapa',
    },
    order: {
      title: 'Peca Agora',
      description: 'Faca seu pedido para retirada ou entrega de forma rapida e facil.',
      features: [
        'Pedidos online com agendamento para retirada',
        'Entrega local em 30 minutos',
        'Pedidos personalizados de blends',
      ],
    },
    contact: {
      title: 'Contato',
      name: 'Nome e Sobrenome',
      email: 'Email',
      message: 'Mensagem',
      submit: 'Enviar',
    },
    shop: {
      title: 'Loja',
      intro: 'Explore bebidas exclusivas, doces, produtos da marca e embalados favoritos da Cafe Da Alma.',
      viewAll: 'Ver tudo',
      backToShop: 'Voltar para Loja',
      addToCart: 'Adicionar',
    },
    footer: {
      nav: {
        about: 'Sobre a Cafe Da Alma',
        careers: 'Carreiras',
        press: 'Imprensa',
        customerCare: 'Atendimento',
        foodservice: 'Foodservice',
      },
      newsTitle: 'Receba as novidades da Cafe Da Alma',
      emailPlaceholder: 'Seu email aqui',
      subscribe: 'Inscrever',
      terms: 'Termos e Condicoes',
      privacy: 'Politica de Privacidade',
      transparency: 'Transparencia na Cadeia de Suprimentos',
      copyright: '©2026 Cafe Da Alma, LLC. Todos os direitos reservados.',
    },
  },
};

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [locale, setLocale] = useState(() => localStorage.getItem('cafe-da-alma-locale') || 'en');

  useEffect(() => {
    localStorage.setItem('cafe-da-alma-locale', locale);
    document.documentElement.lang = locale === 'pt' ? 'pt-BR' : 'en';
  }, [locale]);

  const value = useMemo(() => ({
    locale,
    setLocale,
    toggleLanguage: () => setLocale(current => (current === 'en' ? 'pt' : 'en')),
    t: translations[locale],
  }), [locale]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }

  return context;
}