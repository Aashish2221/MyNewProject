'use client';
import { useSelector, useDispatch } from 'react-redux';
import Image from 'next/image';
import Link from 'next/link';
import { deleteFromCart, selectCart, updateCartQty } from '@/redux/features/authSlice';

interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  quantity: number;
}

interface CartClientProps {
  cart: CartItem[];
}

export default function CartClient({ cart }: CartClientProps) {
  const dispatch = useDispatch();
  const reduxCart = useSelector(selectCart) || [];

  // Use the passed cart prop if available, otherwise fallback to Redux cart
  const displayCart = cart.length > 0 ? cart : reduxCart;

  const total = displayCart.reduce((sum: number, item: CartItem) => sum + item.price * item.quantity, 0).toFixed(2);

  if (displayCart.length === 0) {
    return (
      <div className="min-h-screen bg-gray-100 py-16 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Your Cart is Empty</h2>
        <Link href="/" className="text-blue-500 hover:underline">
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-16">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Your Cart</h2>
        <div className="space-y-4">
          {displayCart.map((item: CartItem) => (
            <div key={item.id} className="flex items-center border-b pb-4">
              <Image
                src={item.image}
                alt={item.name}
                width={100}
                height={100}
                className="w-24 h-24 object-cover rounded-md"
              />
              <div className="flex-1 ml-4">
                <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                <p className="text-pink-600">${item.price.toFixed(2)}</p>
                <div className="flex items-center mt-2">
                  <label htmlFor={`quantity-${item.id}`} className="mr-2">Quantity:</label>
                  <input
                    id={`quantity-${item.id}`}
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) => dispatch(updateCartQty({ id: item.id, quantity: parseInt(e.target.value) || 1 }))}
                    className="w-16 p-1 border rounded-md"
                  />
                  <button
                    onClick={() => dispatch(deleteFromCart(item.id))}
                    className="ml-4 text-red-500 hover:text-red-700"
                  >
                    Remove
                  </button>
                </div>
              </div>
              <p className="text-gray-600">${(item.price * item.quantity).toFixed(2)}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 flex justify-between items-center">
          <h3 className="text-xl font-bold text-gray-800">Total: ${total}</h3>
          <Link href="/checkout">
            <button className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition">
              Proceed to Checkout
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}