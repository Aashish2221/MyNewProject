import ProductDetail from '@/componets/ProductDetailComponent/page';
import { notFound } from 'next/navigation';

// Mock product data (same as provided)
const products = [
  { id: 1, name: 'Product 1', price: 29.99, image: 'https://res.cloudinary.com/bold-pm/image/upload/t_220/Gold/coins/australia/2024-2-oz-Perth-Lunar-Year-of-the-Dragon-Gold-Coin-Rev.webp', description: 'Description for Product 1' },
  { id: 2, name: 'Product 2', price: 39.99, image: 'https://res.cloudinary.com/bold-pm/image/upload/t_220/Gold/coins/australia/2024-2-oz-Perth-Lunar-Year-of-the-Dragon-Gold-Coin-Rev.webp', description: 'Description for Product 2' },
  { id: 3, name: 'Product 3', price: 19.99, image: 'https://res.cloudinary.com/bold-pm/image/upload/t_220/Gold/coins/australia/2024-2-oz-Perth-Lunar-Year-of-the-Dragon-Gold-Coin-Rev.webp', description: 'Description for Product 3' },
  { id: 4, name: 'Product 4', price: 19.99, image: 'https://res.cloudinary.com/bold-pm/image/upload/t_220/Gold/coins/australia/2024-2-oz-Perth-Lunar-Year-of-the-Dragon-Gold-Coin-Rev.webp', description: 'Description for Product 3' },
  { id: 5, name: 'Product 5', price: 19.99, image: 'https://res.cloudinary.com/bold-pm/image/upload/t_220/Gold/coins/australia/2024-2-oz-Perth-Lunar-Year-of-the-Dragon-Gold-Coin-Rev.webp', description: 'Description for Product 3' },
  { id: 6, name: 'Product 6', price: 19.99, image: 'https://res.cloudinary.com/bold-pm/image/upload/t_220/Gold/coins/australia/2024-2-oz-Perth-Lunar-Year-of-the-Dragon-Gold-Coin-Rev.webp', description: 'Description for Product 3' },
];

// Define the props type for the dynamic route
interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    notFound();
  }

  return <ProductDetail product={product} />;
}