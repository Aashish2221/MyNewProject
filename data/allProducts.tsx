import { Product } from '../types/products';
import { productCategories } from './products';

export const allProducts: Product[] = productCategories.flatMap(category => category.products);

export const getProductById = (id: number): Product | undefined => {
  return allProducts.find(product => product.id === id);
};

export const getProductsByCategory = (categoryId: string): Product[] => {
  const category = productCategories.find(cat => cat.title === categoryId);
  return category?.products || [];
};
