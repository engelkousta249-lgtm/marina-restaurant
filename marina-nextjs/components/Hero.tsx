'use client';

export default function Hero({ onReserve }: { onReserve: () => void }) {
  return (
    <header className="hero" id="hero">
      <div
  className="hero-bg"
  style={{
    backgroundImage: "url('/hero.jpg')",
  }}
/>
      <div className="hero-scrim" />
      <div className="hero-inner">
        <div className="hero-eyebrow">By the Marina of Hersonissos</div>
        <h1 className="serif">
          Marina <em>Restaurant</em> Cafe
        </h1>
        <p className="hero-tagline">
          Italian <span className="div">·</span> Seafood <span className="div">·</span> Greek
          <br />
          <span className="hero-tagline-en">Στη Μαρίνα του Λιμένα Χερσονήσου, Κρήτη</span>
        </p>
        <div className="hero-cta">
          <a href="#menu" className="btn btn-outline">
            Δείτε το Μενού · View Menu
          </a>
          <a
            href="#"
            className="btn btn-gold"
            onClick={(e) => {
              e.preventDefault();
              onReserve();
            }}
          >
            Κράτηση · Book a Table
          </a>
        </div>
      </div>
      <div className="hero-scroll">
        <span>Scroll</span>
        <span className="line"></span>
      </div>
    </header>
  );
}
