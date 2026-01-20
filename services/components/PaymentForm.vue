<template>
  <form @submit.prevent="submitPayment">
    <input type="number" v-model="amount" placeholder="Amount" />
    <!-- Only show Stripe for personal accounts -->
    <button class="btn btn-primary">Pay with Stripe</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      amount: 0,
    };
  },
  methods: {
    async submitPayment() {
      await this.$axios.post('/api/payment/pay', {
        amount: this.amount,
        paymentMethod: 'stripe',
      });
      alert('Payment submitted!');
    },
  },
};
</script>
