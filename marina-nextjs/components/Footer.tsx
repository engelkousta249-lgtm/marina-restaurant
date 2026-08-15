export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="mark serif">Marina Restaurant Cafe</div>
            <p>
              Italian · Seafood · Greek — all-day dining by the marina of Hersonissos, Crete.
              Fresh catch, handmade pasta, sea views from morning coffee to late night.
            </p>
            <div className="footer-social">
              <a href="#" aria-label="Instagram">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}>
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" />
                </svg>
              </a>
              <a href="#" aria-label="Facebook">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}>
                  <path d="M14 9h3V5h-3a4 4 0 0 0-4 4v3H7v4h3v6h4v-6h3l1-4h-4V9a1 1 0 0 1 1-1Z" />
                </svg>
              </a>
            </div>
          </div>
          <div className="f-col">
            <h4>Γρήγοροι Σύνδεσμοι</h4>
            <a href="#about">Ιστορία</a>
            <a href="#menu">Μενού</a>
            <a href="#gallery">Gallery</a>
            <a href="#reviews">Κριτικές</a>
          </div>
          <div className="f-col">
            <h4>Επικοινωνία</h4>
            <a href="tel:+302897022783">+30 2897 022783</a>
            <a href="mailto:info@marinarestaurantcafe.gr">info@marinarestaurantcafe.gr</a>
            <p>Γιαμπουδάκη 25, Χερσόνησος, Κρήτη</p>
          </div>
          <div className="f-col">
            <h4>Ωράριο</h4>
            <p>Δευτέρα – Κυριακή</p>
            <p>10:00 – 01:00</p>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Marina Restaurant Cafe. All rights reserved.</span>
          <span>Λιμένας Χερσονήσου, Κρήτη · Crete, Greece</span>
        </div>
      </div>
    </footer>
  );
}
