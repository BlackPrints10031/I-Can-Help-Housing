describe('Payment API', () => {
  it('should reject non-Stripe method for personal account', async () => {
    const res = await request(app)
      .post('/api/payment/pay')
      .send({ paymentMethod: 'paypal', amount: 100 });

    expect(res.statusCode).toEqual(400);
    expect(res.body.error).toMatch(/Invalid payment method/);
  });
});
