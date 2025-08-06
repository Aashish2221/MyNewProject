import ProductCard from "./ProductCart/page";

// Mock product data (same as product page)
const products = [
  { id: 1, name: 'Product 1', price: 29.99, image: '/products/alphabet_keychains.webp', description: 'Description for Product 1' },
  { id: 2, name: 'Product 2', price: 39.99, image: '/products/ganesha_resin.webp', description: 'Description for Product 2' },
  { id: 3, name: 'Product 3', price: 19.99, image: '/products/key_holder.webp', description: 'Description for Product 3' },
  { id: 4, name: 'Product 4', price: 19.99, image: '/products/name stand.webp', description: 'Description for Product 3' },
  { id: 5, name: 'Product 5', price: 19.99, image: '/products/name_plate.webp', description: 'Description for Product 3' },
  { id: 7, name: 'Product 6', price: 19.99, image: '/products/pandent.webp', description: 'Description for Product 3' },
  { id: 8, name: 'Product 6', price: 19.99, image: '/products/pooja_thali.webp', description: 'Description for Product 3' },
  { id: 9, name: 'Product 6', price: 19.99, image: '/products/wedding_flower_preserve.webp', description: 'Description for Product 3' },
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