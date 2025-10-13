'use client';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/features/authSlice';
import { ShoppingCart } from 'lucide-react';
import { Product } from '@/types/products';


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
     <button onClick={handleAddToCart} className="w-full flex items-center justify-center gap-3 bg-slate-800 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-slate-700 transition-all transform hover:scale-105 shadow-lg">
                  <ShoppingCart className="w-6 h-6" />
                  Add to Cart
                </button>
    // <button
    //   onClick={handleAddToCart}
    //   className="mt-6 bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition"
    // >
    //   Add to Cart
    // </button>
  );
}