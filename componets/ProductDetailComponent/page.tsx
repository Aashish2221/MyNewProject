import Image from 'next/image';
import AddToCartButton from '../AddToCartButton/page';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
}

interface ProductDetailProps {
  product: Product;
}

export default function ProductDetail({ product }: ProductDetailProps) {
  return (
    <div className="min-h-screen bg-gray-100 py-16">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
        <Image
          src={product.image}
          alt={product.name}
          width={220}
          height={220}
          className="w-[220px] h-[220px] object-cover rounded-md"
        />
        <h2 className="text-2xl font-bold text-gray-800 mt-4">{product.name}</h2>
        <p className="text-pink-600 text-xl mt-2">${product.price}</p>
        <p className="text-gray-600 mt-4">{product.description}</p>
        <AddToCartButton product={product} />
      </div>
    </div>
  );
}