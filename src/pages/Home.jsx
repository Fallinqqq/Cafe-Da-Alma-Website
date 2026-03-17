import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <main>
      <div className="hero">
        <h1>Welcome to Cafe Da Alma</h1>
        <p>Specialty coffee, artisan pastries, and a warm community atmosphere — all in one place.</p>
        <Link to="/menu" className="btn">View Our Menu</Link>
      </div>
    </main>
  );
}
