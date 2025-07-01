import React from "react";

const accessories = [
  {
    id: 1,
    name: "Vega Cruiser Full-Face Helmet",
    brand: "Vega",
    type: "Helmet",
    price: 1899,
    description:
      "A durable and stylish full-face helmet offering excellent protection.",
    imgURL: "https://placehold.co/600x400/3498db/ffffff?text=Vega+Helmet",
  },
  {
    id: 2,
    name: "Steelbird Air-Flow Open-Face Helmet",
    brand: "Steelbird",
    type: "Helmet",
    price: 1450,
    description: "Lightweight open-face helmet with superior ventilation.",
    imgURL: "https://placehold.co/600x400/2ecc71/ffffff?text=Steelbird+Helmet",
  },
  {
    id: 3,
    name: "AutoFurnish Leatherette Seat Cover",
    brand: "AutoFurnish",
    type: "Seat Cover",
    price: 799,
    description: "High-quality leatherette seat cover that is water-resistant.",
    imgURL: "https://placehold.co/600x400/e74c3c/ffffff?text=Seat+Cover",
  },
  {
    id: 4,
    name: "BOBO Jaw-Grip Mobile Holder",
    brand: "BOBO",
    type: "Mobile Holder",
    price: 1200,
    description:
      "Sturdy and secure jaw-grip mobile holder with a built-in fast charger.",
    imgURL: "https://placehold.co/600x400/f39c12/ffffff?text=Mobile+Holder",
  },
  {
    id: 5,
    name: "Royal Enfield Touring Seat",
    brand: "Royal Enfield",
    type: "Seat Cover",
    price: 3500,
    description: "Ergonomically designed touring seat with dual-density foam.",
    imgURL: "https://placehold.co/600x400/9b59b6/ffffff?text=RE+Seat",
  },
  {
    id: 6,
    name: "Studds Downtown Full-Face Helmet",
    brand: "Studds",
    type: "Helmet",
    price: 1650,
    description: "Aerodynamic design with a quick-release chin strap.",
    imgURL: "https://placehold.co/600x400/34495e/ffffff?text=Studds+Helmet",
  },
  {
    id: 7,
    name: "Generic Waterproof Bike Cover",
    brand: "Generic",
    type: "Cover",
    price: 650,
    description:
      "Durable, all-weather bike cover made from high-quality polyester.",
    imgURL: "https://placehold.co/600x400/1abc9c/ffffff?text=Bike+Cover",
  },
  {
    id: 8,
    name: "Generic Universal Claw-Grip Mobile Holder",
    brand: "Generic",
    type: "Mobile Holder",
    price: 899,
    description: "A versatile claw-grip holder that provides a strong grip.",
    imgURL: "https://placehold.co/600x400/f1c40f/ffffff?text=Claw+Holder",
  },
  {
    id: 9,
    name: "AutoFurnish Mesh Ventilated Seat Cover",
    brand: "AutoFurnish",
    type: "Seat Cover",
    price: 499,
    description: "Breathable mesh design to keep you cool during hot rides.",
    imgURL: "https://placehold.co/600x400/e67e22/ffffff?text=Mesh+Seat",
  },
  {
    id: 10,
    name: "Rynox Stealth Evo Riding Jacket",
    brand: "Rynox",
    type: "Riding Gear",
    price: 8950,
    description: "3-layer all-weather jacket with CE level 2 protectors.",
    imgURL: "https://placehold.co/600x400/7f8c8d/ffffff?text=Rynox+Jacket",
  },
  {
    id: 11,
    name: "Axor Apex Venomous Helmet",
    brand: "Axor",
    type: "Helmet",
    price: 4500,
    description:
      "Dual certified helmet with stunning graphics and internal sun visor.",
    imgURL: "https://placehold.co/600x400/c0392b/ffffff?text=Axor+Helmet",
  },
  {
    id: 12,
    name: "Viaterra Claw Tail Bag",
    brand: "Viaterra",
    type: "Luggage",
    price: 3999,
    description:
      "Expandable tail bag with 72 liters capacity, includes rain cover.",
    imgURL: "https://placehold.co/600x400/8e44ad/ffffff?text=Viaterra+Bag",
  },
  {
    id: 13,
    name: "Motul C2 Chain Lube",
    brand: "Motul",
    type: "Maintenance",
    price: 550,
    description: "Road-use chain lube, sticky and water-resistant.",
    imgURL: "https://placehold.co/600x400/2980b9/ffffff?text=Motul+Lube",
  },
  {
    id: 14,
    name: "Solace Full Gauntlet Riding Gloves",
    brand: "Solace",
    type: "Riding Gear",
    price: 3200,
    description:
      "Full leather construction with carbon fiber knuckle protectors.",
    imgURL: "https://placehold.co/600x400/27ae60/ffffff?text=Solace+Gloves",
  },
  {
    id: 15,
    name: "Grand Pitstop Puncture Kit",
    brand: "Grand Pitstop",
    type: "Maintenance",
    price: 1500,
    description: "Tubeless tyre puncture repair kit with CO2 cartridges.",
    imgURL: "https://placehold.co/600x400/d35400/ffffff?text=Puncture+Kit",
  },
  {
    id: 16,
    name: "Yamaha Performance Exhaust",
    brand: "Yamaha",
    type: "Performance",
    price: 7500,
    description: "Official performance exhaust for enhanced sound and power.",
    imgURL: "https://placehold.co/600x400/16a085/ffffff?text=Yamaha+Exhaust",
  },
  {
    id: 17,
    name: "Sena 5S Bluetooth Intercom",
    brand: "Sena",
    type: "Electronics",
    price: 12500,
    description:
      "HD speakers and a two-way HD intercom system for communication.",
    imgURL: "https://placehold.co/600x400/f39c12/ffffff?text=Sena+Intercom",
  },
  {
    id: 18,
    name: "MT Thunder3 SV Helmet",
    brand: "MT",
    type: "Helmet",
    price: 5600,
    description: "ECE and DOT certified helmet with multi-density EPS.",
    imgURL: "https://placehold.co/600x400/3498db/ffffff?text=MT+Helmet",
  },
  {
    id: 19,
    name: "3M Bike Care Kit",
    brand: "3M",
    type: "Maintenance",
    price: 1299,
    description:
      "A complete kit including shampoo, wax, and micro-fiber cloth.",
    imgURL: "https://placehold.co/600x400/e74c3c/ffffff?text=3M+Kit",
  },
  {
    id: 20,
    name: "DSG Evo 2 Pro Riding Pants",
    brand: "DSG",
    type: "Riding Gear",
    price: 6500,
    description:
      "Abrasion-resistant textile pants with CE certified knee armor.",
    imgURL: "https://placehold.co/600x400/9b59b6/ffffff?text=DSG+Pants",
  },
  {
    id: 21,
    name: "Vega Bolt Bunny Helmet",
    brand: "Vega",
    type: "Helmet",
    price: 1250,
    description: "Open face helmet with a unique bunny graphic design.",
    imgURL: "https://placehold.co/600x400/3498db/ffffff?text=Vega+Bolt",
  },
  {
    id: 22,
    name: "Steelbird SBA-1 Free Live Helmet",
    brand: "Steelbird",
    type: "Helmet",
    price: 2100,
    description: "Full face helmet with smoke visor and clear visor.",
    imgURL: "https://placehold.co/600x400/2ecc71/ffffff?text=Steelbird+SBA-1",
  },
  {
    id: 23,
    name: "AutoFurnish Universal Magnetic Tank Bag",
    brand: "AutoFurnish",
    type: "Luggage",
    price: 1499,
    description: "Compact tank bag with strong magnets and a clear map pocket.",
    imgURL: "https://placehold.co/600x400/e74c3c/ffffff?text=Tank+Bag",
  },
  {
    id: 24,
    name: "BOBO Waterproof Mobile Holder",
    brand: "BOBO",
    type: "Mobile Holder",
    price: 1550,
    description:
      "Fully enclosed waterproof mobile holder for all-weather navigation.",
    imgURL: "https://placehold.co/600x400/f39c12/ffffff?text=BOBO+Waterproof",
  },
  {
    id: 25,
    name: "Royal Enfield Classic 350 Seat",
    brand: "Royal Enfield",
    type: "Seat Cover",
    price: 2800,
    description: "Low ride seat for easier ground reach on Classic 350.",
    imgURL: "https://placehold.co/600x400/9b59b6/ffffff?text=RE+Classic+Seat",
  },
  // ... Adding 175 more items to reach 200
  ...Array.from({ length: 175 }, (_, i) => {
    const brands = [
      "Vega",
      "Steelbird",
      "Studds",
      "Axor",
      "MT",
      "Rynox",
      "Solace",
      "BOBO",
      "Generic",
      "Royal Enfield",
      "Yamaha",
      "Viaterra",
      "Motul",
    ];
    const types = [
      "Helmet",
      "Riding Gear",
      "Mobile Holder",
      "Seat Cover",
      "Luggage",
      "Maintenance",
      "Performance",
      "Cover",
    ];
    const brand = brands[i % brands.length];
    const type = types[i % types.length];
    const price = 1000 + ((i * 150) % 8000);
    return {
      id: 26 + i,
      name: `${brand} ${type} Model #${i + 1}`,
      brand: brand,
      type: type,
      price: price,
      description: `This is a high-quality ${type} from ${brand}. Model #${
        i + 1
      } offers great value and performance.`,
      imgURL: `https://placehold.co/600x400/${i % 9}${i % 8}${i % 7}${i % 6}${
        i % 5
      }${i % 4}/ffffff?text=${encodeURIComponent(brand)}+${encodeURIComponent(
        type
      )}`,
    };
  }),
];

export default accessories;
