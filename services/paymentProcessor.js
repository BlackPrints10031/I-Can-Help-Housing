import Stripe from 'stripe';
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

class PaymentProcessor {
  static async processStripePayment({ userId, amount }) {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'usd',
      metadata: { userId },
    });

    return paymentIntent;
  }
}

export default PaymentProcessor;
