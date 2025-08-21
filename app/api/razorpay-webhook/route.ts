import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';

export async function POST(request: NextRequest) {
  try {
    const body = await request.text();
    const signature = request.headers.get('x-razorpay-signature')!;
    const secret = process.env.RAZORPAY_WEBHOOK_SECRET!;

    const generatedSignature = crypto
      .createHmac('sha256', secret)
      .update(body)
      .digest('hex');

    if (generatedSignature === signature) {
      const event = JSON.parse(body);
      if (event.event === 'payment.captured') {
        console.log('Payment captured:', event.payload.payment.entity);
        // Update your database
      }
      return NextResponse.json({ status: 'ok' }, { status: 200 });
    } else {
      return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });
    }
  } catch (error: any) {
    console.error('Webhook error:', error);
    return NextResponse.json({ error: 'Webhook error' }, { status: 500 });
  }
}