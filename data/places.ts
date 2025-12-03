// data/places.ts
export type CafePlace = {
    id: string;
    name: string;
    address: string;
    district: string;
    vibe: string;
    studyAtmosphere: string[];
    wifi: boolean;
    outlets: boolean;
    food: string[];
    hours: string;
    tags: string[];
    coords?: { latitude: number; longitude: number }; // facultatif
  
    // 🔽 nouveaux champs "mini résumé"
    rating?: number;                     // ex. 4.7
    walkMinutes?: number;                // temps de marche approximatif
    priceLevel?: '$' | '$$' | '$$$';     // niveau de prix
  };
  
  export const PLACES: CafePlace[] = [
    {
      id: "savsav",
      name: "Savsav",
      address: "780 Avenue Brewster",
      district: "Saint-Henri",
      vibe: "Grand local industriel, chaleureux, très lumineux",
      studyAtmosphere: [
        "Calme en semaine",
        "Plus brunch/social le week-end",
        "Beaucoup de grandes tables et bancs",
        "Super pour travail en groupe",
      ],
      wifi: true,
      outlets: true,
      food: ["Brunch", "Bols", "Pâtisseries", "Café de spécialité"],
      hours: "8h–16h semaine, 9h–16h fin de semaine",
      tags: ["Aesthetic", "Group work", "Cowork-friendly", "Saint-Henri"],
      coords: { latitude: 45.47957, longitude: -73.58614 },
  
      rating: 4.8,
      walkMinutes: 7,
      priceLevel: "$$",
    },
  
    {
      id: "accio",
      name: "Accio Cup",
      address: "2155 Rue Mackay",
      district: "Downtown / Concordia",
      vibe: "Petit café asiatique cosy, ambiance magical-fantasy",
      studyAtmosphere: [
        "Très calme pour étudiants Concordia",
        "Petite place → parfait solo/duo",
      ],
      wifi: true,
      outlets: true,
      food: ["Matcha", "Tiramisu latte", "Bubble tea", "Desserts asiatiques"],
      hours: "11h–20h tous les jours",
      tags: ["Bubble tea", "Concordia", "Cozy corner", "Dessert date"],
      coords: { latitude: 45.49743, longitude: -73.57882 },
  
      rating: 4.7,
      walkMinutes: 4,
      priceLevel: "$$",
    },
  
    {
      id: "constance",
      name: "Café Constance (Bazin)",
      address: "Édifice Wilder, Quartier des spectacles",
      district: "Downtown / QDS",
      vibe: "Café chic dans un hall culturel, design élégant",
      studyAtmosphere: [
        "Calme en journée",
        "Parfait pour laptop solo ou avec un ami",
      ],
      wifi: true,
      outlets: true,
      food: ["Viennoiseries", "Croque-monsieur", "Brunch français", "Desserts"],
      hours: "Cuisine 16h-19h30 selon jours, café ~17h–20h",
      tags: ["French café", "Chic", "Before-show study"],
      coords: { latitude: 45.50863, longitude: -73.56547 },
  
      rating: 4.6,
      walkMinutes: 6,
      priceLevel: "$$",
    },
  
    {
      id: "crew",
      name: "Crew Collective & Café",
      address: "360 Rue Saint-Jacques",
      district: "Vieux-Montréal",
      vibe: "Ancienne banque monumentale → vibes cathédrale productive",
      studyAtmosphere: [
        "Mix café / coworking",
        "Ambiance très laptop-friendly",
        "Pods calmes et salles de réunion",
      ],
      wifi: true,
      outlets: true,
      food: ["Café 3e vague", "Pâtisseries (Hof Kelsten)", "Lunchs"],
      hours: "Ouvert 7/7, ~8h–16h à 8h–21h selon jours",
      tags: ["Coworking", "Iconic", "Long sessions"],
      coords: { latitude: 45.50363, longitude: -73.55953 },
  
      rating: 4.7,
      walkMinutes: 5,
      priceLevel: "$$",
    },
  
    {
      id: "tranquille",
      name: "Café Tranquille",
      address: "1442 Rue Clark",
      district: "Quartier des spectacles",
      vibe: "Grand salon chill, lumière naturelle, plantes",
      studyAtmosphere: [
        "Parfait pour lire/coder",
        "Vue patinoire/festivals selon saison",
      ],
      wifi: true,
      outlets: true,
      food: ["Café Pista", "Snacks artisanaux", "Options vegan & SG"],
      hours: "Horaires variables selon saison/événements",
      tags: ["Public space", "Calm", "Study with view"],
      coords: { latitude: 45.50882, longitude: -73.56629 },
  
      rating: 4.5,
      walkMinutes: 3,
      priceLevel: "$",
    },
  
    {
      id: "tommy",
      name: "Tommy Café",
      address: "Plusieurs succursales (ex. Notre-Dame)",
      district: "Vieux-Montréal",
      vibe: "Ultra instagrammable, blanc + plantes suspendues",
      studyAtmosphere: [
        "Très populaire → bruyant",
        "Possible en semaine hors rush",
      ],
      wifi: true,
      outlets: false,
      food: ["Brunch", "Salades", "Tartines", "Pâtisseries"],
      hours: "Variable selon succursale",
      tags: ["Brunch", "Cute pics", "Trendy"],
      coords: { latitude: 45.5038, longitude: -73.5598 }, // Notre-Dame location
  
      rating: 4.4,
      walkMinutes: 6,
      priceLevel: "$$",
    },
  
    {
      id: "amea",
      name: "Améa Café",
      address: "Maison Alcan, Sherbrooke O.",
      district: "Golden Square Mile",
      vibe: "Cafétéria haut de gamme, moderne et lumineuse",
      studyAtmosphere: [
        "Calme",
        "Beaucoup de places assises",
        "Pensé pour laptop sessions",
      ],
      wifi: true,
      outlets: true,
      food: ["Café", "Lunchs", "Collations"],
      hours: "Jours de semaine principalement",
      tags: ["Downtown", "McGill-friendly", "Long laptop sessions"],
      coords: { latitude: 45.50241, longitude: -73.57835 },
  
      rating: 4.6,
      walkMinutes: 8,
      priceLevel: "$$",
    },
  ];
  