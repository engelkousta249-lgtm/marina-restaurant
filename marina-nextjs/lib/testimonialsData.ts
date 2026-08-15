export type Testimonial = {
  quote: string;
  author: string;
  source: string;
  stars: string;
};

export const testimonials: Testimonial[] = [
  {
    stars: '★★★★☆',
    quote:
      'Ένα από τα καλύτερα εστιατόρια στη Χερσόνησο. Το ψάρι ήταν φρέσκο, η θέα στη μαρίνα υπέροχη, και το σέρβις άψογο.',
    author: 'Ελένη Κ.',
    source: 'Tripadvisor · 4.1 / 5',
  },
  {
    stars: '★★★★☆',
    quote:
      'Beautiful location right on the marina — the seafood pasta was outstanding and the staff made us feel very welcome.',
    author: 'James T.',
    source: 'Tripadvisor · 4.0 / 5',
  },
  {
    stars: '★★★★☆',
    quote:
      'Ήρθαμε για καφέ και μείναμε για δείπνο. Η ατμόσφαιρα το βράδυ με τα φώτα στα σκάφη είναι μοναδική.',
    author: 'Δημήτρης Π.',
    source: 'Tripadvisor · 4.1 / 5',
  },
  {
    stars: '★★★★☆',
    quote:
      'Great mix of Italian and Greek dishes, generous portions and a lovely sunset view over the boats. Will come back.',
    author: 'Sophie M.',
    source: 'Tripadvisor · 4.0 / 5',
  },
];
