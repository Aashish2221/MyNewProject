// /stripe/stripe.ts
import Stripe from 'stripe';

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
if (!stripeSecretKey) {
  throw new Error('STRIPE_SECRET_KEY environment variable is not set.');
}

export const stripe = new Stripe(stripeSecretKey, {
  apiVersion: '2023-10-16', // Use the latest stable API version
});