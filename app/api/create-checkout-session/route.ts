import { NextRequest, NextResponse } from 'next/server';
import { stripe } from '@/stripe/stripe';

export async function POST(req: NextRequest) {
  try {
    const origin = req.headers.get('origin') || 'http://localhost:3000';
    console.log('Creating checkout session with origin:', origin);
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card', 'upi', 'net_banking'], // Add supported methods
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
      success_url: `${origin}/checkout?status=success`,
      cancel_url: `${origin}/checkout?status=cancel`,
      payment_method_options: {
        upi: {
          expire_after: 300, // UPI link expires after 5 minutes
        },
      },
    });

    if (!session.url) {
      throw new Error('Stripe session URL is missing');
    }

    console.log('Session created:', { id: session.id, url: session.url });
    return NextResponse.json({ url: session.url, id: session.id });
  } catch (err: unknown) {
    console.error('Checkout session error:', err);
    return NextResponse.json(
      { error: err instanceof Error ? err.message : 'Unknown error' },
      { status: 500 }
    );
  }
}