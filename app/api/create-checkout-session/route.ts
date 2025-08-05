// ✅ Corrected: /app/api/create-checkout-session/route.ts

import { stripe } from '@/stripe/stripe';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      line_items: [
        {
          price_data: {
            currency: 'inr',
            product_data: {
              name: 'Sample Product',
            },
            unit_amount: 50000, // ₹500
          },
          quantity: 1,
        },
      ],
      success_url: 'http://localhost:3000/checkout?status=success',
      cancel_url: 'http://localhost:3000/checkout?status=cancel',
    });

    return NextResponse.json({ url: session.url, id: session.id });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
