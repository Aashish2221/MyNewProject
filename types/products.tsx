export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  rating?: number;
  discount?: number;
  description?: string;
}

export interface ProductCategory {
  image: any;
  id: string;
  title: string;
  products: Product[];
}
