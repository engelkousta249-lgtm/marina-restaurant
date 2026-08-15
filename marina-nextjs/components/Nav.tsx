'use client';

import { useEffect, useState } from 'react';

const LINKS = [
  { href: '#about', label: 'Ιστορία' },
  { href: '#menu', label: 'Μενού' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#reviews', label: 'Κριτικές' },
  { href: '#location', label: 'Επικοινωνία' },
];

export default function Nav({ onReserve }: { onReserve: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
        <a href="#hero" className="brand">
          <span className="mark">Marina</span>
          <span className="sub">Restaurant · Cafe</span>
        </a>
        <div className="nav-links">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
          <a
            href="#"
            className="nav-cta"
            onClick={(e) => {
              e.preventDefault();
              onReserve();
            }}
          >
            Κράτηση
          </a>
        </div>
        <button
          className={`burger ${mobileOpen ? 'open' : ''}`}
          aria-label="Menu"
          onClick={() => setMobileOpen((v) => !v)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      <div className={`mobile-menu ${mobileOpen ? 'open' : ''}`}>
        {LINKS.map((l) => (
          <a key={l.href} href={l.href} className="m-link" onClick={closeMobile}>
            {l.label}
          </a>
        ))}
        <button
          className="btn btn-gold"
          style={{ marginTop: 10 }}
          onClick={() => {
            closeMobile();
            onReserve();
          }}
        >
          Κράτηση / Book a Table
        </button>
      </div>
    </>
  );
}
