'use client';
import { useRouter } from 'next/navigation';
import { useCart } from '../CartContext/page';

interface AddToCartButtonProps {
  product: {
    id: number;
    name: string;
    price: number;
    image: string;
    description: string;
  };
}

export default function AddToCartButton({ product }: AddToCartButtonProps) {
  const { addToCart } = useCart();
  const router = useRouter();

  const handleAddToCart = () => {
    addToCart(product);
    router.push('/cart'); // Navigate to cart page
  };

  return (
    <button
      onClick={handleAddToCart}
      className="mt-6 bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition"
    >
      Add to Cart
    </button>
  );
}