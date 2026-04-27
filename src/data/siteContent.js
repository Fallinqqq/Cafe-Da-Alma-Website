const menuSectionsByLocale = {
  en: [
    {
      title: 'Coffees',
      items: [
        { name: 'Santos Expreso', price: '$2.00' },
        { name: 'Cerrado', price: '$3.00' },
        { name: 'Cerrado Americano', price: '$2.00' },
        { name: 'Mogiana Latte', price: '$4.00' },
        { name: 'Brazilian Cold Brew', price: '$4.00' },
        { name: 'Cafezinho', price: '$2.00' },
      ],
    },
    {
      title: 'Teas',
      items: [
        {
          name: 'Frutas Vermelhas',
          price: '$4.00',
          description: 'A vibrant and refreshing blend of local strawberries, raspberries, and blackberries, balanced with a hint of hibiscus for a tart, floral finish.',
        },
        {
          name: 'Erva Mate',
          price: '$4.00',
          description: 'A Brazilian cafe staple. Toasted mate leaves brewed for a smooth, nutty flavor. Refreshing, revitalizing, and perfectly balanced.',
        },
        {
          name: 'Cha Misto',
          price: '$4.00',
          description: 'A vibrant, zesty infusion of sun-ripened oranges and tangy passion fruit with a warming ginger kick, designed to be both refreshing and revitalizing.',
        },
        {
          name: 'Cha Preto',
          price: '$4.00',
          description: 'A bold, full-bodied classic Brazilian black tea with a smooth, malty finish, perfect on its own or with a splash of milk.',
        },
      ],
    },
    {
      title: 'Pastries & Sweets',
      items: [
        {
          name: 'Pao de Queijo',
          price: '$2.00',
          description: 'A traditional Brazilian cheese bread made with cassava flour for a golden, crispy crust and a warm, delightfully chewy center.',
        },
        {
          name: 'Bolo de Fuba',
          price: '$4.00',
          description: 'A moist, traditional Brazilian cornmeal cake with a delicate crumb and a nostalgic hint of fennel seeds.',
        },
        {
          name: 'Pastel de Belem',
          price: '$4.00',
          description: 'A legendary puff pastry tart filled with rich, silky egg custard and baked until caramelized and golden-brown.',
        },
        {
          name: 'Brigadeiros (2)',
          price: '$4.00',
          description: 'Brazil\'s iconic gourmet chocolate truffle, hand-rolled, velvety cocoa fudge finished with classic chocolate sprinkles.',
        },
        {
          name: 'Pudim Traditional (1)',
          price: '$3.00',
          description: 'A silky, melt-in-your-mouth Brazilian milk flan, gently baked and drizzled with a rich, golden amber caramel sauce.',
        },
      ],
    },
    {
      title: 'Sizes',
      items: [
        { name: 'Pequeno', price: '$2.00' },
        { name: 'Medio', price: '$4.00' },
        { name: 'Grande', price: '$6.00' },
      ],
    },
  ],
  pt: [
    {
      title: 'Cafes',
      items: [
        { name: 'Santos Expreso', price: '$2.00' },
        { name: 'Cerrado', price: '$3.00' },
        { name: 'Cerrado Americano', price: '$2.00' },
        { name: 'Mogiana Latte', price: '$4.00' },
        { name: 'Cold Brew Brasileiro', price: '$4.00' },
        { name: 'Cafezinho', price: '$2.00' },
      ],
    },
    {
      title: 'Chas',
      items: [
        {
          name: 'Frutas Vermelhas',
          price: '$4.00',
          description: 'Uma mistura vibrante e refrescante de morangos, framboesas e amoras com um toque de hibisco para um final floral e levemente acido.',
        },
        {
          name: 'Erva Mate',
          price: '$4.00',
          description: 'Um classico brasileiro. Folhas de mate tostadas preparadas para um sabor suave, levemente amendoado, refrescante e equilibrado.',
        },
        {
          name: 'Cha Misto',
          price: '$4.00',
          description: 'Uma infusao vibrante de laranja madura, maracuja e um toque de gengibre para uma bebida refrescante e energizante.',
        },
        {
          name: 'Cha Preto',
          price: '$4.00',
          description: 'Um cha preto brasileiro encorpado, com final maltado e suave, perfeito puro ou com um toque de leite.',
        },
      ],
    },
    {
      title: 'Doces & Salgados',
      items: [
        {
          name: 'Pao de Queijo',
          price: '$2.00',
          description: 'Tradicional pao de queijo brasileiro feito com polvilho, casquinha dourada e centro macio e puxento.',
        },
        {
          name: 'Bolo de Fuba',
          price: '$4.00',
          description: 'Bolo de fuba tradicional, macio e delicado, com um toque nostalgico de erva-doce.',
        },
        {
          name: 'Pastel de Belem',
          price: '$4.00',
          description: 'Folhado recheado com creme de ovos sedoso, assado ate ficar caramelizado e dourado.',
        },
        {
          name: 'Brigadeiros (2)',
          price: '$4.00',
          description: 'O iconico brigadeiro brasileiro, enrolado a mao, cremoso e finalizado com granulado de chocolate.',
        },
        {
          name: 'Pudim Tradicional (1)',
          price: '$3.00',
          description: 'Pudim de leite condensado aveludado, assado lentamente e coberto com calda dourada de caramelo.',
        },
      ],
    },
    {
      title: 'Tamanhos',
      items: [
        { name: 'Pequeno', price: '$2.00' },
        { name: 'Medio', price: '$4.00' },
        { name: 'Grande', price: '$6.00' },
      ],
    },
  ],
};

