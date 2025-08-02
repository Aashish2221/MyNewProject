import ProductCard from "./ProductCart/page";

// Mock product data (replace with API call in production)
const products = [
  { id: 1, name: 'Product 1', price: 29.99, image: '/product1.jpg' },
  { id: 2, name: 'Product 2', price: 39.99, image: '/product2.jpg' },
  { id: 3, name: 'Product 3', price: 19.99, image: '/product3.jpg' },
];

export default function ProductGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}