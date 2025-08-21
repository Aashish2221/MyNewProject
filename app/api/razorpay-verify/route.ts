import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';

export async function POST(request: NextRequest) {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = await request.json();

    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
      return NextResponse.json({ error: 'Missing required parameters', success: false }, { status: 400 });
    }

    const secret = process.env.RAZORPAY_KEY_SECRET!;
    const generatedSignature = crypto
      .createHmac('sha256', secret)
      .update(`${razorpay_order_id}|${razorpay_payment_id}`)
      .digest('hex');

    if (generatedSignature === razorpay_signature) {
      return NextResponse.json({ message: 'Payment verified successfully', success: true }, { status: 200 });
    } else {
      return NextResponse.json({ error: 'Invalid signature', success: false }, { status: 400 });
    }
  } catch (error: any) {
    console.error('Verification error:', error);
    return NextResponse.json({ error: 'An error occurred', success: false }, { status: 500 });
  }
}