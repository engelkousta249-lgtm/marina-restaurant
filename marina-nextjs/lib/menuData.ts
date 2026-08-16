export type Dish = {
  name: string;
  note: string;
  price: string;
};

export type FeaturedDish = {
  kicker: string;
  name: string;
  price: string;
  description: string;
  image: string;
  alt: string;
};

export type MenuCategory = {
  id: string;
  label: string;
  featured?: FeaturedDish;
  dishes: Dish[];
};

export const menuCategories: MenuCategory[] = [
  {
    id: 'seafood',
    label: 'Seafood & Fish',
    featured: {
      kicker: "Πιάτο Ημέρας · Chef's Selection",
      name: 'Ψάρι Ημέρας στη Σχάρα',
      price: '€ 19.50 / κιλό',
      description:
        'Φρέσκο ψάρι από τους ψαράδες της περιοχής, ψημένο στα κάρβουνα με ελαιόλαδο Κρήτης, λεμόνι και βότανα. Σερβίρεται με εποχιακά λαχανικά.',
         image: '/salmon.jpg',        
          alt: 'Ψητός σολομός με λαχανικά',   
        },
    dishes: [
      { name: 'Χταπόδι στη Σχάρα', note: 'Grilled octopus, fava, capers', price: '€16.00' },
      { name: 'Γαρίδες Σαγανάκι', note: 'Shrimp saganaki, tomato, feta, ouzo', price: '€15.50' },
    ],
  },
  
  {
    id: 'grill',
    label: 'Meat & Grill',
    dishes: [
      { name: 'Παϊδάκια Αρνίσια', note: 'Grilled lamb chops, herbs', price: '€18.50' },
      { name: 'Χοιρινό Souvlaki Πιάτο', note: 'Pork souvlaki plate, pita, fries', price: '€12.00' },
      { name: 'Κοτόπουλο Σχάρας', note: 'Grilled chicken fillet, lemon', price: '€11.50' },
      { name: 'Μπιφτέκι Κρητικό', note: 'Cretan-style beef patty, graviera', price: '€12.50' },
      { name: 'Χοιρινό Filetto ai Ferri', note: 'Grilled pork tenderloin, mustard sauce', price: '€14.00' },
      { name: 'Κοντοσούβλι', note: 'Spit-roasted pork, oven potatoes', price: '€13.50' },
    ],
  },
  {
    id: 'pizza',
    label: 'Pizza',
    dishes: [
      { name: 'Margherita', note: 'San Marzano tomato, buffalo mozzarella', price: '€9.50' },
      { name: 'Marinara ai Frutti di Mare', note: 'Seafood, garlic, cherry tomato', price: '€14.50' },
      { name: 'Quattro Formaggi', note: 'Four cheese, honey drizzle', price: '€11.50' },
      { name: 'Prosciutto e Funghi', note: 'Ham, mushroom, mozzarella', price: '€11.00' },
      { name: 'Diavola Piccante', note: 'Spicy salami, chili oil', price: '€11.50' },
      { name: 'Vegetariana', note: 'Seasonal roasted vegetables', price: '€10.00' },
    ],
  },
  {
    id: 'drinks',
    label: 'Drinks & Coffee',
    dishes: [
      { name: 'Ελληνικός Καφές', note: 'Greek coffee', price: '€2.80' },
      { name: 'Espresso / Freddo', note: 'Espresso, freddo espresso or cappuccino', price: '€3.20' },
      { name: 'Κρασί Κρήτης (ποτήρι)', note: 'Cretan wine, glass — red/white/rosé', price: '€5.50' },
      { name: 'Cocktail Signature', note: 'Marina sunset spritz', price: '€9.50' },
      { name: 'Ρακί / Τσικουδιά', note: 'Local raki', price: '€3.50' },
      { name: 'Φρέσκος Χυμός', note: 'Fresh orange or seasonal juice', price: '€4.50' },
    ],
  },
];
