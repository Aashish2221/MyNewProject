import { NextRequest, NextResponse } from 'next/server';
import Razorpay from 'razorpay';
interface RazorpayError extends Error {
  statusCode?: number;
  error?: {
    code?: string;
    description?: string;
  };
}
export async function POST(request: NextRequest) {
  try {
    // Log environment variables for debugging
    console.log('RAZORPAY_KEY_ID:', process.env.RAZORPAY_KEY_ID);
    console.log('RAZORPAY_KEY_SECRET:', process.env.RAZORPAY_KEY_SECRET ? '[REDACTED]' : 'undefined');

    if (!process.env.RAZORPAY_KEY_ID || !process.env.RAZORPAY_KEY_SECRET) {
      console.error('Missing Razorpay API keys');
      return NextResponse.json(
        { error: 'Razorpay API keys are not configured properly' },
        { status: 500 }
      );
    }

    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET,
    });

    const { amount } = await request.json();

    if (!amount || amount < 1) {
      return NextResponse.json({ error: 'Invalid amount (minimum ₹1)' }, { status: 400 });
    }

    const options = {
      amount: amount * 100, // Convert to paise (₹500 = 50000 paise)
      currency: 'INR',
      receipt: `receipt#${Date.now()}`,
    };

    const order = await razorpay.orders.create(options);
    console.log('Order created successfully:', order);
    return NextResponse.json({ orderId: order.id, amount: order.amount, currency: order.currency }, { status: 200 });
  } catch (error: unknown) {
  const err = error as RazorpayError;

  console.error('Error creating order:', {
    message: err.message,
    statusCode: err.statusCode,
    errorCode: err.error?.code,
    description: err.error?.description,
  });

  return NextResponse.json(
    { error: err.error?.description || 'Failed to create order' },
    { status: err.statusCode || 500 }
  );
}
}