'use client';

import { useState } from 'react';
import { menuCategories } from '@/lib/menuData';

export default function Menu() {
  const [active, setActive] = useState(menuCategories[0].id);
  const category = menuCategories.find((c) => c.id === active) ?? menuCategories[0];

  return (
    <section className="menu-section section-pad" id="menu">
      <div className="container">
        <div className="section-head center">
          <div className="eyebrow" style={{ justifyContent: 'center' }}>
            Το Μενού Μας · Our Menu
          </div>
          <h2 className="serif">Signature Dishes</h2>
          <p>
            Μια γεύση από τον κατάλογό μας — ιταλικές, ελληνικές &amp; θαλασσινές συνταγές,
            φτιαγμένες καθημερινά με φρέσκα υλικά.
          </p>
        </div>

        <div className="tabs">
          {menuCategories.map((cat) => (
            <button
              key={cat.id}
              className={`tab ${cat.id === active ? 'active' : ''}`}
              onClick={() => setActive(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="menu-panel active">
          {category.featured && (
            <div className="dish-featured">
              <div className="img-wrap">
                <img src={category.featured.image} alt={category.featured.alt} />
              </div>
              <div className="content">
                <div className="kicker">{category.featured.kicker}</div>
                <h3 className="serif">{category.featured.name}</h3>
                <div className="price">{category.featured.price}</div>
                <p>{category.featured.description}</p>
              </div>
            </div>
          )}

          <div className="dish-list">
            {category.dishes.map((dish) => (
              <div className="dish-row" key={dish.name}>
                <span className="name serif">
                  {dish.name}
                  <span className="tag-note">{dish.note}</span>
                </span>
                <span className="leader"></span>
                <span className="price">{dish.price}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="menu-cta">
          <a
            href="#location"
            className="btn btn-outline"
            style={{ borderColor: 'rgba(255,255,255,.5)', color: '#fff' }}
          >
             Ask For Full Menu
          </a>
        </div>
      </div>
    </section>
  );
}
