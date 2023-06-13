<template>
  <div>
    <div id="firebaseui-auth-container"></div>
    <div id="loader">Loading...</div>
    <div v-if="currentUser" id="content">
      <h2>Usuario actual: {{ currentUser.displayName }}</h2>
      <h3>Email: {{ currentUser.email }}</h3>

      <!-- Aquí puedes colocar el HTML relacionado con la visualización de la interfaz de pago. -->
      <!-- Asegúrate de tener un lugar para el elemento de la tarjeta de Stripe, los mensajes de error, etc. -->
      <form id="payment-method-form">
        <!-- Formulario para agregar una nueva tarjeta -->
      </form>
      <form id="payment-form">
        <!-- Formulario para crear un nuevo pago -->
      </form>
      <div id="error-message"></div>
      <ul id="payments-list"></ul>
    </div>
  </div>
</template>


<script>
import firebase from 'firebase/app'
import 'firebase/auth'
import { Stripe, loadStripe } from '@stripe/stripe-js'

export default {
  data() {
    return {
      stripe: null,
      elements: null,
      currentUser: null,
      customerData: {},
      STRIPE_PUBLISHABLE_KEY: 'pk_test_51NFYzrIHAjjWYTS96zW5xtyrvnM644pYizDaqODVIjUuczQ0JjSkTzxsn4xwovGqVdsgLiVcvPnk7vutchk6kUf500bNsRjMn7'
    }
  },
  async mounted() {
    this.stripe = await loadStripe(this.STRIPE_PUBLISHABLE_KEY)
    this.elements = this.stripe.elements()

    const firebaseUI = new firebaseui.auth.AuthUI(firebase.auth())
    const firebaseUiConfig = {
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID
      ],
      callbacks: {
        signInSuccessWithAuthResult: (authResult, redirectUrl) => {
          // Aquí puedes definir lo que sucede después de que el usuario inicie sesión correctamente
          // Puedes redirigirlo a la página de pagos u otras acciones necesarias
          return false; // Evita que Firebase redirija automáticamente
        }
      }
    }

    firebase.auth().onAuthStateChanged((firebaseUser) => {
      if (firebaseUser) {
        this.currentUser = firebaseUser
        firebase
          .firestore()
          .collection('stripe_customers')
          .doc(this.currentUser.uid)
          .onSnapshot((snapshot) => {
            if (snapshot.data()) {
              this.customerData = snapshot.data()
              this.startDataListeners()
              document.getElementById('loader').style.display = 'none'
              document.getElementById('content').style.display = 'block'
            } else {
              console.warn(`No Stripe customer found in Firestore for user: ${this.currentUser.uid}`)
            }
          })
      } else {
        this.currentUser = null
        document.getElementById('content').style.display = 'none'
        firebaseUI.start('#firebaseui-auth-container', firebaseUiConfig)
      }
    })
  },
  methods: {
    startDataListeners() {
      // Configurar listeners en Firestore para obtener métodos de pago y pagos
      firebase
        .firestore()
        .collection('stripe_customers')
        .doc(this.currentUser.uid)
        .collection('payment_methods')
        .onSnapshot((snapshot) => {
          // Obtener los métodos de pago del usuario actual
          const paymentMethods = []
          snapshot.forEach((doc) => {
            const paymentMethod = doc.data()
            paymentMethod.id = doc.id
            paymentMethods.push(paymentMethod)
          })
          // Actualizar la interfaz de usuario con los métodos de pago obtenidos
        })

      firebase
        .firestore()
        .collection('stripe_customers')
        .doc(this.currentUser.uid)
        .collection('payments')
        .onSnapshot((snapshot) => {
          // Obtener los pagos del usuario actual
          const payments = []
          snapshot.forEach((doc) => {
            const payment = doc.data()
            payment.id = doc.id
            payments.push(payment)
          })
          // Actualizar la interfaz de usuario con los pagos obtenidos
        })
    },
  }
}
</script>
