export enum ProductType {
  RED = 'Rouge',
  WHITE = 'Blanc',
  ROSE = 'Rosé',
  CHAMPAGNE = 'Champagne'
}

export enum PriceCategory {
  GREEN = 'Vert', // < 40 CHF
  ORANGE = 'Orange', // < 100 CHF
  RED = 'Rouge' // > 100 CHF
}

export interface ProductDetails {
  cepage: string;
  appellation: string;
  nose: string;
  mouth: string;
  analysis: string;
  pairing: string;
  aging: string;
}

export interface Product {
  id: string;
  name: string;
  producer: string;
  type: ProductType;
  price: number;
  category: PriceCategory;
  description: string;
  image: string;
  details: ProductDetails;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Experience {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  duration: string;
  location: string;
}