const locationsByLocale = {
  en: [
    {
      name: 'Lynchburg',
      addressLines: ['2307 Main ST,', 'Lynchburg, VA', '24503'],
      mapSrc: 'https://www.google.com/maps?q=2307+Main+St,+Lynchburg,+VA+24503&z=16&output=embed',
    },
    {
      name: 'Sao Paulo',
      addressLines: ['Av. Paulista, 1000', 'Bela Vista, Sao Paulo', '01310-100, Brazil'],
      mapSrc: 'https://www.google.com/maps?q=Av.+Paulista,+1000,+Bela+Vista,+Sao+Paulo,+01310-100,+Brazil&z=16&output=embed',
    },
  ],
  pt: [
    {
      name: 'Lynchburg',
      addressLines: ['2307 Main ST,', 'Lynchburg, VA', '24503'],
      mapSrc: 'https://www.google.com/maps?q=2307+Main+St,+Lynchburg,+VA+24503&z=16&output=embed',
    },
    {
      name: 'Sao Paulo',
      addressLines: ['Av. Paulista, 1000', 'Bela Vista, Sao Paulo', '01310-100, Brasil'],
      mapSrc: 'https://www.google.com/maps?q=Av.+Paulista,+1000,+Bela+Vista,+Sao+Paulo,+01310-100,+Brazil&z=16&output=embed',
    },
  ],
};

