'use client';

import { useState } from 'react';
import Reveal from './Reveal';

export default function Location() {
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get('name') ?? '');
    const email = String(formData.get('email') ?? '');
    const phone = String(formData.get('phone') ?? '');
    const message = String(formData.get('message') ?? '');

    const body = encodeURIComponent(
      `Όνομα / Name: ${name}\nEmail: ${email}\nΤηλέφωνο / Phone: ${phone || '-'}\n\nΜήνυμα / Message:\n${message}`
    );
    window.location.href = `mailto:info@marinarestaurantcafe.gr?subject=${encodeURIComponent(
      'Website Contact — ' + name
    )}&body=${body}`;

    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 6000);
    form.reset();
  };

  return (
    <section className="location section-pad" id="location">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow">Βρείτε Μας · Find Us</div>
          <h2 className="serif" style={{ color: 'var(--navy)' }}>
            Επικοινωνία &amp; Τοποθεσία
          </h2>
        </div>

        <Reveal className="loc-grid">
          <div className="loc-map">
            <iframe
              src="https://www.google.com/maps?q=Chersonissos+Marina+Crete&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Χάρτης Marina Restaurant Cafe"
            />
          </div>
          <div className="loc-info">
            <div className="eyebrow">Στοιχεία Επικοινωνίας</div>
            <h2 className="serif">Ελάτε να μας γνωρίσετε</h2>

            <div className="loc-row">
              <div className="ic">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}>
                  <path d="M12 22s7-7.4 7-13a7 7 0 1 0-14 0c0 5.6 7 13 7 13Z" />
                  <circle cx="12" cy="9" r="2.4" />
                </svg>
              </div>
              <div>
                <div className="lbl">Διεύθυνση</div>
                <div className="val">Γιαμπουδάκη 25, Λιμένας Χερσονήσου, Χερσόνησος, Κρήτη 700 14</div>
              </div>
            </div>

            <div className="loc-row">
              <div className="ic">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}>
                  <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .8 2.9a2 2 0 0 1-.4 2.1L8.1 10a16 16 0 0 0 6 6l1.3-1.4a2 2 0 0 1 2.1-.4c.9.4 1.9.7 2.9.8a2 2 0 0 1 1.6 2Z" />
                </svg>
              </div>
              <div>
                <div className="lbl">Τηλέφωνο</div>
                <a className="val" href="tel:+302897022783">
                  +30 2897 022783
                </a>
              </div>
            </div>

            <div className="loc-row">
              <div className="ic">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}>
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 6-10 7L2 6" />
                </svg>
              </div>
              <div>
                <div className="lbl">Email</div>
                <a className="val" href="mailto:info@marinarestaurantcafe.gr">
                  info@marinarestaurantcafe.gr
                </a>
              </div>
            </div>

            <div className="loc-row">
              <div className="ic">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}>
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
              </div>
              <div>
                <div className="lbl">Ωράριο</div>
                <div className="val">Καθημερινά 10:00 – 01:00</div>
              </div>
            </div>

            <form className="loc-form" onSubmit={handleSubmit}>
              <div className="frow">
                <label htmlFor="cf-name">Όνομα · Name</label>
                <input id="cf-name" name="name" type="text" placeholder="Το όνομά σας" required />
              </div>
              <div className="frow">
                <label htmlFor="cf-email">Email</label>
                <input id="cf-email" name="email" type="email" placeholder="you@email.com" required />
              </div>
              <div className="frow">
                <label htmlFor="cf-phone">Τηλέφωνο (προαιρετικό) · Phone (optional)</label>
                <input id="cf-phone" name="phone" type="tel" placeholder="+30 ..." />
              </div>
              <div className="frow">
                <label htmlFor="cf-msg">Μήνυμα · Message</label>
                <textarea id="cf-msg" name="message" placeholder="Πείτε μας για την κράτησή σας..." required />
              </div>
              <button type="submit" className="btn btn-gold" style={{ width: '100%', justifyContent: 'center' }}>
                Αποστολή Μηνύματος · Send Message
              </button>
              <div className={`form-success ${showSuccess ? 'show' : ''}`}>
                Ευχαριστούμε! Θα σας απαντήσουμε σύντομα. · Thank you — we&apos;ll reply shortly.
              </div>
              <p className="form-note">
                Θα ανοίξει το email σας για αποστολή. This opens your email client to send the
                message directly to us.
              </p>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
