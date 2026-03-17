const menuData = [
  {
    category: 'Coffee',
    items: [
      { name: 'Espresso', price: '$3.00' },
      { name: 'Latte', price: '$4.50' },
      { name: 'Cappuccino', price: '$4.50' },
      { name: 'Cold Brew', price: '$4.00' },
    ],
  },
  {
    category: 'Food',
    items: [
      { name: 'Avocado Toast', price: '$7.00' },
    ],
  },
];

export default function Menu() {
  return (
    <main>
      <h1>Menu</h1>
      {menuData.map(({ category, items }) => (
        <div className="menu-section" key={category}>
          <h2>{category}</h2>
          <div className="menu-grid">
            {items.map(({ name, price }) => (
              <div className="menu-item" key={name}>
                <span className="name">{name}</span>
                <span className="price">{price}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </main>
  );
}