const shopCategoriesByLocale = {
  en: [
    {
      slug: 'coffees',
      title: 'Coffee',
      navLabel: 'Coffee',
      route: '/shop/coffees',
      description: 'Bold Brazilian roasts and smooth everyday favorites.',
      products: [
        { name: 'Santos Expreso', price: '$2.00' },
        { name: 'Cerrado', price: '$3.00' },
        { name: 'Cerrado Americano', price: '$2.00' },
        { name: 'Mogiana Latte', price: '$4.00' },
        { name: 'Brazilian Cold Brew', price: '$4.00' },
        { name: 'Cafezinho', price: '$2.00' },
      ],
    },
    {
      slug: 'teas',
      title: 'Tea',
      navLabel: 'Tea',
      route: '/shop/teas',
      description: 'Refreshing fruit blends and cafe staples with warmth and balance.',
      products: [
        { name: 'Frutas Vermelhas', price: '$4.00' },
        { name: 'Erva Mate', price: '$4.00' },
        { name: 'Cha Misto', price: '$4.00' },
      ],
    },
    {
      slug: 'pastries',
      title: 'Pastries',
      navLabel: 'Pastries',
      route: '/shop/pastries',
      description: 'Brazilian sweets and warm bakery classics, baked for the afternoon crowd.',
      products: [
        { name: 'Pao de Queijo', price: '$2.00' },
        { name: 'Bolo de Fuba', price: '$4.00' },
        { name: 'Pastel de Belem', price: '$4.00' },
        { name: 'Brigadeiros', price: '$4.00' },
        { name: 'Pudim Traditional', price: '$3.00' },
        { name: 'Sweet Bread', price: '$3.50' },
      ],
    },
    {
      slug: 'merchandise',
      title: 'Merch',
      navLabel: 'Merch',
      route: '/shop/merchandise',
      description: 'Café Da Alma goods for gifting, brewing, and everyday wear.',
      products: [
        { name: 'Logo Keychain', price: '$8.00' },
        { name: 'Cafe Tote', price: '$20.00' },
        { name: 'Signature Tee', price: '$18.00' },
        { name: 'Ceramic Mug', price: '$12.00' },
        { name: 'Yerba Mate Cup', price: '$18.00' },
        { name: 'Sticker Pack', price: '$6.00' },
      ],
    },
    {
      slug: 'packaged-coffee-tea',
      title: 'Packaged Coffee & Tea',
      navLabel: 'Packaged Coffee & Tea',
      route: '/shop/packaged-coffee-tea',
      description: 'Shelf-ready beans and loose-leaf blends to bring the cafe home.',
      products: [
        { name: 'House Roast 12oz', price: '$18.00', image: '/bourbon santos.jpg' },
        { name: 'Single Origin 12oz', price: '$20.00', image: '/espirito forte.jpg' },
        { name: 'Decaf Roast 12oz', price: '$18.00', image: '/Luz do dia.jpg' },
        { name: 'Berry Hibiscus Tea', price: '$13.00', image: '/red berries.jpg' },
        { name: 'Mate Blend', price: '$14.00', image: '/original yerba mate.jpg' },
        { name: 'Black Tea Blend', price: '$15.00', image: '/Passion-fruit-orange.jpg' },
      ],
    },
  ],
  pt: [
    {
      slug: 'coffees',
      title: 'Cafe',
      navLabel: 'Cafe',
      route: '/shop/coffees',
      description: 'Torrefacoes brasileiras marcantes e favoritos suaves para o dia a dia.',
      products: [
        { name: 'Santos Expreso', price: '$2.00' },
        { name: 'Cerrado', price: '$3.00' },
        { name: 'Cerrado Americano', price: '$2.00' },
        { name: 'Mogiana Latte', price: '$4.00' },
        { name: 'Cold Brew Brasileiro', price: '$4.00' },
        { name: 'Cafezinho', price: '$2.00' },
      ],
    },
    {
      slug: 'teas',
      title: 'Cha',
      navLabel: 'Cha',
      route: '/shop/teas',
      description: 'Misturas frutadas refrescantes e classicos da casa com calor e equilibrio.',
      products: [
        { name: 'Frutas Vermelhas', price: '$4.00' },
        { name: 'Erva Mate', price: '$4.00' },
        { name: 'Cha Misto', price: '$4.00' },
      ],
    },
    {
      slug: 'pastries',
      title: 'Doces',
      navLabel: 'Doces',
      route: '/shop/pastries',
      description: 'Doces brasileiros e classicos frescos da padaria para qualquer hora da tarde.',
      products: [
        { name: 'Pao de Queijo', price: '$2.00' },
        { name: 'Bolo de Fuba', price: '$4.00' },
        { name: 'Pastel de Belem', price: '$4.00' },
        { name: 'Brigadeiros', price: '$4.00' },
        { name: 'Pudim Tradicional', price: '$3.00' },
        { name: 'Pao Doce', price: '$3.50' },
      ],
    },
    {
      slug: 'merchandise',
      title: 'Merch',
      navLabel: 'Merch',
      route: '/shop/merchandise',
      description: 'Produtos da Café Da Alma para presente, preparo e uso diario.',
      products: [
        { name: 'Chaveiro da Marca', price: '$8.00' },
        { name: 'Ecobag do Cafe', price: '$20.00' },
        { name: 'Camiseta Signature', price: '$18.00' },
        { name: 'Caneca de Ceramica', price: '$12.00' },
        { name: 'Copo Termico', price: '$18.00' },
        { name: 'Cartela de Adesivos', price: '$6.00' },
      ],
    },
    {
      slug: 'packaged-coffee-tea',
      title: 'Cafe & Cha Embalados',
      navLabel: 'Cafe & Cha Embalados',
      route: '/shop/packaged-coffee-tea',
      description: 'Graos e blends prontos para levar a experiencia do cafe para casa.',
      products: [
        { name: 'House Roast 12oz', price: '$18.00', image: '/bourbon santos.jpg' },
        { name: 'Single Origin 12oz', price: '$20.00', image: '/espirito forte.jpg' },
        { name: 'Decaf Roast 12oz', price: '$18.00', image: '/Luz do dia.jpg' },
        { name: 'Cha Berry Hibiscus', price: '$13.00', image: '/red berries.jpg' },
        { name: 'Blend de Mate', price: '$14.00', image: '/original yerba mate.jpg' },
        { name: 'Blend de Cha Preto', price: '$15.00', image: '/Passion-fruit-orange.jpg' },
      ],
    },
  ],
};

export function getMenuSections(locale) {
  return menuSectionsByLocale[locale] || menuSectionsByLocale.en;
}

export function getLocations(locale) {
  return locationsByLocale[locale] || locationsByLocale.en;
}

export function getShopCategories(locale) {
  return shopCategoriesByLocale[locale] || shopCategoriesByLocale.en;
}

export function getShopCategory(slug, locale) {
  return getShopCategories(locale).find(category => category.slug === slug);
}