import Reveal from './Reveal';

export default function About() {
  return (
    <section className="about section-pad" id="about">
      <div className="container">
        <div className="about-grid">
          <Reveal className="about-copy">
            <div className="eyebrow">Η Εμπειρία Μας · Our Story</div>
            <h2 className="serif">
              Ένα τραπέζι, <br />
              δίπλα στη θάλασσα.
            </h2>
            <p>
              Στην άκρη της μαρίνας, εκεί όπου τα σκάφη ακουμπούν απαλά στο νερό, το Marina
              Restaurant Cafe προσφέρει μια χαλαρή, μεσογειακή εμπειρία από το πρωινό καφέ ως το
              αργά το βράδυ δείπνο.
            </p>
            <p>
              Στο τραπέζι μας συναντιούνται η φρέσκια ψαριά του νησιού, οι κλασικές ιταλικές
              γεύσεις και η αυθεντική κρητική φιλοξενία — πάντα με θέα στο γαλάζιο του Κρητικού
              πελάγους.
            </p>
            <p className="lang-en">
              Right where the boats gently rest against the water, Marina Restaurant Cafe offers a
              relaxed Mediterranean experience — from morning coffee to a late seaside dinner.
              Fresh island catch, Italian classics and genuine Cretan hospitality, always with a
              view of the Cretan Sea.
            </p>
          </Reveal>

          <Reveal delay={0.22} className="about-media">
            <div className="frame">
              <img
                src="https://images.unsplash.com/photo-1620650135353-5d0cb004bf85?auto=format&fit=crop&w=1200&q=80"
                alt="Ποτήρι κρασί με θέα στο ηλιοβασίλεμα της θάλασσας στο Marina Restaurant Cafe"
              />
            </div>
            <div className="tag">
              <div className="num serif">10:00–01:00</div>
              <div className="cap">Καθημερινά · Daily</div>
            </div>
          </Reveal>
        </div>

        <div className="cards3">
          <Reveal delay={0.1}>
            <div className="card3">
              <svg
                className="icon"
                viewBox="0 0 48 48"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.3}
              >
                <path d="M24 6C15 6 8 15 8 24c0 8 7 16 16 16s16-8 16-16C40 15 33 6 24 6Z" />
                <path d="M24 14v20M17 20c2 3 5 3 7 0M31 20c-2 3-5 3-7 0" />
              </svg>
              <h3>Fresh Seafood &amp; Italian Classics</h3>
              <p>
                Ημερήσια ψαριά, χειροποίητα ζυμαρικά και συνταγές εμπνευσμένες από την ιταλική &amp;
                κρητική παράδοση.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.22}>
            <div className="card3">
              <svg
                className="icon"
                viewBox="0 0 48 48"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.3}
              >
                <path d="M6 34c4-14 12-22 18-22s14 8 18 22" />
                <circle cx="24" cy="14" r="4" />
                <path d="M4 38h40" />
              </svg>
              <h3>Beachside / Marina View</h3>
              <p>Τραπέζια πάνω στη μαρίνα, με θέα στα σκάφη και στο ηλιοβασίλεμα της Χερσονήσου.</p>
            </div>
          </Reveal>
          <Reveal delay={0.34}>
            <div className="card3">
              <svg
                className="icon"
                viewBox="0 0 48 48"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.3}
              >
                <circle cx="24" cy="24" r="17" />
                <path d="M24 14v10l7 5" />
              </svg>
              <h3>All-Day Dining</h3>
              <p>Από τον πρωινό καφέ μέχρι αργά το βράδυ — ανοιχτά κάθε μέρα, 10:00 έως 01:00.</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
