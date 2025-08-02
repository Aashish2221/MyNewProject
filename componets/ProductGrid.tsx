import ProductCard from "./ProductCart/page";

// Mock product data (replace with API call in production)
const products = [
  { id: 1, name: 'Product 1', price: 29.99, image: 'https://res.cloudinary.com/bold-pm/image/upload/t_220/Gold/coins/australia/2024-2-oz-Perth-Lunar-Year-of-the-Dragon-Gold-Coin-Rev.webp' },
  { id: 2, name: 'Product 2', price: 39.99, image: 'https://res.cloudinary.com/bold-pm/image/upload/t_220/Gold/coins/australia/2024-2-oz-Perth-Lunar-Year-of-the-Dragon-Gold-Coin-Rev.webp' },
  { id: 3, name: 'Product 3', price: 19.99, image: 'https://res.cloudinary.com/bold-pm/image/upload/t_220/Gold/coins/australia/2024-2-oz-Perth-Lunar-Year-of-the-Dragon-Gold-Coin-Rev.webp' },
  { id: 4, name: 'Product 4', price: 19.99, image: 'https://res.cloudinary.com/bold-pm/image/upload/t_220/Gold/coins/australia/2024-2-oz-Perth-Lunar-Year-of-the-Dragon-Gold-Coin-Rev.webp' },
  { id: 5, name: 'Product 5', price: 19.99, image: 'https://res.cloudinary.com/bold-pm/image/upload/t_220/Gold/coins/australia/2024-2-oz-Perth-Lunar-Year-of-the-Dragon-Gold-Coin-Rev.webp' },
  { id: 6, name: 'Product 6', price: 19.99, image: 'https://res.cloudinary.com/bold-pm/image/upload/t_220/Gold/coins/australia/2024-2-oz-Perth-Lunar-Year-of-the-Dragon-Gold-Coin-Rev.webp' },
];

export default function ProductGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}