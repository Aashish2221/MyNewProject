'use client';

import { useState } from 'react';
import Script from 'next/script';

export default function Checkout() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const amount = 4; // ₹500

  const createOrderId = async () => {
    try {
      const response = await fetch('/api/razorpay-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount }),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || 'Failed to create order');
      }
      return data.orderId;
    } catch (error: any) {
      console.error('Error creating order:', error);
      throw error;
    }
  };

  const processPayment = async () => {
    setLoading(true);
    setError(null);

    try {
      const orderId = await createOrderId();
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: amount * 100, // Convert to paise
        currency: 'INR',
        name: 'Your Company Name',
        description: 'Purchase of Sample Product',
        order_id: orderId,
        handler: async function (response: any) {
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

          if (res.success) {
            window.location.href = '/checkout?status=success';
          } else {
            setError('Payment verification failed: ' + res.error);
          }
        },
        prefill: {
          name: 'Customer Name',
          email: 'customer@example.com',
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

      const paymentObject = new (window as any).Razorpay(options);
      paymentObject.on('payment.failed', function (response: any) {
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

  return (
    <>
      <Script id="razorpay-checkout-js" src="https://checkout.razorpay.com/v1/checkout.js" />
      <div className="p-6">
        <h1 className="text-2xl mb-4">Buy a Product</h1>
        {error && <div className="text-red-500 mb-4">{error}</div>}
        <button
          onClick={processPayment}
          disabled={loading || !process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID}
          className="bg-indigo-600 text-white px-4 py-2 rounded disabled:opacity-50"
        >
          {loading ? 'Processing...' : 'Pay ₹2'}
        </button>
        {!process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID && (
          <div className="text-red-500 mt-2">Razorpay Key ID is missing</div>
        )}
      </div>
    </>
  );
}