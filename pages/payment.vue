<template>
  <div class="flex justify-center items-center min-h-screen">
    <div class="w-full max-w-md">
      <div class="bg-white rounded-lg shadow-xl shadow-md hover:shadow-lg p-6 mx-4">
        <div class="logo-container mb-8">
          <img src="../img/logo.png" alt="Logo" class="mx-auto max-w-xs" />
        </div>

        <div id="content">
          <h2>Usuario actual: {{ currentUser.displayName }}</h2>
          <h3>Email: {{ currentUser.email }}</h3>

          <form id="payment-method-form" @submit.prevent="addPaymentMethod">
            <div class="mb-4">
              <label for="name" class="block mb-2">Nombre del titular:</label>
              <input
                v-model="cardholderName"
                type="text"
                id="name"
                class="w-full p-1 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              />
            </div>
            <div id="card-element" class="mb-4"></div>
            <div id="error-message" class="text-red-500 mb-4"></div>
            <button
              type="submit"
              class="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            >
              Agregar tarjeta
            </button>
          </form>

          <form id="payment-form" @submit.prevent="createPayment">
            <div class="mb-4">
              <label for="amount" class="block mb-2">Cantidad:</label>
              <input
                v-model="amount"
                type="number"
                id="amount"
                class="w-full p-1 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              />
            </div>
            <div class="mb-4">
              <label for="currency" class="block mb-2">Moneda:</label>
              <select
                v-model="currency"
                id="currency"
                class="w-full p-1 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              >
                <option value="usd">USD</option>
                <option value="eur">EUR</option>
                <option value="gbp">GBP</option>
              </select>
            </div>
            <div class="mb-4">
              <label for="payment-method" class="block mb-2">Método de pago:</label>
              <select
                v-model="paymentMethod"
                id="payment-method"
                class="w-full p-1 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              >
                <option v-for="paymentMethod in paymentMethods" :value="paymentMethod.id">
                  {{ paymentMethod.cardType }} •••• {{ paymentMethod.cardNumber }}
                </option>
              </select>
            </div>
            <button
              type="submit"
              class="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            >
              Realizar pago
            </button>
          </form>

          <div id="error-message" class="text-red-500 mt-4"></div>
          <ul id="payments-list" class="mt-4">
            <li v-for="payment in payments" :key="payment.id">{{ payment.description }}</li>
          </ul>
        </div>

        <button id="signout" @click="signOut" class="mt-4">Cerrar sesión</button>
      </div>
    </div>
  </div>
</template>

<script>
import { Stripe, loadStripe } from '@stripe/stripe-js'

export default {
  data() {
    return {
      stripe: null,
      elements: null,
      currentUser: {
        displayName: '',
        email: ''
      },
      paymentMethods: [],
      payments: [],
      cardholderName: '',
      amount: 0,
      currency: 'usd',
      paymentMethod: ''
    }
  },
  async mounted() {
    this.stripe = await loadStripe(this.STRIPE_PUBLISHABLE_KEY)
    this.elements = this.stripe.elements()

    // Aquí puedes realizar cualquier otra configuración o inicialización necesaria para Stripe

    this.currentUser.displayName = this.$route.query.name
    this.currentUser.email = this.$route.query.email

    // Resto del código del mounted hook
  },
  methods: {
    addPaymentMethod() {
      // Método para agregar el método de pago
    },
    createPayment() {
      // Método para crear el pago
    },
    signOut() {
      // Método para cerrar sesión
    }
  }
}
</script>

<style>
.logo-container {
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  margin-bottom: 3rem;
  filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.3));
}

.logo-container img {
  max-width: 80%;
  height: auto;
}

input[type="text"],
input[type="number"],
select {
  font-family: "Your Creative Font", sans-serif;
}

body {
  background-color: #d5fefd;
  background-image: linear-gradient(315deg, #d5fefd 0%, #fffcff 60%);
}
</style>
