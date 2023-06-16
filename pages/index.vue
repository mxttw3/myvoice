<template>
  <div class="flex justify-center items-center min-h-screen">
    <div class="w-full max-w-md">
      <div class="bg-white rounded-lg shadow-xl shadow-md hover:shadow-lg p-6 mx-4">
        <div class="logo-container mb-8">
          <img src="../img/logo.png" alt="Logo" class="mx-auto max-w-xs" />
        </div>

        <div id="firebaseui-auth-container"></div>

        <form @submit.prevent="login" v-if="!currentUser">
          <div class="mb-4">
            <label for="email" class="block mb-2">Email:</label>
            <input
              v-model="email"
              type="email"
              id="email"
              class="w-full p-1 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            />
          </div>
          <div class="mb-4">
            <label for="password" class="block mb-2">Password:</label>
            <input
              v-model="password"
              type="password"
              id="password"
              class="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            class="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            Log In
          </button>
        </form>

        <div class="flex justify-between mt-4" v-if="!currentUser">
          <a href="#" class="text-blue-500">Forgot password?</a>
          <a href="./createAcc" class="text-blue-500">Create an account</a>
        </div>

        <div class="mt-4" v-if="currentUser">
          Logged in as: {{ currentUser.email }}
          <button
            @click="logout"
            class="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mt-4"
          >
            Log Out
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase/app';
import 'firebase/auth';
let firebaseui;
if (process.browser) {
  firebaseui = require('firebaseui');
}

export default {
  data() {
    return {
      email: '',
      password: '',
      currentUser: null
    };
  },
  mounted() {
    if (process.browser) {
      const firebaseUiConfig = {
        callbacks: {
          signInSuccessWithAuthResult: (authResult, redirectUrl) => {
            return false; // Prevent automatic redirect
          },
          uiShown: () => {
            // Aquí puedes ocultar un loader si lo tienes
          },
        },
        signInFlow: 'popup',
        signInOptions: [
          firebase.auth.GoogleAuthProvider.PROVIDER_ID,
          firebase.auth.EmailAuthProvider.PROVIDER_ID,
        ],
        credentialHelper: firebaseui.auth.CredentialHelper.NONE,
        // Your terms of service url.
        tosUrl: 'https://example.com/terms',
        // Your privacy policy url.
        privacyPolicyUrl: 'https://example.com/privacy',
      };

      this.$fire.auth.onAuthStateChanged((user) => {
        if (user) {
          this.currentUser = user;
          // Aquí puedes iniciar tus listeners de data o hacer cualquier otra acción
        } else {
          this.currentUser = null;
          const ui = new firebaseui.auth.AuthUI(this.$fire.auth);
          ui.start('#firebaseui-auth-container', firebaseUiConfig);
        }
      });
    }
  },
  methods: {
    async login() {
      try {
        await this.$fire.auth.signInWithEmailAndPassword(this.email, this.password);
        const userDoc = await this.$fire.firestore.collection('stripe_customers').doc(currentUser.uid).get();
        const stripeData = userDoc.data();
        await this.$router.push({ path: '/payment', query: { name: currentUser.displayName, stripeData: JSON.stringify(stripeData) } });
      } catch (error) {
        console.error('Error de inicio de sesión:', error);
      }
    },
    async logout() {
      try {
        await this.$fire.auth.signOut();
        this.currentUser = null;
      } catch (error) {
        console.error('Error al cerrar sesión:', error);
      }
    },
    startDataListeners() {

    },
  },
};
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

input[type="email"],
input[type="password"] {
  font-family: "Your Creative Font", sans-serif;
}

body {
  background-color: #d5fefd;
  background-image: linear-gradient(315deg, #d5fefd 0%, #fffcff 60%);
}
</style>
