'use client';

import { useState } from 'react';
import { galleryImages } from '@/lib/galleryData';

export default function Gallery() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const close = () => setOpenIndex(null);
  const prev = () =>
    setOpenIndex((i) => (i === null ? null : (i - 1 + galleryImages.length) % galleryImages.length));
  const next = () =>
    setOpenIndex((i) => (i === null ? null : (i + 1) % galleryImages.length));

  const current = openIndex !== null ? galleryImages[openIndex] : null;

  return (
    <section className="gallery section-pad" id="gallery">
      <div className="container">
        <div className="section-head center">
          <div className="eyebrow" style={{ justifyContent: 'center' }}>
            Στιγμές · Moments
          </div>
          <h2 className="serif">Gallery</h2>
          <p>Απόγευμα στη μαρίνα, φρέσκα πιάτα και το φως του ηλιοβασιλέματος πάνω στο νερό.</p>
        </div>

        <div className="gallery-grid">
          {galleryImages.map((img, i) => (
            <button
              key={img.id}
              className={`g-item ${img.span2 ? 'g-span-2' : ''} ${img.row2 ? 'g-row-2' : ''}`}
              onClick={() => setOpenIndex(i)}
              aria-label={`Άνοιγμα εικόνας: ${img.caption}`}
            >
              <img src={img.thumb} alt={img.alt} />
              <div className="overlay">
                <span>{img.caption}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className={`lightbox ${current ? 'open' : ''}`} onClick={(e) => { if (e.target === e.currentTarget) close(); }}>
        <button className="lightbox-close" onClick={close}>
          Κλείσιμο ✕
        </button>
        <button className="lightbox-nav lightbox-prev" onClick={prev} aria-label="Προηγούμενη">
          ‹
        </button>
        {current && <img src={current.full} alt={current.alt} />}
        <button className="lightbox-nav lightbox-next" onClick={next} aria-label="Επόμενη">
          ›
        </button>
      </div>
    </section>
  );
}
