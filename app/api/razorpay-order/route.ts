import { NextRequest, NextResponse } from 'next/server';
import Razorpay from 'razorpay';

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
  } catch (error: any) {
    console.error('Error creating order:', {
      message: error.message,
      statusCode: error.statusCode,
      errorCode: error.error?.code,
      description: error.error?.description,
    });
    return NextResponse.json(
      { error: error.error?.description || 'Failed to create order' },
      { status: error.statusCode || 500 }
    );
  }
}