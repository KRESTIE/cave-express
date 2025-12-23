import { Product, ProductType, PriceCategory, Experience } from './types';

/* 
  ================ GUIDE D'UTILISATION ================
  
  POUR AJOUTER UNE IMAGE :
  1. Créez un dossier 'public' à la racine du projet, puis un dossier 'images' dedans.
  2. Mettez votre photo (ex: mon-vin.jpg) dans ce dossier.
  3. Dans le champ image ci-dessous, mettez : '/images/mon-vin.jpg'
  4. SINON, vous pouvez coller un lien internet direct (https://...)

  LES CATÉGORIES DE PRIX (pour la couleur du badge) :
  - PriceCategory.GREEN  : Vins < 40 CHF
  - PriceCategory.ORANGE : Vins < 100 CHF
  - PriceCategory.RED    : Vins > 100 CHF

  LES TYPES DE VIN :
  - ProductType.WHITE
  - ProductType.RED
  - ProductType.ROSE
  - ProductType.CHAMPAGNE
*/

export const PRODUCTS: Product[] = [
  // --- MAISON GILLIARD ---
  {
    id: 'gilliard-fendant',
    name: 'Fendant Les Murettes',
    producer: 'Maison Gilliard',
    type: ProductType.WHITE,
    price: 23,
    category: PriceCategory.GREEN,
    description: 'Le Fendant par excellence. Un vin mythique du Valais.',
    // Exemple avec lien internet (à remplacer par votre image locale si besoin)
    image: 'fendant.png', 
    details: {
      cepage: 'fendant',
      appellation: 'AOC Valais',
      nose: 'Fleurs blanches, tilleul, notes de fruits frais',
      mouth: 'Remarquable attaque fruitée, notes minérales, vif, intense',
      analysis: '12.7% vol. alcool, Contient des sulfites',
      pairing: 'Apéritif, entrées, poissons, mets au fromage',
      aging: '3 ans'
    }
  },
  {
    id: 'gilliard-dole',
    name: 'Dôle des Monts',
    producer: 'Maison Gilliard',
    type: ProductType.RED,
    price: 24.60,
    category: PriceCategory.GREEN,
    description: 'L\'harmonie parfaite entre le Pinot Noir et le Gamay. Une référence incontournable.',
    image: 'dole-des-monts.jpg',
    details: {
      cepage: 'Pinot Noir, Gamay',
      appellation: 'AOC Valais',
      nose: 'Fruits rouges, fraise, framboise, cerise',
      mouth: 'Attaque fruitée, tannins fondus, très belle rondeur, soyeux',
      analysis: '13.5% vol. alcool, Contient des sulfites',
      pairing: 'Viandes rouges et blanches, charcuterie, fromages',
      aging: '4 ans'
    }
  },
    {
    id: 'gilliard-mousseux',
    name: 'Mousseux Porte de Novembre',
    producer: 'Maison Gilliard',
    type: ProductType.CHAMPAGNE,
    price: 25.90,
    category: PriceCategory.GREEN,
    description: 'Dernier-né de la gamme Porte de Novembre, ce mousseux allie fraîcheur, minéralité et une effervescence délicate.',
    image: 'Porte-de-Novembre-Mousseux.png',
    details: {
      cepage: 'Blanc de blanc',
      appellation: 'VdP Suisse',
      nose: 'Fruits du verger, minéral',
      mouth: 'Pétillant, moelleux',
      analysis: '12,8% vol. alcool, Contient des sulfites',
      pairing: 'Apéritif, desserts',
      aging: '3 ans'
    }
  },
  // --- MAISON ROUGE ---
  {
    id: 'maisonrouge-arvine',
    name: 'Petite Arvine',
    producer: 'Maison Rouge',
    type: ProductType.WHITE,
    price: 33.80,
    category: PriceCategory.GREEN,
    description: 'Le roi des vins et le vin des rois',
    image: 'petite-arvine.jpg',
    details: {
      cepage: 'Arvine',
      appellation: 'AOC Valais',
      nose: "Bouquet complexe avec des notes de fruits de la passion, d'agrumes, d'abricots, d'ananas et de melon",
      mouth: "Gras, fruité exotique complexe, dense et vif. Son acidité naturelle et sa note saline",
      analysis: '13.5% vol. alcool, Contient des sulfites',
      pairing: 'Apéritif, plateau de fruits de mer, langouste, homard, foie gras, poisson de mer, fromages salés',
      aging: '5 à 10 ans'
    }
  },
  {
    id: 'maisonrouge-humagne',
    name: 'Humagne Rouge',
    producer: 'Maison Rouge',
    type: ProductType.RED,
    price: 20.80,
    category: PriceCategory.GREEN,
    description: 'Un vin rustique et sauvage, pour les amateurs d\'authenticité.',
    image: 'humagne-rouge.jpg',
    details: {
      cepage: 'Humagne Rouge',
      appellation: 'AOC Valais',
      nose: 'Sous-bois, écorces, violettes, baies des bois',
      mouth: "Belle charpente, rustique, finissant sur une belle vitalité. Quelques années de bouteille lui permettant d'exprimer toute sa splendeur",
      analysis: '12.8% vol. alcool, Contient des sulfites',
      pairing: "Aiguillettes de canard, faisan, entrecôte au poivre, brochettes d'agneau, selle de chamois ou de chevreuil, sanglier, médaillons de cerf, plateau de fromages",
      aging: '5 à 10 ans'
    }
  },
  {
    id: 'maisonrouge-grafion',
    name: 'Lo Grafion Réserve',
    producer: 'Maison Rouge',
    type: ProductType.RED,
    price: 214.50,
    category: PriceCategory.RED,
    description: 'Grand vin de garde créé uniquement les meilleurs années.',
    image: 'lo-grafion-reserve.jpg',
    details: {
      cepage: 'Merlot, Tempranillo',
      appellation: 'Vin de Pays Suisse',
      nose: 'Puissant, arôme épicés',
      mouth: "Ample et concentrée vin de haute tenue",
      analysis: '13.5% vol. alcool, Contient des sulfites',
      pairing: "Vin de gastronomie pour les grandes occasions, viandes rouges",
      aging: '+ 10 ans'
    }
  },
    {
    id: 'maisonrouge-e-boe',
    name: 'È BOÈ BRUT',
    producer: 'Maison Rouge',
    type: ProductType.CHAMPAGNE,
    price: 52.80,
    category: PriceCategory.ORANGE,
    description: 'È BOÈ, les bulles en patois, est un vin mousseux brut provenant du vignoble de Conthey et vinifié selon la tradition champenoise.',
    image: 'e-boe.jpg',
    details: {
      cepage: 'Chardonnay',
      appellation: 'Mousseux',
      nose: 'Fruits exotiques et fleurs',
      mouth: "Équilibré avec une fine structure assortie d'une touche briochée",
      analysis: '12,6% vol. alcool, Contient des sulfites',
      pairing: "En apéritif, entrée et dessert pour les grandes occasions",
      aging: ''
    }
  },
  // --- VINS MAYE ---
  {
    id: 'maye-gamay',
    name: 'Les Mages Gamay',
    producer: 'Fils Maye',
    type: ProductType.RED,
    price: 19.50,
    category: PriceCategory.GREEN,
    description: 'Gourmand et léger Souple et fruité.',
    image: 'gamay_mages.png',
    details: {
      cepage: 'Gamay',
      appellation: 'AOC Valais',
      nose: 'Marc frais qui rapelle la période des vendanges',
      mouth: 'Souple et fruité au palais avec de fins tanins',
      analysis: '12.6% vol. alcool, Contient des sulfites',
      pairing: 'Pizza, plats chauds végétariens, mets automnaux, burgers',
      aging: '3 à 5 ans'
    }
  },
  {
    id: 'maye-syrah',
    name: 'Les Grands Ors Syrah Reserve',
    producer: 'Fils Maye',
    type: ProductType.RED,
    price: 36.40,
    category: PriceCategory.GREEN,
    description: 'Une Syrah puissante, élevée en barrique.',
    image: 'Syrah_grande_reserve.png',
    details: {
      cepage: 'Syrah',
      appellation: 'AOC Valais',
      nose: 'Intense, complexe où se mêlent des épices, baies des bois',
      mouth: 'Volumineux, velouté, poivré, rond et tanins serrés',
      analysis: '14,1% vol. alcool, Contient des sulfites',
      pairing: 'Chasse, viande rouge, grillade, truffes/champignons, plats chaud végétariens',
      aging: '5 à 8 ans'
    }
  },
  {
    id: 'maye-rose',
    name: 'Coffret Les Grands Ors Rosé de Merlot Magnum',
    producer: 'Fils Maye',
    type: ProductType.ROSE,
    price: 67.2,
    category: PriceCategory.ORANGE,
    description: 'Le profil aromatique intense, net et précis, traduit une parfaite maîtrise de la vinification en rosé et met en valeur la typicité du Merlot dans une expression fraîche et élégante.',
    image: 'rose_merlot.jpg',
    details: {
      cepage: 'Merlot',
      appellation: 'AOC Valais',
      nose: "Le nez s'ouvre sur une expression fruitée franche, dominée par des arômes d'abricot mûr et de melon",
      mouth: "L'attacque est fraîche et fruitée, immédiatement séduisante. La texture se révèle friande et ample, portée par une belle richesse et un gras bien intégré",
      analysis: '13,3% vol. alcool',
      pairing: 'Viande blanche/volaille, plats chauds végétariens, fromages légérs',
      aging: '2 à 3 ans'
    }
  },

  
  // =========================================================
  // ↓↓↓ COPIER DEPUIS ICI POUR AJOUTER UN NOUVEAU VIN ↓↓↓
  /*
  {
    id: 'votre-id-unique', // ex: 'mon-vin-rouge'
    name: 'Nom du Vin',
    producer: 'Nom du Producteur',
    type: ProductType.RED, // ou WHITE, ROSE, CHAMPAGNE
    price: 25.00,
    category: PriceCategory.GREEN, // ou ORANGE, RED
    description: 'Courte description qui apparait sur la carte.',
    image: '/images/mon-image.jpg', // ou un lien https://...
    details: {
      cepage: 'Cépage',
      appellation: 'AOC Valais',
      nose: 'Description du nez',
      mouth: 'Description de la bouche',
      analysis: '13% vol.',
      pairing: 'Viande, Fromage...',
      aging: '5 ans'
    }
  },
  */
  // ↑↑↑ JUSQU'ICI ↑↑↑
  // =========================================================

];

export const EXPERIENCES: Experience[] = [
  {
    id: 'exp1',
    title: 'Apéritif Terroir',
    description: 'Dégustation de 5 crus accompagnés de planches valaisannes. Immersion sensorielle garantie.',
    price: 45.00,
    image: 'https://picsum.photos/id/430/600/400',
    duration: '2h',
    location: 'Maison Gilliard, Sion'
  },
  {
    id: 'exp2',
    title: 'Visite des Coulisses',
    description: 'Découvrez le processus de vinification, des vignes à la mise en bouteille, avec nos œnologues.',
    price: 30.00,
    image: 'https://picsum.photos/id/431/600/400',
    duration: '1h30',
    location: 'Domaines Partenaires'
  }
];

export const DELIVERY_FEE = 10.00;
export const FREE_SHIPPING_THRESHOLD = 150.00;
export const CAVO_PASS_PRICE = 150.00;
