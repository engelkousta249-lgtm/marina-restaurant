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
      image:
        'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=1200&q=80',
      alt: 'Ψητό ψάρι ημέρας με λαχανικά',
    },
    dishes: [
      { name: 'Χταπόδι στη Σχάρα', note: 'Grilled octopus, fava, capers', price: '€16.00' },
      { name: 'Γαρίδες Σαγανάκι', note: 'Shrimp saganaki, tomato, feta, ouzo', price: '€15.50' },
      { name: 'Καλαμάρι Τηγανητό', note: 'Crispy fried calamari, lemon aioli', price: '€13.00' },
      { name: 'Μύδια Σαγανάκι', note: 'Mussels in white wine & tomato', price: '€12.50' },
      { name: 'Πιάτο Θαλασσινών', note: 'Mixed seafood platter for two', price: '€38.00' },
      { name: 'Σολομός Σχάρας', note: 'Grilled salmon, citrus butter', price: '€17.00' },
    ],
  },
  {
    id: 'pasta',
    label: 'Pasta & Italian',
    featured: {
      kicker: 'Ιταλικό Κλασικό · House Favorite',
      name: 'Linguine allo Scoglio',
      price: '€ 17.00',
      description:
        'Χειροποίητα linguine με γαρίδες, μύδια, καλαμάρι και ντοματίνια, σε ελαφριά σάλτσα λευκού κρασιού.',
      image:
        'https://images.unsplash.com/photo-1600699899970-b1c9fadd8f9e?auto=format&fit=crop&w=1200&q=80',
      alt: 'Θαλασσινή ζυμαρικά με ψάρι',
    },
    dishes: [
      { name: 'Spaghetti Vongole', note: 'Clams, garlic, white wine, parsley', price: '€16.50' },
      { name: 'Risotto ai Frutti di Mare', note: 'Seafood risotto, saffron', price: '€17.50' },
      { name: 'Tagliatelle al Tartufo', note: 'Truffle cream, parmesan', price: '€15.00' },
      { name: "Penne all'Arrabbiata", note: 'Spicy tomato, garlic, chili', price: '€11.50' },
      { name: 'Lasagna della Casa', note: 'Beef ragù, béchamel', price: '€13.50' },
      { name: 'Gnocchi al Gorgonzola', note: 'Potato gnocchi, blue cheese, walnut', price: '€12.50' },
    ],
  },
  {
    id: 'salads',
    label: 'Appetizers & Salads',
    featured: {
      kicker: 'Παραδοσιακό · Cretan Classic',
      name: 'Χωριάτικη Σαλάτα',
      price: '€ 9.50',
      description:
        'Ντομάτα, αγγούρι, κρεμμύδι, πιπεριά, ελιές Καλαμών και φέτα Κρήτης, με άφθονο ελαιόλαδο και ρίγανη.',
      image:
        'https://images.unsplash.com/photo-1745126010010-da1c6f5300a9?auto=format&fit=crop&w=1200&q=80',
      alt: 'Χωριάτικη ελληνική σαλάτα',
    },
    dishes: [
      { name: 'Ντάκος Κρητικός', note: 'Barley rusk, tomato, feta, olive oil', price: '€8.50' },
      { name: 'Σαλάτα Rocket & Παρμεζάνα', note: 'Arugula, parmesan, pear, walnuts', price: '€9.00' },
      { name: 'Πιάτο Ορεκτικών', note: 'Mixed dips, pita, olives', price: '€11.00' },
      { name: 'Κολοκυθοκεφτέδες', note: 'Zucchini fritters, yogurt sauce', price: '€8.00' },
      { name: 'Caprese di Bufala', note: 'Buffalo mozzarella, tomato, basil', price: '€10.50' },
      { name: 'Σαγανάκι Τυρί', note: 'Fried cheese, honey, sesame', price: '€8.50' },
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
