'use client';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/features/authSlice';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
}

interface AddToCartButtonProps {
  product: Product;
}

export default function AddToCartButton({ product }: AddToCartButtonProps) {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    router.push('/cart');
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