// TEMPLATE: business content file — menu/service items, testimonials & core images.
// Each category: { id, label, note?, items: [{ name, price, desc?, tag? }] }
export const CATEGORIES = [
  {
    id: "banh-mi",
    label: "Bánh Mì & Rolls",
    note: "Baked rolls, filled to order",
    items: [
      { name: "Roast Crackle Bánh Mì", price: "14.50", tag: "No.1 Most Liked", desc: "Crackle-skin pork with pickled carrot, cucumber, coriander, spring onion, fried onion, mayo & pâté." },
      { name: "BBQ Pork Roll", price: "11.00", tag: "92% Loved", desc: "Grilled BBQ pork sausage, pickles, herbs, fried onion, mayo & pâté with soy and hoisin." },
      { name: "Classic Vietnamese Pork Roll", price: "11.00", desc: "Three traditional cold meats, pickled carrot & cucumber, coriander, spring onion & pâté." },
      { name: "BBQ Chicken Bánh Mì", price: "11.00", desc: "Sliced BBQ chicken, pickled vegetables, herbs, mayo & pâté with soy and hoisin." },
      { name: "Marinated Tofu Roll", price: "11.00", tag: "98% Loved", desc: "Marinated tofu, pickled carrot & cucumber, coriander, spring onion, mayo, soy & hoisin." },
    ],
  },
  {
    id: "hot-pastries",
    label: "Hot Pastries",
    note: "Baked fresh through the day",
    items: [
      { name: "Beef & Cheese Pie", price: "6.50", desc: "Slow-cooked beef and melted cheese in golden pastry. Sauce included." },
      { name: "Beef, Cheese & Bacon Pie", price: "6.50", desc: "Rich beef with cheese and smoky bacon. Sauce included." },
      { name: "Plain Beef Pie", price: "6.50", desc: "The classic — chunky beef in flaky pastry. Sauce included." },
      { name: "Beef & Onion Pie", price: "6.50", desc: "Tender beef with caramelised onion. Sauce included." },
    ],
  },
  {
    id: "pastries",
    label: "Bakery & Donuts",
    items: [
      { name: "Long John", price: "5.50", desc: "Iced, cream-filled and dangerously good." },
      { name: "Nutella Donut", price: "5.50", tag: "96% Loved", desc: "Pillowy donut, generously filled with Nutella." },
      { name: "Custard Donut", price: "5.50", desc: "Filled with silky house custard." },
      { name: "Jam Donut", price: "4.50", desc: "Sugar-dusted, jam-filled classic." },
      { name: "Assorted Danish", price: "5.50", desc: "Buttery, laminated, changes daily." },
      { name: "Bread Rolls (6 pack)", price: "5.50", tag: "Take Home", desc: "Our signature crisp rolls — baked daily." },
      { name: "Cheese Sticks", price: "3.00", desc: "Crunchy, cheesy, moreish." },
    ],
  },
  {
    id: "desserts",
    label: "Cakes & Slices",
    items: [
      { name: "New York Cheesecake", price: "6.50", desc: "Creamy baked cheesecake, done properly." },
      { name: "Cookies & Cream Cheesecake", price: "6.50", tag: "94% Loved", desc: "Cookies-and-cream base topped with chocolate mousse and an Oreo." },
      { name: "Mixed Berries Cheesecake", price: "6.50", tag: "100% Loved", desc: "Creamy baked cheesecake crowned with mixed berries." },
      { name: "Vanilla Slice", price: "5.90", desc: "The Aussie icon — crisp pastry, thick vanilla custard." },
      { name: "Hedgehog Slice", price: "5.90", desc: "Dense chocolate biscuit slice." },
      { name: "Caramel Slice", price: "5.90", desc: "Golden caramel, chocolate top, shortbread base." },
      { name: "Cherry Slice", price: "5.90", desc: "Sweet cherry over buttery base." },
      { name: "Maltesers Mud", price: "6.50", desc: "Mud cake loaded with Maltesers." },
      { name: "Custard Tarts", price: "5.00", desc: "Silky custard in crisp shells." },
      { name: "Fruit Flan", price: "6.50", tag: "100% Loved", desc: "Fresh fruit over vanilla cream." },
    ],
  },
  {
    id: "drinks",
    label: "Coffee & Drinks",
    items: [
      { name: "Vietnamese Style Iced Coffee", price: "7.00", tag: "House Signature", desc: "Slow-dripped robusta over condensed milk and ice — bold, sweet, unforgettable." },
      { name: "Latte", price: "6.00" },
      { name: "Cappuccino", price: "6.00" },
      { name: "Chai Latte", price: "6.00" },
      { name: "Dirty Chai", price: "6.00" },
      { name: "Hot Chocolate", price: "6.00" },
      { name: "Coffee", price: "5.00" },
      { name: "Coke / Coke No Sugar", price: "4.50" },
      { name: "Water", price: "4.50" },
    ],
  },
];

export const REVIEWS = [
  { quote: "Hands down THE BEST bánh mì! Always buy from here and it's top notch!!", name: "Emma F." },
  { quote: "Best bánh mì in the north.", name: "Samantha T." },
  { quote: "Delicious pork rolls — fresh, clean flavours.", name: "Robyn C." },
  { quote: "Best I've had here. Yum, and thanks whoever made my lunch. Great job.", name: "Amanda M." },
  { quote: "Their bánh mì is outstanding!", name: "Francesca E." },
  { quote: "Pork rolls are amazing!", name: "Joseph M." },
];

export const IMAGES = {
  hero: "https://images.unsplash.com/photo-1587241321921-91a834d6d191?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwxfHxhcnRpc2FuJTIwYmFrZXJ5JTIwYmFraW5nfGVufDB8fHx8MTc4Njc2Nzc4M3ww&ixlib=rb-4.1.0&q=85",
  banhMi: "https://images.unsplash.com/photo-1700937244987-92488ab2ada5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDN8MHwxfHNlYXJjaHwxfHxiYW5oJTIwbWklMjBzYW5kd2ljaHxlbnwwfHx8fDE3ODY3Njc3ODN8MA&ixlib=rb-4.1.0&q=85",
  pastries: "https://images.unsplash.com/photo-1483695028939-5bb13f8648b0?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwzfHxhcnRpc2FuJTIwYmFrZXJ5JTIwYmFraW5nfGVufDB8fHx8MTc4Njc2Nzc4M3ww&ixlib=rb-4.1.0&q=85",
  coffee: "https://images.unsplash.com/photo-1641659736749-8bbae305e475?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA0MTJ8MHwxfHNlYXJjaHwyfHx2aWV0bmFtZXNlJTIwaWNlZCUyMGNvZmZlZXxlbnwwfHx8fDE3ODY3Njc3ODN8MA&ixlib=rb-4.1.0&q=85",
};
