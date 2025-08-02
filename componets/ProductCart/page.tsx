import Link from 'next/link';
import Image from 'next/image';

export default function ProductCard({ product }: { product: { id: number; name: string; price: number; image: string } }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:-translate-y-1">
      <Image
        src={product.image}
        alt={product.name}
        width={220}
        height={220}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
        <p className="text-pink-600 text-lg">${product.price}</p>
        <Link href={`/products/${product.id}`}>
          <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition">
            Shop Now
          </button>
        </Link>
      </div>
    </div>
  );
}