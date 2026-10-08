export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: "Burgers" | "Pizzas" | "Sides" | "Drinks";
  image: string;
}

export const menu: MenuItem[] = [
  {
    id: "b1",
    name: "The Habib Classic",
    description: "Double beef patties, cheddar, caramelized onions, secret sauce, brioche bun.",
    price: 12.99,
    category: "Burgers",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=80",
  },
  {
    id: "b2",
    name: "Spicy Fire Burger",
    description: "Smoked jalapeño patty, pepper jack, chipotle mayo, crispy onion rings.",
    price: 13.99,
    category: "Burgers",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=800&q=80",
  },
  {
    id: "b3",
    name: "Truffle Mushroom",
    description: "Half-pound beef, truffle aioli, sautéed wild mushrooms, swiss, brioche.",
    price: 14.99,
    category: "Burgers",
    image: "https://images.unsplash.com/photo-1532443980476-529e43b7a40e?w=800&q=80",
  },
  {
    id: "p1",
    name: "Supreme Pepperoni",
    description: "Hand-tossed crust, double pepperoni, mozzarella, marinara, herbs.",
    price: 15.49,
    category: "Pizzas",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&q=80",
  },
  {
    id: "p2",
    name: "BBQ Chicken",
    description: "Grilled chicken, smoky BBQ sauce, red onion, roasted corn, mozzarella.",
    price: 14.99,
    category: "Pizzas",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80",
  },
  {
    id: "p3",
    name: "Veggie Supreme",
    description: "Bell peppers, olives, mushrooms, spinach, sun-dried tomatoes, mozzarella.",
    price: 13.49,
    category: "Pizzas",
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&q=80",
  },
  {
    id: "s1",
    name: "Golden Fries",
    description: "Hand-cut potatoes, double fried, sea salt, served with ketchup.",
    price: 4.99,
    category: "Sides",
    image: "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?w=800&q=80",
  },
  {
    id: "s2",
    name: "Onion Rings",
    description: "Battered sweet onion rings, crispy golden, house dipping sauce.",
    price: 5.49,
    category: "Sides",
    image: "https://images.unsplash.com/photo-1560717789-0ac7c58ac90a?w=800&q=80",
  },
  {
    id: "s3",
    name: "Spicy Wedges",
    description: "Skin-on potato wedges, smoked paprika, garlic, herbs, ranch dip.",
    price: 5.99,
    category: "Sides",
    image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=800&q=80",
  },
  {
    id: "d1",
    name: "Classic Cola",
    description: "Ice-cold 500ml, perfect with burgers.",
    price: 2.49,
    category: "Drinks",
    image: "https://images.unsplash.com/photo-1622483767028-3f66f32a156d?w=800&q=80",
  },
  {
    id: "d2",
    name: "Fresh Lemonade",
    description: "Cold-pressed lemons, mint, sparkling water, 330ml.",
    price: 3.49,
    category: "Drinks",
    image: "https://images.unsplash.com/photo-1513558161293-cdfe92f4a745?w=800&q=80",
  },
  {
    id: "d3",
    name: "Vanilla Shake",
    description: "Creamy vanilla, whipped cream, cherry, 450ml.",
    price: 5.99,
    category: "Drinks",
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800&q=80",
  },
];
