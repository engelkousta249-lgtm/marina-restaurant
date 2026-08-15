'use client';

import { useEffect, useRef, useState } from 'react';
import { testimonials } from '@/lib/testimonialsData';

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startAuto = () => {
    stopAuto();
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, 5500);
  };
  const stopAuto = () => {
    if (timerRef.current) clearInterval(timerRef.current);
  };

  useEffect(() => {
    startAuto();
    return stopAuto;
  }, []);

  return (
    <section className="testimonials section-pad" id="reviews">
      <div className="container">
        <div className="section-head center">
          <div className="eyebrow" style={{ justifyContent: 'center' }}>
            Κριτικές · Reviews
          </div>
          <h2 className="serif">Τι Λένε οι Επισκέπτες</h2>
        </div>

        <div className="t-track-wrap" onMouseEnter={stopAuto} onMouseLeave={startAuto}>
          <div
            className="t-track"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {testimonials.map((t) => (
              <div className="t-slide" key={t.author}>
                <div className="t-card">
                  <div className="stars">{t.stars}</div>
                  <p className="quote">{t.quote}</p>
                  <div className="author">{t.author}</div>
                  <div className="source">{t.source}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="t-dots">
          {testimonials.map((t, i) => (
            <button
              key={t.author}
              className={`t-dot ${i === index ? 'active' : ''}`}
              onClick={() => setIndex(i)}
              aria-label={`Κριτική ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
