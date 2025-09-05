'use client';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Script from 'next/script';
import { AnimatePresence, motion } from 'framer-motion';
import { FaEnvelope, FaLock, FaUser, FaPhone, FaMapMarkerAlt, FaCity, FaMapPin } from 'react-icons/fa';
import { selectCart, selectCustomerInfo, selectIsLoggedIn, selectUser, signIn, updateCustomerInfo } from '@/redux/features/authSlice';
import axios from 'axios';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import CustomerInfoPopup from './CustomerInfoPopup';

// Define types
interface CustomerInfo {
  userId: string;
  lastName?: string;
  firstName?: string;
  emailId?: string;
  mobNo?: string;
  phone?: string;
  city?: string;
  pincode?: string;
  state?: string;
  profilePhoto?: string;
  address?: string;
}

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image?: string;
  description?: string;
}

interface FormErrors {
  email?: string;
  password?: string;
  firstName?: string;
  lastName?: string;
  mobNo?: string;
  phone?: string;
  city?: string;
  pincode?: string;
  state?: string;
  address?: string;
  general?: string;
}

function PaymentPopup({ customerInfo, cart, amountInPaise, onConfirm, onCancel, loading, error }: { 
  customerInfo: CustomerInfo, 
  cart: CartItem[], 
  amountInPaise: number, 
  onConfirm: () => void, 
  onCancel: () => void, 
  loading: boolean, 
  error: string | null 
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
    >
      <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full p-6 max-h-[90vh] overflow-y-auto">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Confirm Payment</h2>
        {error && <p className="text-red-500 text-sm text-center mb-4 animate-pulse">{error}</p>}

        {/* Customer Information */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-700 mb-3">Customer Information</h3>
          <div className="space-y-4">
            {/* Personal Info */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="text-sm font-medium text-gray-600 mb-2">Personal Information</h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <p><strong>First Name:</strong> {customerInfo?.firstName || 'Not provided'}</p>
                <p><strong>Last Name:</strong> {customerInfo?.lastName || 'Not provided'}</p>
                <p><strong>Email:</strong> {customerInfo?.emailId || 'Not provided'}</p>
                <p><strong>Mobile:</strong> {customerInfo?.mobNo || 'Not provided'}</p>
              </div>
            </div>
            {/* Shipping Info */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="text-sm font-medium text-gray-600 mb-2">Shipping Information</h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <p><strong>Phone:</strong> {customerInfo?.phone || 'Not provided'}</p>
                <p><strong>City:</strong> {customerInfo?.city || 'Not provided'}</p>
                <p><strong>Pincode:</strong> {customerInfo?.pincode || 'Not provided'}</p>
                <p><strong>State:</strong> {customerInfo?.state || 'Not provided'}</p>
                <p className="col-span-2"><strong>Address:</strong> {customerInfo?.address || 'Not provided'}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-700 mb-3">Order Summary</h3>
          <div className="bg-gray-50 p-4 rounded-lg">
            {cart.length === 0 ? (
              <p className="text-gray-500 text-sm">Your cart is empty</p>
            ) : (
              <>
                {cart.map((item: CartItem) => (
                  <div key={item.id} className="flex justify-between mb-1 text-sm">
                    <span>{item.name} x {item.quantity}</span>
                    <span>₹{(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
                <hr className="my-2" />
                <div className="flex justify-between font-semibold text-sm">
                  <span>Total</span>
                  <span>₹{(amountInPaise / 100).toFixed(2)}</span>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Actions */}
        <div className="flex justify-between gap-4">
          <button
            onClick={onCancel}
            className="w-full bg-gray-300 text-gray-700 py-2 px-4 rounded-full hover:bg-gray-400 transition-all duration-300 text-sm"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            disabled={loading || cart.length === 0}
            className="w-full bg-gradient-to-r from-indigo-500 to-indigo-700 text-white py-2 px-4 rounded-full hover:from-indigo-600 hover:to-indigo-800 disabled:opacity-50 transition-all duration-300 text-sm"
          >
            {loading ? 'Processing...' : 'Confirm Payment'}
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default function Checkout() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const customerInfo = useSelector(selectCustomerInfo) as CustomerInfo | null;
  const user = useSelector(selectUser);
  const cart = useSelector(selectCart) || [];
  const dispatch = useDispatch();
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showPaymentPopup, setShowPaymentPopup] = useState(false);
  const [showCustomerInfoPopup, setShowCustomerInfoPopup] = useState(false);

  const switchToRegister = () => setIsLogin(false);
  const switchToLogin = () => setIsLogin(true);

  // Fetch customer info on mount
  useEffect(() => {
    if (isLoggedIn && user?.user?.token) {
      const fetchCustomerInfo = async () => {
        try {
          const response = await axios.get('https://node-backend-1-yyjm.onrender.com/api/auth/customer-info', {
            headers: { Authorization: `Bearer ${user?.user?.token}` },
          });
          if (response.data.message === 'Customer info not found') {
            setShowCustomerInfoPopup(true);
            return;
          }
          dispatch(updateCustomerInfo(response.data));
        } catch (error: any) {
          console.error('Failed to fetch customer info:', error);
          setError('Failed to load customer information');
        }
      };
      fetchCustomerInfo();
    }
  }, [isLoggedIn, dispatch, user?.user?.token]);

  // Redirect to cart if empty
  useEffect(() => {
    if (cart.length === 0) {
      window.location.href = '/cart';
    }
  }, [cart]);

const placeOrder = async () => {
  if (!isLoggedIn || !user?.user?.token || !customerInfo) {
    setError('Please log in and provide customer information to proceed');
    return;
  }
  if (!user.user.mobile || !/^\d{10}$/.test(user.user.mobile || '')) {
    setError('Please provide a valid 10-digit phone number');
    return;
  }

  setLoading(true);
  setError(null);

  try {
    const items = cart.map((item: CartItem) => {
      // Validate item.id as a positive integer
      if (!Number.isInteger(item.id) || item.id <= 0) {
        throw new Error(`Invalid product ID for item ${item.id}`);
      }
      if (typeof item.price !== 'number' || isNaN(item.price) || item.price <= 0) {
        throw new Error(`Invalid price for item ${item.id}`);
      }
      if (!Number.isInteger(item.quantity) || item.quantity <= 0) {
        throw new Error(`Invalid quantity for item ${item.id}`);
      }
      return {
        productId: item.id, // Numeric ID
        quantity: item.quantity,
        price: item.price,
      };
    });

    const shippingInfo = {
      address: customerInfo.address || '',
      city: customerInfo.city || '',
      state: customerInfo.state || '',
      pincode: customerInfo.pincode || '',
      phone: customerInfo.phone || '',
    };

    const totalAmount = cart.reduce((sum: number, item: CartItem) => {
      return sum + item.price * item.quantity;
    }, 0);
    const sanitizedTotalAmount = parseFloat(totalAmount.toFixed(2));

    if (isNaN(sanitizedTotalAmount) || sanitizedTotalAmount <= 0) {
      throw new Error('Invalid total amount');
    }

    const response = await fetch('http://localhost:5000/api/auth/orders/place', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${user.user.token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ items, shippingInfo, totalAmount: sanitizedTotalAmount }),
    });

    const data = await response.json();

    if (!response.ok) throw new Error(data.message || 'Failed to place order');
    return { razorpayOrder: data.razorpayOrder, orderId: data.orderId };
  } catch (error: any) {
    console.error('Error placing order:', error);
    setError(error.message || 'Failed to place order');
    return null;
  } finally {
    setLoading(false);
  }
};
  const processPayment = async () => {
    if (!isLoggedIn || !customerInfo) {
      setError('Please log in and provide customer information to proceed');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const result = await placeOrder();
      if (!result) return;
      const { razorpayOrder, orderId } = result;

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || '',
        amount: razorpayOrder.amount,
        currency: 'INR',
        name: `${customerInfo.firstName || ''} ${customerInfo.lastName || 'Customer'}`,
        description: 'Purchase of Cart Items',
        order_id: razorpayOrder.id,
        handler: async (response: any) => {
          console.log('Payment response:', response);
          if (!response.razorpay_payment_id || !response.razorpay_order_id || !response.razorpay_signature) {
            setError('Incomplete payment response from Razorpay');
            return;
          }
          const verifyRes = await fetch('http://localhost:5000/api/auth/orders/verify', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${user?.user?.token}`, // Added token
            },
            body: JSON.stringify({
              orderId,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_order_id: response.razorpay_order_id,
              razorpay_signature: response.razorpay_signature,
            }),
          });
          const verifyData = await verifyRes.json();
          console.log('Verification result:', verifyData);

          if (verifyData.success) {
            window.location.href = '/checkout?status=success';
          } else {
            setError('Payment verification failed: ' + verifyData.message);
          }
        },
        prefill: {
          name: `${customerInfo.firstName || ''} ${customerInfo.lastName || 'Customer'}`,
          email: customerInfo.emailId || user?.user?.email || 'customer@example.com',
          contact: customerInfo.phone || user?.user?.mobile || '',
        },
        theme: { color: '#3399cc' },
        payment_method: { upi: true, netbanking: true, card: true, wallet: true },
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
      setShowPaymentPopup(false);
    }
  };

  const amountInPaise = Math.round(
    cart.reduce((sum: number, item: CartItem) => sum + (item.price * item.quantity), 0) * 100
  );

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 p-4 sm:p-6 lg:p-8 relative overflow-hidden">
        <div className="w-full max-w-4xl bg-white/90 rounded-xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 p-6 bg-cover bg-center relative" style={{ backgroundImage: 'ur[](https://via.placeholder.com/600x800)' }}>
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
              <h2 className="text-4xl font-bold mb-4">Checkout</h2>
              <p className="text-lg">Complete your purchase securely</p>
            </div>
          </div>
          <div className="w-full md:w-1/2 p-6 flex flex-col items-center justify-center">
            <AnimatePresence mode="wait">
              {isLogin ? (
                <LoginForm key="login" switchToRegister={switchToRegister} />
              ) : (
                <RegisterForm key="register" switchToLogin={switchToLogin} />
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 p-6">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-lg p-8">
        <Script
          id="razorpay-checkout-js"
          src="https://checkout.razorpay.com/v1/checkout.js"
          onLoad={() => console.log('Razorpay script loaded')}
          onError={() => {
            console.error('Failed to load Razorpay script');
            setError('Failed to load payment gateway. Please try again.');
          }}
        />
        <h1 className="text-4xl font-serif font-bold text-center text-gray-900 mb-8">Checkout</h1>

        <div className="bg-white p-6 rounded-xl shadow-sm mb-6 border border-gray-200">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-sans font-semibold text-gray-800">User Information</h2>
            <button
              onClick={() => setShowCustomerInfoPopup(true)}
              className="text-indigo-600 text-sm font-sans font-medium underline"
            >
              Edit Information
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="text-lg font-sans font-medium text-gray-700 mb-3 text-left">Personal Information</h3>
              <div className="space-y-2 text-sm font-sans text-gray-600">
                <div className="flex items-center"><span className="w-24 font-medium">Name:</span><span>{user?.user?.name || 'Not provided'}</span></div>
                <div className="flex items-center"><span className="w-24 font-medium">Email:</span><span>{user?.user?.email || 'Not provided'}</span></div>
                <div className="flex items-center"><span className="w-24 font-medium">Mobile:</span><span>{user?.user?.mobile || 'Not provided'}</span></div>
              </div>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="text-lg font-sans font-medium text-gray-700 mb-3 text-left">Shipping Information</h3>
              <div className="space-y-2 text-sm font-sans text-gray-600">
                <div className="flex items-center"><span className="w-24 font-medium">Phone:</span><span>{customerInfo?.phone || 'Not provided'}</span></div>
                <div className="flex items-center"><span className="w-24 font-medium">City:</span><span>{customerInfo?.city || 'Not provided'}</span></div>
                <div className="flex items-center"><span className="w-24 font-medium">Pincode:</span><span>{customerInfo?.pincode || 'Not provided'}</span></div>
                <div className="flex items-center"><span className="w-24 font-medium">State:</span><span>{customerInfo?.state || 'Not provided'}</span></div>
                <div className="flex items-start"><span className="w-24 font-medium">Address:</span><span>{customerInfo?.address || 'Not provided'}</span></div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-6 rounded-xl shadow-sm mb-6">
          <h2 className="text-2xl font-sans font-semibold text-gray-800 mb-4 text-left">Order Summary</h2>
          {(cart?.length ?? 0) === 0 ? (
            <p className="text-gray-500 text-sm font-sans text-center">Your cart is empty</p>
          ) : (
            <>
              {cart.map((item: CartItem) => (
                <div key={item.id} className="flex justify-between mb-2 text-sm font-sans text-gray-600">
                  <span>{item.name} x {item.quantity}</span>
                  <span>₹{(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
              <hr className="my-3 border-gray-200" />
              <div className="flex justify-between text-base font-sans font-semibold text-gray-800">
                <span>Total</span>
                <span>₹{(amountInPaise / 100).toFixed(2)}</span>
              </div>
            </>
          )}
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-2xl font-sans font-semibold text-gray-800 mb-4 text-left">Payment</h2>
          <button
            onClick={() => setShowPaymentPopup(true)}
            disabled={!customerInfo?.address || loading || (cart?.length ?? 0) === 0}
            className="w-full bg-indigo-600 text-white py-3 px-6 rounded-full text-sm font-sans font-medium disabled:opacity-50"
          >
            {loading ? 'Processing...' : `Pay ₹${(amountInPaise / 100).toFixed(2)}`}
          </button>
          {error && <div className="text-red-500 mt-3 text-sm font-sans font-medium text-center">{error}</div>}
          {!process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID && (
            <div className="text-red-500 mt-3 text-sm font-sans font-medium text-center">Payment gateway configuration is missing</div>
          )}
          {(cart?.length ?? 0) === 0 && (
            <div className="text-red-500 mt-3 text-sm font-sans font-medium text-center">Your cart is empty</div>
          )}
        </div>

        <AnimatePresence>
          {showCustomerInfoPopup && (
            <CustomerInfoPopup
              customerInfo={customerInfo!}
              onClose={() => setShowCustomerInfoPopup(false)}
            />
          )}
        </AnimatePresence>

        <AnimatePresence>
          {showPaymentPopup && (
            <PaymentPopup
              customerInfo={customerInfo!}
              cart={cart}
              amountInPaise={amountInPaise}
              onConfirm={processPayment}
              onCancel={() => setShowPaymentPopup(false)}
              loading={loading}
              error={error}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}