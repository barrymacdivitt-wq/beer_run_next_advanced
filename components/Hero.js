
export default function Hero() {
  return (
    <header className="hero">
      <nav className="navbar">
        <h1 className="logo">Beer Run</h1>
        <a className="nav-btn" href="#signup">Join Waitlist</a>
      </nav>

      <div className="hero-content">
        <h2>21+ Alcohol Delivery Reimagined</h2>
        <p>Fast. Local. LSU‑Inspired. Built for Baton Rouge.</p>
        <a className="cta" href="#signup">Get Early Access</a>
      </div>

      <img className="hero-img" src="/hero.jpg" />
    </header>
  );
}
