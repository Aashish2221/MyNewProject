// /app/checkout/page.tsx
'use client';

import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

export default function Checkout() {
  const handleCheckout = async () => {
    const res = await fetch('/api/create-checkout-session', {
      method: 'POST',
    });

    const data = await res.json();
    const stripe = await stripePromise;
    await stripe?.redirectToCheckout({ sessionId: data.id });
    window.location.href = data.url; // fallback
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl mb-4">Buy a Product</h1>
      <button
        onClick={handleCheckout}
        className="bg-indigo-600 text-white px-4 py-2 rounded"
      >
        Pay ₹500
      </button>
    </div>
  );
}
