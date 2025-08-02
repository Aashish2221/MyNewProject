import Image from 'next/image';
import { notFound } from 'next/navigation';

// Mock product data (replace with API call in production)
const products = [
  { id: 1, name: 'Product 1', price: 29.99, image: '/product1.jpg', description: 'Description for Product 1' },
  { id: 2, name: 'Product 2', price: 39.99, image: '/product2.jpg', description: 'Description for Product 2' },
  { id: 3, name: 'Product 3', price: 19.99, image: '/product3.jpg', description: 'Description for Product 3' },
];

// Define the props type for the dynamic route
interface ProductPageProps {
  params: Promise<{ id: string }>; // Use Promise for async params in Next.js 15.4.5
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params; // Await the params Promise
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    notFound(); // Use Next.js's notFound() for 404 handling
  }

  return (
    <div className="min-h-screen bg-gray-100 py-16">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
        <Image
          src={product.image}
          alt={product.name}
          width={400}
          height={300}
          className="w-full h-64 object-cover rounded-md"
        />
        <h2 className="text-2xl font-bold text-gray-800 mt-4">{product.name}</h2>
        <p className="text-pink-600 text-xl mt-2">${product.price}</p>
        <p className="text-gray-600 mt-4">{product.description}</p>
        <button className="mt-6 bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition">
          Add to Cart
        </button>
      </div>
    </div>
  );
}