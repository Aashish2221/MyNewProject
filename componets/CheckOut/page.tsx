'use client';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Script from 'next/script';
import Link from 'next/link';
import { selectCart, selectCustomerInfo, selectIsLoggedIn, signIn } from '@/redux/features/authSlice';

// Define types
interface CustomerInfo {
  name: string;
  email: string;
  mobile: string;
  address: string;
}

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image?: string;
  description?: string;
}

export default function Checkout() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const customerInfo = useSelector(selectCustomerInfo);
  const cart = useSelector(selectCart) || [];
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [registerName, setRegisterName] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [registerMobile, setRegisterMobile] = useState('');
  const [registerAddress, setRegisterAddress] = useState('');

  // Calculate total amount in paise (Razorpay expects paise)
  const amountInPaise = Math.round(
    cart.reduce((sum: number, item: CartItem) => {
      const price = Number(item.price) || 0;
      const quantity = Number(item.quantity) || 0;
      return sum + price * quantity;
    }, 0) * 100
  );

  // Redirect to cart if empty
  useEffect(() => {
    if (cart.length === 0) {
      window.location.href = '/cart';
    }
  }, [cart]);

  // Mock login function (replace with actual API call)
  const handleLogin = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: loginEmail, password: loginPassword }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Login failed');
      dispatch(signIn(data.user));
    } catch (err: any) {
      setError(err.message || 'Login failed');
      console.error('Login error:', err);
    } finally {
      setLoading(false);
    }
  };

  // Mock register function (replace with actual API call)
  const handleRegister = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: registerName,
          email: registerEmail,
          password: registerPassword,
          mobile: registerMobile,
          address: registerAddress,
        }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Registration failed');
      dispatch(signIn(data.user));
    } catch (err: any) {
      setError(err.message || 'Registration failed');
      console.error('Registration error:', err);
    } finally {
      setLoading(false);
    }
  };

  const createOrderId = async () => {
    try {
      console.log('Creating order with amount (paise):', amountInPaise);
      const response = await fetch('/api/razorpay-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: amountInPaise }), // Send amount in paise
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Failed to create order');
      console.log('Order created:', data);
      return data.orderId;
    } catch (error: any) {
      console.error('Error creating order:', error);
      throw error;
    }
  };

  const processPayment = async () => {
    if (!isLoggedIn) {
      setError('Please log in or register to proceed with payment');
      return;
    }

    if (!process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID) {
      setError('Payment gateway configuration is missing');
      console.error('Missing NEXT_PUBLIC_RAZORPAY_KEY_ID');
      return;
    }

    // if (!window.Razorpay) {
    //   setError('Payment gateway not loaded. Please try again.');
    //   console.error('Razorpay SDK not available');
    //   return;
    // }

    setLoading(true);
    setError(null);

    try {
      console.log('Starting payment process...');
      console.log('Cart:', cart);
      console.log('Amount in paise:', amountInPaise);

      const orderId = await createOrderId();
      console.log('Order ID:', orderId);

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: amountInPaise, // In paise
        currency: 'INR',
        name: customerInfo?.name || 'Your Company Name',
        description: 'Purchase of Cart Items',
        order_id: orderId,
        handler: async (response: any) => {
          console.log('Payment response:', response);
          const data = {
            razorpay_order_id: response.razorpay_order_id,
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_signature: response.razorpay_signature,
          };

          const result = await fetch('/api/razorpay-verify', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
          });
          const res = await result.json();
          console.log('Verification result:', res);

          if (res.success) {
            window.location.href = '/checkout?status=success';
          } else {
            setError('Payment verification failed: ' + res.error);
          }
        },
        prefill: {
          name: customerInfo?.name || 'Customer Name',
          email: customerInfo?.email || 'customer@example.com',
          contact: customerInfo?.mobile || undefined,
        },
        theme: {
          color: '#3399cc',
        },
        payment_method: {
          upi: true,
          netbanking: true,
          card: true,
          wallet: true,
        },
      };

      console.log('Razorpay options:', options);
      const paymentObject = new (window as any).Razorpay(options);
      paymentObject.on('payment.failed', (response: any) => {
        console.error('Payment failed:', response.error);
        setError('Payment failed: ' + response.error.description);
      });
      paymentObject.open();
    } catch (error: any) {
      console.error('Payment error:', error);
      setError(error.message || 'An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="p-6 max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Checkout - Login or Register</h1>
        {error && <div className="text-red-500 mb-4">{error}</div>}

        {/* Login Section */}
        <div className="bg-white p-4 rounded-lg shadow mb-6">
          <h2 className="text-lg font-semibold mb-4">Login</h2>
          <input
            type="email"
            value={loginEmail}
            onChange={(e) => setLoginEmail(e.target.value)}
            placeholder="Email"
            className="w-full p-2 border rounded mb-2"
          />
          <input
            type="password"
            value={loginPassword}
            onChange={(e) => setLoginPassword(e.target.value)}
            placeholder="Password"
            className="w-full p-2 border rounded mb-4"
          />
          <button
            onClick={handleLogin}
            disabled={loading}
            className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 disabled:bg-blue-400"
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </div>

        {/* Register Section */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4">Register</h2>
          <input
            type="text"
            value={registerName}
            onChange={(e) => setRegisterName(e.target.value)}
            placeholder="Full Name"
            className="w-full p-2 border rounded mb-2"
          />
          <input
            type="email"
            value={registerEmail}
            onChange={(e) => setRegisterEmail(e.target.value)}
            placeholder="Email"
            className="w-full p-2 border rounded mb-2"
          />
          <input
            type="password"
            value={registerPassword}
            onChange={(e) => setRegisterPassword(e.target.value)}
            placeholder="Password"
            className="w-full p-2 border rounded mb-2"
          />
          <input
            type="tel"
            value={registerMobile}
            onChange={(e) => setRegisterMobile(e.target.value)}
            placeholder="Mobile Number"
            className="w-full p-2 border rounded mb-2"
          />
          <input
            type="text"
            value={registerAddress}
            onChange={(e) => setRegisterAddress(e.target.value)}
            placeholder="Address"
            className="w-full p-2 border rounded mb-4"
          />
          <button
            onClick={handleRegister}
            disabled={loading}
            className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700 disabled:bg-green-400"
          >
            {loading ? 'Registering...' : 'Register'}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <Script
        id="razorpay-checkout-js"
        src="https://checkout.razorpay.com/v1/checkout.js"
        onLoad={() => console.log('Razorpay script loaded')}
        onError={() => {
          console.error('Failed to load Razorpay script');
          setError('Failed to load payment gateway. Please try again.');
        }}
      />
      <h1 className="text-2xl font-bold mb-6">Checkout</h1>
      {error && <div className="text-red-500 mb-4">{error}</div>}

      {/* User Information Section */}
      <div className="bg-white p-4 rounded-lg shadow mb-6">
        <h2 className="text-lg font-semibold mb-4">User Information</h2>
        <div className="grid grid-cols-1 gap-2">
          <p><strong>Name:</strong> {customerInfo?.name || 'Not provided'}</p>
          <p><strong>Email:</strong> {customerInfo?.email || 'Not provided'}</p>
          <p><strong>Mobile:</strong> {customerInfo?.mobile || 'Not provided'}</p>
          <p><strong>Address:</strong> {customerInfo?.address || 'Not provided'}</p>
        </div>
        <Link href="/profile/edit" className="text-blue-500 hover:underline mt-2 block">
          Edit Information
        </Link>
      </div>

      {/* Order Summary Section */}
      <div className="bg-white p-4 rounded-lg shadow mb-6">
        <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
        {cart.length === 0 ? (
          <p className="text-gray-500">Your cart is empty</p>
        ) : (
          <>
            {cart.map((item: CartItem) => (
              <div key={item.id} className="flex justify-between mb-2">
                <span>{item.name} x {item.quantity}</span>
                <span>₹{(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
            <hr className="my-2" />
            <div className="flex justify-between font-bold">
              <span>Total</span>
              <span>₹{(amountInPaise / 100).toFixed(2)}</span>
            </div>
          </>
        )}
      </div>

      {/* Payment Section */}
      <div className="bg-white p-4 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-4">Payment</h2>
        <button
          onClick={processPayment}
          disabled={loading || !process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || cart.length === 0}
          className="w-full bg-indigo-600 text-white p-2 rounded hover:bg-indigo-700 disabled:bg-indigo-400"
        >
          {loading ? 'Processing...' : `Pay ₹${(amountInPaise / 100).toFixed(2)}`}
        </button>
        {!process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID && (
          <div className="text-red-500 mt-2">Payment gateway configuration is missing</div>
        )}
        {cart.length === 0 && (
          <div className="text-red-500 mt-2">Your cart is empty</div>
        )}
      </div>
    </div>
  );
}