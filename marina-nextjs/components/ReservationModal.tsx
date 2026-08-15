'use client';

export default function ReservationModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <div
      className={`modal-overlay ${open ? 'open' : ''}`}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="modal">
        <button className="modal-close" aria-label="Close" onClick={onClose}>
          ✕
        </button>
        <div className="eyebrow">Κράτηση Τραπεζιού</div>
        <h3 className="serif">Book a Table</h3>
        <p className="sub">
          Καλέστε μας απευθείας για άμεση κράτηση, ή στείλτε email με τα στοιχεία σας.
          <br />
          Call us directly for the fastest booking, or send us an email.
        </p>
        <div className="modal-contact">
          <a href="tel:+302897022783" className="modal-phone">
            <span className="ic">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .8 2.9a2 2 0 0 1-.4 2.1L8.1 10a16 16 0 0 0 6 6l1.3-1.4a2 2 0 0 1 2.1-.4c.9.4 1.9.7 2.9.8a2 2 0 0 1 1.6 2Z" />
              </svg>
            </span>
            <span className="txt">
              <span className="lbl">Καλέστε Τώρα · Call Now</span>
              <span className="num">+30 2897 022783</span>
            </span>
          </a>
          <a href="mailto:info@marinarestaurantcafe.gr?subject=Reservation%20Request" className="modal-email">
            <span className="ic">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 6-10 7L2 6" />
              </svg>
            </span>
            <span className="txt">
              <span className="lbl">Email</span>
              <span className="num">info@marinarestaurantcafe.gr</span>
            </span>
          </a>
        </div>
        <p className="modal-note">
          Για μεγάλες παρέες ή ειδικές εκδηλώσεις, επικοινωνήστε τηλεφωνικά. For large groups or
          special events, please call us directly.
        </p>
      </div>
    </div>
  );
}
