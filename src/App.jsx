export default function App() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#f4f0eb',
      gap: '2rem',
    }}>
      <img src="/logo.png" alt="Cafe Da Alma logo" style={{ maxWidth: '280px', width: '80%' }} />
      <h1 style={{
        fontFamily: '"proxima-nova", Arial, sans-serif',
        fontSize: '2.5rem',
        color: '#3b2a1a',
        letterSpacing: '0.15em',
        textTransform: 'uppercase',
        margin: 0,
      }}>Coming Soon</h1>
    </div>
  );
}
