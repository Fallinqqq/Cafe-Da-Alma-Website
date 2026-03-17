const details = [
  { label: 'Email', value: 'hello@cafedaalma.com' },
  { label: 'Phone', value: '+1 (555) 123-4567' },
  { label: 'Address', value: '123 Coffee Lane, Java City' },
];

export default function Contact() {
  return (
    <main>
      <h1>Contact Us</h1>
      <div className="contact-grid">
        {details.map(({ label, value }) => (
          <div className="contact-item" key={label}>
            <span className="label">{label}</span>
            <span>{value}</span>
          </div>
        ))}
      </div>
    </main>
  );
}
