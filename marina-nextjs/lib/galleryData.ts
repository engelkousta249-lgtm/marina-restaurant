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
    id: 'terrace-night',
    thumb: '/gallery-1.jpg',
    full: '/gallery-1.jpg',
    alt: 'Η βεράντα του Marina Restaurant Cafe το βράδυ, με φωτισμό και κόσμο',
    caption: 'Βραδινή Ατμόσφαιρα',
    span2: true,
    row2: true,
  },
  {
    id: 'souvlaki-fries',
    thumb: '/gallery-2.jpg',
    full: '/gallery-2.jpg',
    alt: 'Souvlaki με πατάτες τηγανητές',
    caption: 'Souvlaki Πιάτο',
  },
  {
    id: 'gyros-plate',
    thumb: '/gallery-3.jpg',
    full: '/gallery-3.jpg',
    alt: 'Πιάτο με γύρο, τζατζίκι, σαλάτα και πατάτες',
    caption: 'Πιάτο Γύρου',
  },
  {
    id: 'sea-view-terrace',
    thumb: '/gallery-4.jpg',
    full: '/gallery-4.jpg',
    alt: 'Επισκέπτες απολαμβάνουν τη θέα στη θάλασσα από τη βεράντα',
    caption: 'Θέα στη Θάλασσα',
  },
  {
    id: 'iced-coffee',
    thumb: '/gallery-5.jpg',
    full: '/gallery-5.jpg',
    alt: 'Παγωμένος καφές φραπέ',
    caption: 'Καφές στην Παραλία',
  },
  {
    id: 'entrance-sign',
    thumb: '/gallery-6.jpg',
    full: '/gallery-6.jpg',
    alt: 'Η είσοδος του καταστήματος με φωτεινή επιγραφή',
    caption: 'Η Είσοδός Μας',
    span2: true,
  },
];