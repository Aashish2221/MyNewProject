export interface Product {
  id: number;
  name: string;
  price: number;
  image: string; // URL or path to image
  description: string;
}

// Sample product detail list
export const products: Product[] = [
  { id: 1, name: 'Alphabet Keychains', price: 100, image: '/products/alphabet_keychains.webp', description: 'Description for Product 1' },
  { id: 2, name: 'Car Deshboard Stand', price: 100, image: '/products/ganesha_resin.webp', description: 'Description for Product 2' },
  { id: 3, name: 'Key Holder', price: 500, image: '/products/key_holder.webp', description: 'Description for Product 3' },
  { id: 4, name: 'Name Stand', price: 500, image: '/products/name stand.webp', description: 'Description for Product 3' },
  { id: 5, name: 'Name Plate', price: 1000, image: '/products/name_plate.webp', description: 'Description for Product 3' },
  { id: 7, name: 'jewellery Set', price: 500, image: '/products/pandent.webp', description: 'Description for Product 3' },
  { id: 8, name: 'Pooja Thali', price: 500, image: '/products/pooja_thali.webp', description: 'Description for Product 3' },
  { id: 9, name: 'Wedding Frame', price: 1500, image: '/products/wedding_flower_preserve.webp', description: 'Description for Product 3' },
];