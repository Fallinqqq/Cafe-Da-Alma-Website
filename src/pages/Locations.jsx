const locations = [
  { name: 'Main Street Cafe', address: '123 Main St, Java City' },
  { name: 'Riverside Shop', address: '456 River Blvd, Java City' },
  { name: 'City Center', address: '789 Center Ave, Java City' },
];

export default function Locations() {
  return (
    <main>
      <h1>Locations</h1>
      <p>Find your nearest Cafe Da Alma branch:</p>
      <div className="location-cards">
        {locations.map(loc => (
          <div className="location-card" key={loc.name}>
            <h3>{loc.name}</h3>
            <p>{loc.address}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
