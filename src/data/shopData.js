export const shopCategories = [
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
    description: 'Cafe Da Alma goods for gifting, brewing, and everyday wear.',
    products: [
      { name: 'Logo Keychain', price: '$8.00' },
      { name: 'Cafe Tote', price: '$20.00' },
      { name: 'Signature Tee', price: '$18.00' },
      { name: 'Ceramic Mug', price: '$12.00' },
      { name: 'Travel Tumbler', price: '$18.00' },
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
      { name: 'House Roast 12oz', price: '$18.00' },
      { name: 'Single Origin 12oz', price: '$20.00' },
      { name: 'Decaf Roast 12oz', price: '$18.00' },
      { name: 'Berry Hibiscus Tea', price: '$13.00' },
      { name: 'Mate Blend', price: '$14.00' },
      { name: 'Black Tea Blend', price: '$15.00' },
    ],
  },
];

export function getShopCategory(slug) {
  return shopCategories.find(category => category.slug === slug);
}