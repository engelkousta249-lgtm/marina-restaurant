export type GalleryImage = {
  id: string;
  thumb: string;
  full: string;
  alt: string;
  caption: string;
  span2?: boolean;
  row2?: boolean;
};

export const galleryImages: GalleryImage[] = [
  {
    id: 'marina-sunset',
    thumb:
      'https://images.unsplash.com/photo-1744799163503-74036eff6027?auto=format&fit=crop&w=900&q=80',
    full: 'https://images.unsplash.com/photo-1744799163503-74036eff6027?auto=format&fit=crop&w=1800&q=85',
    alt: 'Η μαρίνα το ηλιοβασίλεμα',
    caption: 'Η Μαρίνα, Ηλιοβασίλεμα',
    span2: true,
    row2: true,
  },
  {
    id: 'grilled-fish',
    thumb:
      'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=700&q=80',
    full: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=1400&q=85',
    alt: 'Ψητό ψάρι πιάτο',
    caption: 'Ψάρι Ημέρας',
  },
  {
    id: 'greek-salad',
    thumb:
      'https://images.unsplash.com/photo-1745126010010-da1c6f5300a9?auto=format&fit=crop&w=700&q=80',
    full: 'https://images.unsplash.com/photo-1745126010010-da1c6f5300a9?auto=format&fit=crop&w=1400&q=85',
    alt: 'Χωριάτικη σαλάτα',
    caption: 'Χωριάτικη Σαλάτα',
  },
  {
    id: 'seafood-pasta',
    thumb:
      'https://images.unsplash.com/photo-1600699899970-b1c9fadd8f9e?auto=format&fit=crop&w=700&q=80',
    full: 'https://images.unsplash.com/photo-1600699899970-b1c9fadd8f9e?auto=format&fit=crop&w=1400&q=85',
    alt: 'Θαλασσινά ζυμαρικά',
    caption: 'Θαλασσινά Ζυμαρικά',
  },
  {
    id: 'wine-sunset',
    thumb:
      'https://images.unsplash.com/photo-1620650135353-5d0cb004bf85?auto=format&fit=crop&w=700&q=80',
    full: 'https://images.unsplash.com/photo-1620650135353-5d0cb004bf85?auto=format&fit=crop&w=1400&q=85',
    alt: 'Ποτήρι κρασί ηλιοβασίλεμα',
    caption: 'Απόγευμα στη Θάλασσα',
  },
  {
    id: 'boats-marina',
    thumb:
      'https://images.unsplash.com/photo-1744799163503-74036eff6027?auto=format&fit=crop&w=900&q=80&sat=-20',
    full: 'https://images.unsplash.com/photo-1744799163503-74036eff6027?auto=format&fit=crop&w=1800&q=85&sat=-20',
    alt: 'Σκάφη στη μαρίνα',
    caption: 'Θέα στα Σκάφη',
    span2: true,
  },
];
