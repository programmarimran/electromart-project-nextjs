export interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  brand: string;
  category: string;
  stock: number;
  rating: number;
  features: string[];
  image: string;
}