// Validate personal vs business account payments
import { verifyPersonalAccount } from '../middleware/auth.js';
import PaymentProcessor from '../services/paymentProcessor.js';

router.post(
  '/pay',
  verifyPersonalAccount,
  async (req, res, next) => {
    try {
      const { userId, amount, paymentMethod } = req.body;

      // Only allow Stripe for personal accounts
      if (paymentMethod !== 'stripe') {
        return res.status(400).json({
          error: 'Invalid payment method for personal accounts',
        });
      }

      const receipt = await PaymentProcessor.processStripePayment({
        userId,
        amount,
      });

      res.json({
        status: 'success',
        receipt,
      });
    } catch (err) {
      next(err);
    }
  }
);
